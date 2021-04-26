angular.module('core.svgs.asterisk-cross')
    .directive("asteriskCrossSvg", function() {
        return {
            scope : {
                width: "@",
                height: "@",
                barHeight: "@",
                active: "="
            },
            link(scope, elem, attrs) {
                scope.width = scope.width || scope.height || "30";
                scope.height = scope.height || scope.width;

                scope.masterStyle = {
                    width: `${scope.width}px`,
                    height: `${scope.height}px`
                };

                scope.rectangleStyle = {
                    ...scope.masterStyle,
                    display: "flex",
                    alignItems: "center"
                }
            },
            templateUrl : "core/svgs/asterisk-cross/asterisk-cross.template.html"
        }
    });