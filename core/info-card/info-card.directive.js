angular.module('core.info-card')
    .directive("infoCard", function() {
        return {
            scope : {
                infoCardObject: "="
            },
            link(scope) {
                const subProps = ["greeting", "hours", "address", "addressLink", "email", "emailLink", "phone", "phoneLink"];
                subProps.forEach(prop => scope[prop] = scope.infoCardObject[prop]);
            },
            templateUrl : "core/info-card/info-card.template.html"
        }
    })