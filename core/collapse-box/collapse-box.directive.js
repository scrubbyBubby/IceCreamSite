angular.module('core.collapse-box')
    .directive('collapseBox', function() {
        return {
            scope : {
                collapseBoxObject: "=",
            },
            link : function(scope) {
                const subPropList = ["title", "description", "info", "specialInfo"];
                subPropList.forEach(prop => scope[prop] = scope.collapseBoxObject[prop]);

                scope.open = false;
                scope.toggle = function() {
                    scope.open = !scope.open;
                };

                scope.iconState = function() {
                    return (scope.open) ? 'open-icon' : 'closed-icon';
                };

                scope.plusCrossInfo = {
                    width: 30,
                    height: 30,
                    barHeight: 6
                }
            },
            templateUrl : "core/collapse-box/collapse-box.template.html",
            transclude : true
        }
    })