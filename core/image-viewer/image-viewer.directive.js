angular.module('core.image-viewer')
    .directive("imageViewer", [
        "$interval",
        "$timeout",
        function($interval,$timeout) {
            return {
                scope : {
                    viewerId : "@",
                    imageUrls : "=",
                    viewerWidth : "@",
                    imageContainerClass : "@",
                    initialImage : "@",
                    timeBetweenSlide : "@"
                },
                link : function(scope, elem, attrs) {
                    scope.image = {
                        containerClass: scope.imageContainerclass || "",
                        class: `image-viewer-image ${attrs.imageContainerClass || ""}`
                    };

                    scope.configuration = {
                        timeBetweenSlide: attrs.timeBetweenSlide || 5000,
                        initialImage: attrs.initialImage || 1,
                        slideCount: 1,
                        imagesAtOnce: 1,
                        timestep: 100
                    };

                    scope.viewer = {
                        wrapperId: scope.viewerId+"-wrapper",
                        masterId: scope.viewerId+"-master",
                        id: scope.viewerId,
                        width: attrs.viewerWidth || "700px",
                        currentImage: 1,
                        countingTime: true,
                        timeSitting: 0,
                        lastWidth: undefined,
                        lastHeight: undefined
                    };
                    
                    scope.styles = {
                        main: { display : "inline-block" },
                        spool: { left : 0, gap: '0px' },
                        wrapper: { height : "300px" },
                        dot: { /* width: scope.viewer.width */ }
                    };

                    scope.cancelInt = undefined;
                    scope.illuminate = undefined;

                    scope.startSlideshow = function() {
                        scope.slideshowInterval = $interval(() => {
                            if (!scope.viewer.countingTime) return;

                            scope.viewer.timeSitting += scope.configuration.timestep;
                            if (scope.viewer.timeSitting >= scope.configuration.timeBetweenSlide) {
                                scope.viewer.timeSitting = 0;
                                scope.incrementImages(scope.configuration.slideCount);
                            }
                        }, scope.configuration.timestep);
                    };

                    scope.boot = function() {
                        const checkInterval = 100;

                        const getPromise = function(callback) {
                            return new Promise((resolve, reject) => {
                                const int = setInterval(() => {
                                    const result = callback();
                                    if (result !== null && result !== undefined) {
                                        clearInterval(int);
                                        resolve(result);
                                    }
                                }, checkInterval);
                            });
                        };

                        const getElementPromise = function(parentElement, querySelector) {
                            const getElement = function(parentElement, querySelector) {
                                return () => parentElement.querySelector(querySelector);
                            }(parentElement, querySelector);
                            return getPromise(getElement);
                        };

                        const elementPromises = [
                            getElementPromise(document, `#${scope.viewer.id}`),
                            getPromise(() => {
                                const firstImage = document.querySelector(`#${scope.viewer.id} img`);
                                const firstImageIsLoaded = firstImage.complete && firstImage.naturalHeight !== 0;
                                if (firstImageIsLoaded) return firstImage;
                            }),
                            getElementPromise(document, `#${scope.viewer.wrapperId}`),
                            getElementPromise(document, `#${scope.viewer.masterId}`)
                        ];

                        const getHeightAndWidth = ({ firstImage, spoolElement }) => {
                            const naturalWidth = firstImage.naturalWidth;

                            const imageWidth = scope.getWidthHeight(spoolElement, 'width');
                            const ratio = (imageWidth / naturalWidth);
                            const imageHeight = scope.getWidthHeight(firstImage, 'height', { ratio });

                            document.querySelectorAll(`#${scope.viewer.id} img`).forEach(element => {
                                element.style.width = `${imageWidth}px`;
                                element.style.height = `${imageHeight}px`;
                            });
                        };

                        const addEventListeners = ({ master }) => {
                            const waitFunc = () => {
                                scope.viewer.countingTime = false;
                                scope.viewer.timeSitting = 0;
                            };

                            document.querySelectorAll(`#${scope.viewer.id} img`).forEach(element => {
                                element.style.width = `${scope.viewer.width}px`;
                            });
                            master.addEventListener("mouseenter", waitFunc);
                            master.addEventListener("mouseleave", function(event) {
                                scope.viewer.countingTime = true;
                            });
                            const parent = document.getElementById("big-image-box");
                            parent.addEventListener("click", function(event) {
                                scope.viewer.countingTime = true;
                                if (scope.cancelInt != undefined) {
                                    clearInterval(scope.cancelInt);
                                    delete scope.cancelInt;
                                }
                            });

                            const leftArrowCover = master.querySelector(`.left-arrow-cover`);
                            const leftArrow = leftArrowCover.querySelector(`.left-arrow-icon`);
                            const resetPointLeft = () => {
                                leftArrow.classList.remove('point-left');
                                void leftArrow.offsetWidth;
                                leftArrow.classList.add('point-left');
                            };
                            leftArrowCover.addEventListener('click', () => {
                                resetPointLeft();
                                incrementImages(-1 * scope.configuration.slideCount);
                            });

                            leftArrowCover.addEventListener('mouseover', () => {
                                resetPointLeft();
                            });

                            const rightArrowCover = master.querySelector(`.right-arrow-cover`);
                            const rightArrow = rightArrowCover.querySelector(`.right-arrow-icon`);
                            const resetPointright = () => {
                                rightArrow.classList.remove('point-right');
                                void rightArrow.offsetWidth;
                                rightArrow.classList.add('point-right');
                            };
                            rightArrowCover.addEventListener('click', () => {
                                resetPointright();
                                incrementImages(-1 * scope.configuration.slideCount);
                            });

                            rightArrowCover.addEventListener('mouseover', () => {
                                resetPointright();
                            });
                        };
                        
                        const setImage = () => {
                            scope.setImage(scope.configuration.initialImage, scope.viewer.width);
                        };

                        Promise.all(elementPromises).then(([ element, firstImage, spoolElement, master ]) => {
                            console.log(`All promises have been resolved!`);
                            getHeightAndWidth({ firstImage, spoolElement });
                            addEventListeners({ master });
                            setImage();
                            scope.startSlideshow();
                        });
                    }();

                    scope.constructTranslation = function({ x, y }) {
                        return `translate3d(${x || 0}px, ${y || 0}px, 0px)`;
                    };

                    scope.setImage = function(imageNumber,width) {
                        console.log('Calling from set image');
                        const wrapper = document.querySelector(`#${scope.viewer.wrapperId}`);
                        width = parseInt(width || scope.getWidthHeight(wrapper, 'width'));
                        console.log(`width="${width}"`);

                        scope.viewer.currentImage = imageNumber;
                        scope.viewer.timeSitting = 0;

                        const translateX = (imageNumber - 1) * Number(width) * -1;
                        document.getElementById(scope.viewer.id).style.transform = scope.constructTranslation({x: translateX});

                        scope.getIlluminated();
                    };

                    scope.incrementImages = function(count) {
                        console.log(`Incrementing images by ${count}`);

                        let imageNumber = scope.viewer.currentImage + count;
                        imageNumber = (imageNumber > scope.imageUrls.length) ? imageNumber - scope.imageUrls.length : imageNumber;
                        imageNumber = (imageNumber <= 0) ? imageNumber + scope.imageUrls.length : imageNumber;
                        
                        console.log(`imageNumber=${imageNumber}`);
                        scope.setImage(imageNumber);
                        scope.viewer.timeSitting = 0;
                        scope.getIlluminated();
                    };

                    scope.getIlluminated = function() {
                        const startIndex = scope.viewer.currentImage - 1,
                            { slideCount } = scope.configuration,
                            endIndex = startIndex + slideCount;

                        scope.illuminated = Object.keys(scope.imageUrls).reduce((illumObject, imageNumber, index) => {
                            const url = scope.imageUrls[imageNumber];
                            illumObject[url] = (index >= startIndex && index < endIndex) ? true : false;
                            return illumObject;
                        }, {});
                    };scope.getIlluminated();

                    scope.setByUrl = function(url) {
                        var index = scope.imageUrls.indexOf(url) + 1;
                        scope.setImage(index);
                    };

                    scope.getWidthHeight = function(element, type, options = {}) {
                        var type = (type === 'width') ? 'width' : 'height',
                            propName = (type === 'width') ? 'offsetWidth' : 'offsetHeight',
                            lastName = (type === 'width') ? 'lastWidth' : 'lastHeight',
                            wh = element[propName] * (options.ratio || 1),
                            whString = `${wh}px`;

                        document.querySelector(`#${scope.viewer.wrapperId}`).style[type] = whString;
                        document.querySelector(`#${scope.viewer.masterId}`).style[type] = whString;
                        scope.viewer[lastName] = wh;

                        const callbacks = {
                            'width': () => {
                                scope.viewer.width = wh;
                                scope.styles.main.width = whString;
                                scope.styles.dot.width = whString;
                                scope.styles.spool.width = (scope.viewer.width * scope.imageUrls.length)+"px";
                            },
                            'height': () => {

                            }
                        };

                        if (wh != scope.viewer[lastName]) { callbacks[type]() };

                        return wh;
                    };

                    scope.setBigPicture = function(url) {
                        const parent = document.getElementById("big-image-box");
                        parent.style.display = "flex";
                        parent.style.opacity = 1;

                        const element = document.getElementById("big-image");
                        element.src = url;

                        scope.cancelInt = setInterval(
                            function(element) {
                                return function() {
                                    element.style.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)+"px";
                                }
                            }(element),100
                        )

                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                        window.onscroll = function() {
                          window.scrollTo(scrollLeft, scrollTop);
                        }

                        scope.viewer.countingTime = false;
                    };
                },
                templateUrl : "core/image-viewer/image-viewer.template.html"
            }
        }
    ]
)