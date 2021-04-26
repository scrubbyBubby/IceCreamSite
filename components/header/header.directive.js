angular.module('myApp.header')
    .directive("header", function() {
        return {
            scope: {
                currentTheme: "=",
                setTheme: "=",
                scrollToSection: "="
            },
            link(scope) {
                scope.headerInfo = {
                    width: 44,
                    height: 50,
                    barHeight: 8
                };

                scope.mobileScrollToSection = function(section) {
                    scope.setMobileMenu(false);
                    scope.scrollToSection(section);
                };

                scope.getMobileMenuTransform = (active) => {
                    const storageHeight = 300;
                    return `translate3d(0px, ${(active) ? 0 : -storageHeight}px, 0px)`;
                }

                scope.toggleMobileMenu = function() {
                    scope.setMobileMenu(!scope.headerInfo.active);
                };

                scope.setMobileMenu = function(active) {
                    scope.headerInfo.active = active;
                    scope.mobileMenuStyle.transform = scope.getMobileMenuTransform(scope.headerInfo.active);
                }

                scope.mobileMenuStyle = {
                    transform: scope.getMobileMenuTransform(scope.headerInfo.active)
                };
            },
            templateUrl: "components/header/header.template.html"
        }
    });