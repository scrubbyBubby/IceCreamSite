angular.module('core.menu-item')
    .directive('menuItem', function() {
        return {
            templateUrl : "core/menu-item/menu-item.template.html",
            scope : {
                itemName : "@",
                menuItemObject: "="
            }
        }
    })