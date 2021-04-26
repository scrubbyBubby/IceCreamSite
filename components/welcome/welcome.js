'use strict';

angular.module('myApp.welcome', [
  'ngRoute',
  'core'
])
.controller('WelcomeCtrl', [
  "$scope",
  function($scope) {
    $scope.imageUrls = [
      "images/front-full (lowres).jpg",
      "images/basketball3 (lowres).jpg",
      "images/playground (lowres).jpg",
      "images/concessions (lowres).jpg",
      "images/drive-thru (lowres).jpg",
      "images/big-swing (lowres).jpg",
      "images/front-door (lowres).jpg"
    ];

    $scope.infoCardObject = {
      greeting: "Welcome to Spring Street Treats, Oxford's Hometown Soft Serve Shop!",
      hours: "NOW OPEN 12-10:30 PM DAILY!",
      address: {
        street: "321 W Spring St",
        cityState: "Oxford, OH 45056"
      },
      addressLink: "https://www.google.com/maps/place/Spring+Street+Treats/@39.5072051,-84.7503157,17z/data=!3m1!4b1!4m5!3m4!1s0x88403d16a4865519:0x65a8d8a2e0f131d7!8m2!3d39.507201!4d-84.748127",
      email: "allen@springstreettreats.com",
      emailLink: "mailto:allen@springstreettreats.com",
      phone: "(513) 839 8021",
      phoneLink: "tel:+1-513-839-8021"
    }
}]);