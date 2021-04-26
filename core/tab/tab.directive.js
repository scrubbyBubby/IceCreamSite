angular.module('core.tab')
    .directive("tab", function() {
        return {
            scope : {
                name : "@",
                currentTab : "=",
                url : "@",
                shadow : "@",
            },
            transclude : true,
            template : "<div data-ng-include='url' data-ng-show='currentTab === undefined || currentTab == name'></div>"
        }
    })