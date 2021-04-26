angular.module('core.svgs.triple-bar')
    .directive("tripleBarSvg", function() {
        return {
            scope : {
                width: "@",
                height: "@",
                barHeight: "@",
                active: "="
            },
            link(scope, elem, attrs) {

                scope.width = parseInt(scope.width || scope.height || 50);
                scope.height = parseInt(scope.height || scope.width || 50);
                scope.barHeight = parseInt(scope.barHeight || 8);

                scope.gapHeight = (scope.height - (scope.barHeight * 3)) / 2;

                scope.masterStyle = {
                    width: `${scope.width}px`,
                    height: `${scope.height}px`
                };

                scope.containerStyle = {
                    width: `${scope.width}px`,
                    height: `${scope.barHeight}px`
                };

                scope.calculateTransform = function(barIndex, active) {
                    const rotationList = [-45, 45, -45];

                    return (active) ? 
                        `translate3d(0px, ${(scope.barHeight * 1) + (scope.gapHeight * 1)}px, 0px) rotate(${rotationList[barIndex]}deg)` : 
                        `translate3d(0px, ${(scope.barHeight * barIndex) + (scope.gapHeight * barIndex)}px, 0px)`;
                };

                scope.renderRectangleTransforms = function(active) {
                    scope.rectangle1Style.transform = scope.calculateTransform(0, active);
                    scope.rectangle2Style.transform = scope.calculateTransform(1, active);
                    scope.rectangle3Style.transform = scope.calculateTransform(2, active);
                };

                scope.$watch('active', function(newValue, oldValue) {
                    scope.renderRectangleTransforms(newValue);
                }, true);

                scope.rectangle1Style = {
                    ...scope.masterStyle,
                    height: `${scope.barHeight}px`,
                    display: "flex",
                    alignItems: "center",
                    transition: `transform 200ms ease-in-out`,
                    transform: scope.calculateTransform(0)
                };

                scope.rectangle2Style = {
                    ...scope.rectangle1Style,
                    transform: scope.calculateTransform(1)
                };

                scope.rectangle3Style = {
                    ...scope.rectangle1Style,
                    transform: scope.calculateTransform(2)
                };
            },
            templateUrl : "core/svgs/triple-bar/triple-bar.template.html"
        }
    });