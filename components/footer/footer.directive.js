angular.module('myApp.footer')
    .directive("footer", function() {
        return {
            link(scope) {
                scope.links = {
                    facebook: 'https://www.facebook.com/SpringStreetTreats/',
                    instagram: 'https://www.instagram.com/explore/locations/26457797/spring-street-treats/?hl=en'
                }
            },
            templateUrl: "components/footer/footer.template.html"
        }
    });