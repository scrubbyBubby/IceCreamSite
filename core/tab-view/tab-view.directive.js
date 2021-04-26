angular.module('core.tab-view')
.directive("tabView", function() {
    return {
        scope : {
            currentTab : "="
        },
        transclude : true,
        templateUrl : "core/tab-view/tab-view.template.html"
    }
})