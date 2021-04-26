angular.module('core.banner')
    .directive("banner", function() {
        return {
            scope : {
                bannerObject: "=",
            },
            link(scope) {
                const subProps = ["title", "bannerClass", "content", "info", "specialInfo", "extraSpecialInfo", "extraSpecialInfoClass"];
                subProps.forEach(prop => scope[prop] = scope.bannerObject[prop]);
            },
            templateUrl : "core/banner/banner.template.html"
        }
    })