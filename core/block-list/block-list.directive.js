angular.module('core.block-list')
    .directive('blockList', function() {
        return {
            scope: {
                blockListObject: "="
            },
            transclude: false,
            link: function(scope) {
                scope.asteriskInfo = {
                    size: 25,
                    width: 5
                }
                
                scope.alphaBefore = (string1, string2) => {
                    const alphaRef = '0123456789abcdefghijklmnopqrstuvwxyz';

                    string1 = string1.toLowerCase();
                    string2 = string2.toLowerCase();

                    let before = false;
                    string1.split("").some((char1, index) => {
                        const char2 = string2[index],
                            val1 = alphaRef.indexOf(char1),
                            val2 = alphaRef.indexOf(char2);

                        if (char2 === undefined) {
                            before = true;
                            return true;
                        }
                        
                        if (val1 > val2) {
                            before = false;
                            return true;
                        } else if (val2 > val1) {
                            before = true;
                            return true;
                        };
                    });

                    return before;
                }
                
                scope.alphabetizeObject = (targetObject, targetProperty) => { 
                    const placeItem = (arr, prop, value) => {
                        const placed = arr.some((compareProp, index) => {
                            const compareValue = targetObject[compareProp][targetProperty];
                            const rightPlace = scope.alphaBefore(value, compareValue);
                            if (rightPlace) {
                                arr.splice(index, 0, prop);
                                return true;
                            }
                        });
                        if (!placed) arr.push(prop);
                    };

                    const sortedPropertyArray = Object.keys(targetObject).reduce((acc, prop) => {
                        const { [targetProperty]: value } = targetObject[prop];
                        placeItem(acc, prop, value);
                        return acc;
                    }, []);

                    return sortedPropertyArray;
                }
                
                scope.alphabetizeArray = (targetArray) => {
                    return targetArray.sort((a, b) => scope.alphaBefore(a, b) ? -1 : 1);
                }
                
                scope.checkItemObject = (itemObject) => {
                    let failedCheck = Object.keys(itemObject).some(name => {
                        const displayNameIsNotString = typeof itemObject[name].displayName !== 'string';
                        const categoriesIsNotArray = !Array.isArray(itemObject[name].categories);
                        return (displayNameIsNotString || categoriesIsNotArray);
                    });

                    return !failedCheck;
                }
                
                scope.buildItemList = (itemObject, categoryList) => {
                    let alphabetizedItemList = scope.alphabetizeObject(itemObject, 'displayName');
                    const categoryListEmpty = (categoryList.length === 0) ? true : false;
                
                    alphabetizedItemList = alphabetizedItemList.filter((name) => {
                        const { categories: itemCategories } = itemObject[name];
                        const inCategory = itemCategories.some(cat => (categoryList.indexOf(cat) !== -1) ? true : false);
                        return (categoryListEmpty || inCategory);
                    });

                    return alphabetizedItemList;
                }
                
                scope.buildItemIdObject = (itemList) => {
                    return  itemList.reduce((acc, item) => {
                        acc[item] = `${scope.blockListObject.blockId}-${item}`;
                        return acc;
                    }, {});
                }
                
                scope.buildCategoryObject = (itemObject) => {
                    const categoryObject = {};

                    Object.keys(itemObject).forEach(item => {
                        const { categories } = itemObject[item];
                        categories.forEach(cat => {
                            if (categoryObject[cat] === undefined) {
                                categoryObject[cat] = [];
                            }

                            categoryObject[cat].push(item);
                        })
                    })

                    return categoryObject;
                }
                
                scope.buildCategoryList = (categoryObject) => {
                    return scope.alphabetizeArray(Object.keys(categoryObject));
                }
                
                scope.buildBoxWidthObject = (itemList, itemIds) => {
                    return itemList.reduce((widthObject, item) => {
                        widthObject[item] = document.getElementById(itemIds[item]).offsetWidth;
                        return widthObject;
                    }, {});
                }
                
                scope.calculatePositionObject = (itemList, filteredItemList, widthObject) => {
                    const itemHeight = 62,
                        gap = 6,
                        element = document.getElementById(scope.blockListObject.blockId),
                        boxWidth = element.offsetWidth;
                        
                    let xOffset = 0, 
                        yOffset = 0;

                    const positionObject = itemList.reduce((positionObject, item) => {
                        const width = widthObject[item],
                            itemIsShown = (filteredItemList.indexOf(item) !== -1) ? true : false;

                        let itemX, itemY, opacity, zIndex, minWidth = width;
                        
                        if (itemIsShown) {
                            opacity = 1;
                            zIndex = 2;
                            
                            const overflow = xOffset + width + (gap * 2) >= boxWidth;
                            if (overflow) {
                                itemX = 0;
                                itemY = yOffset + itemHeight;
                                xOffset = width + gap;
                                yOffset += itemHeight;
                            } else {
                                itemX = xOffset;
                                itemY = yOffset;
                                xOffset += width + gap;
                            }
                        } else {
                            zIndex = -2;
                            opacity = 0;
                            itemX = undefined;
                            itemY = undefined;
                        }

                        positionObject[item] = {
                            zIndex: zIndex,
                            opacity: opacity,
                            xOffset: itemX,
                            yOffset: itemY,
                            minWidth: minWidth,
                        }

                        return positionObject;
                    }, {});

                    positionObject.yOffset = yOffset;
                    positionObject.itemHeight = itemHeight;
                    positionObject.gap = gap;

                    return positionObject;
                }
                
                scope.publishPositionObject = (positionObject, itemList, itemIds) => {
                    itemList.forEach(item => {
                        const element = document.getElementById(itemIds[item]);
                        const positionData = positionObject[item];
                        element.style.opacity = positionData.opacity;
                        element.style.zIndex = positionData.zIndex;

                        if (positionData.xOffset !== undefined && positionData.yOffset !== undefined) {
                            element.style.transform = `translate3d(${positionData.xOffset}px, ${positionData.yOffset}px, 0px)`;
                        }
                    });
                }
                
                scope.clearCategoryFilters = () => {
                    scope.activeCategoryList = [];
                    scope.filteredItemList = scope.buildItemList(scope.blockListObject.itemObject, scope.activeCategoryList);
                    scope.positionObject = scope.calculatePositionObject(scope.itemList, scope.itemList, scope.widthObject);
                    scope.publishPositionObject(scope.positionObject, scope.itemList, scope.itemIds);
                }
                
                scope.selectAllCategoryFilters = () => {
                    scope.activeCategoryList = scope.categoryList.slice();
                    scope.filteredItemList = scope.buildItemList(scope.blockListObject.itemObject, scope.activeCategoryList);
                    scope.positionObject = scope.calculatePositionObject(scope.itemList, scope.itemList, scope.widthObject);
                    scope.publishPositionObject(scope.positionObject, scope.itemList, scope.itemIds);
                }
                
                scope.handleCategoryWildcard = () => {
                    scope[(scope.activeCategoryList.length === 0) ? 'selectAllCategoryFilters' : 'clearCategoryFilters']();
                }
                
                scope.setItemBoxHeight = (positionObject) => {
                    return new Promise((resolve, reject) => {
                        const int = setInterval(() => {
                            const containerElement = document.getElementById(`${scope.blockListObject.blockId}-item-box`);
                            if (containerElement) {
                                clearInterval(int);
                                const newHeight = positionObject.yOffset + positionObject.itemHeight + positionObject.gap;
                                containerElement.style.minHeight = `${newHeight}px`;
                                resolve();
                            }
                        }, 100);
                    });
                }

                scope.booted = false;
                scope.boot = () => {
                    if (scope.booted === false) {
                        const setPlacesAndRemoveColor = () => {
                            const element = document.getElementById(`${scope.blockListObject.blockId}-cover`);
                            element.style.opacity = 1;
                            setTimeout(() => {
                                scope.clearCategoryFilters();
                                setTimeout(() => {
                                    element.style.opacity = 0;
                                    element.style.pointerEvents = "none";
                                }, 300);
                            }, 300);
                        }
    
                        if (scope.widthObject === undefined) {
                            const executeAfterTimeout = function(callback) {
                                return () => {
                                    scope.widthObject = scope.buildBoxWidthObject(scope.itemList, scope.itemIds);
                                    scope.positionObject = scope.calculatePositionObject(scope.itemList, scope.itemList, scope.widthObject);
                                    scope.setItemBoxHeight(scope.positionObject)
                                        .then(() => {
                                            scope.publishPositionObject(scope.positionObject, scope.itemList, scope.itemIds);
                                            callback();
                                        }
                                    );
                                }
                            }(setPlacesAndRemoveColor);
                            setTimeout(executeAfterTimeout, 200);
                        } else {
                            setPlacesAndRemoveColor();
                        }
                        scope.booted = true;
                    }
                }

                const initialize = () => {
                    const subProps = ["blockId", "catHeader", "itemHeader", "itemObject"];
                    subProps.forEach(prop => scope[prop] = scope.blockListObject[prop]);
                    scope.activeCategoryList = [];
                    scope.checkItemObject(scope.blockListObject.itemObject);
                    scope.itemList = scope.buildItemList(scope.blockListObject.itemObject, scope.activeCategoryList);
                    scope.categoryObject = scope.buildCategoryObject(scope.blockListObject.itemObject);
                    scope.categoryList = scope.buildCategoryList(scope.categoryObject);
                    scope.itemIds = scope.buildItemIdObject(scope.itemList);
                    setTimeout(() => {
                        scope.boot();
                    }, 300);
                };initialize();
                
                scope.toggleCategoryFilter = (category) => {
                    const index = scope.activeCategoryList.indexOf(category);
                    if (index === -1) {
                        scope.activeCategoryList.push(category);
                    } else {
                        scope.activeCategoryList.splice(index, 1);
                    };
                    scope.filteredItemList = scope.buildItemList(scope.blockListObject.itemObject, scope.activeCategoryList);
                    scope.positionObject = scope.calculatePositionObject(scope.itemList, scope.filteredItemList, scope.widthObject);
                    scope.publishPositionObject(scope.positionObject, scope.itemList, scope.itemIds);
                }

                /* 
                
                Known Issues: 
                    If the tab is not open when the directive launches then the initial positions
                        of items are set incorrectly
                
                */
            },
            templateUrl: 'core/block-list/block-list.template.html',
        }
    })