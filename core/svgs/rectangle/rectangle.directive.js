angular.module('core.svgs.rectangle')
    .directive("rectangleSvg", function() {
        return {
            scope: {
                width: "@",
                height: "@",
                barHeight: "@"
            },
            link(scope) {
                const defaultSize = "30";
                scope.width = scope.width || scope.height || defaultSize;
                scope.height = scope.height || scope.width;
            },
            templateUrl : "core/svgs/rectangle/rectangle.template.html"
        }
    });