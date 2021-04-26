  'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'core',
  'myApp.header',
  'myApp.footer',
  'myApp.welcome',
  'myApp.treat-menu',
  'myApp.food-menu',
  'myApp.version'
])

/*
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .otherwise({redirectTo: '/not-a-real-site'});
}]);

*/

angular.module("myApp")
  .controller("myCtrl", [
    "$scope",
    "$route",
    function($scope,$route) {
      $scope.scrollToSection = function(sectionName) {
        const sectionIds = {
          welcome: 'welcome-tab',
          treatMenu: 'treat-menu-tab',
          foodMenu: 'food-menu-tab'
        };

        const sectionId = sectionIds[sectionName];
        const sectionElement = document.querySelector(`#${sectionId}`);
        const newTopPos = sectionElement.offsetTop - 30;

        document.documentElement.style.scrollBehavior = 'smooth';
        document.documentElement.scrollTop = newTopPos;

        setTimeout(() => {
          document.documentElement.scrollBehavior = 'auto';
        }, 1000)
      };

      // refact
      $scope.setRoute = function(delay) {
        delay = delay || 100;
        setTimeout(
          function() {
            $scope.route = $route.current.params.tabName;
          },delay);
      };

      // refact
      $scope.getTabUrl = function() {
        var tabName = $route.current.params.tabName;
        return tabName+"/"+tabName+".html";
      };

      $scope.selectedTab = "Welcome";
      $scope.selectTab = function(tabName) {
        $scope.selectedTab = tabName;
      };

      $scope.boxOpen = false;
      $scope.openSecretBox = function() {
        if ($scope.boxOpen) {
          return;
        } 
        var elem = document.getElementById("secret-box-1")
        elem.style.opacity = 1;
        $scope.boxOpen = true;
      };

      $scope.themeCodes = {
        MCC : {
          "--light-chocolate" : "#b8aba0",
          "--chocolate" : "#36281b",
          "--vanilla" : "#c0f0c3",
          "--dark-vanilla" : "#428a5f",
          "--strawberry" : "#b8aba0",
          "--dark-strawberry" : "#428a5f"
        },
        RRI : {
          "--light-chocolate" : "#a38d7c",
          "--chocolate" : "#29211b",
          "--vanilla" : "#eceddd",
          "--dark-vanilla" : "#cecfc6",
          "--strawberry" : "#87715c",
          "--dark-strawberry" : "#36281b"
        },
        SCC : {
          "--light-chocolate" : "",
          "--chocolate" : "#a57d50",
          "--strawberry" : "#c26974",
          "--dark-strawberry" : "#8c303c"
        },
        NEP : {
          "--light-chocolate" : "#b8aba0",
          "--chocolate" : "#675544",
          "--vanilla" : "#ede8df",
          "--dark-vanilla" : "#bbae96",
          "--strawberry" : "#ffc9e2",
          "--dark-strawberry" : "#b65d87"
        }
      };

      $scope.themeLogos = {
        MCC : "images/mcc-logo.png",
        RRI : "images/rri-logo.png",
        SCC : "images/scc-logo.png",
        NEP : "images/spring-street-treats-header-logo.png"
      };

      $scope.currentTheme = "NEP";
      if (typeof(window.localStorage) != undefined) {
        var cachedTheme = window.localStorage.getItem("themeCode");
        if (cachedTheme != undefined) {
          $scope.currentTheme = cachedTheme;
        }
      };

      $scope.scrollTo = function(choice) {
        console.log(`Scrolling...`);
        const choiceIds = {
          'Welcome': 'welcome-tab',
          'Treat Menu': 'treat-menu-tab',
          'Food Menu': 'food-menu-tab',
        }

        const choiceId = choiceIds[choice];

        console.log(`choice="${choice}" ChoiceId="${choiceId}"`);

        const element = document.getElementById(choiceIds[choice]);

        console.log(`Element is ${(element === null || element === undefined) ? '':'not '}undefined.`);
        let yPosition = element.getBoundingClientRect().y;
        yPosition = yPosition - 50;
        yPosition = (yPosition < 0) ? 0 : yPosition;
        console.log(`Yposition is ${yPosition}`);
        const currentPosition = document.documentElement.scrollTop;
        const distance = Math.round((Number(yPosition) - Number(currentPosition)) * 100) / 100; 
        const steps = 30;
        const timestep = 10;
        let step = 1;
        const int = setInterval(() => {
          const newPosition = Math.round((currentPosition + (distance * step / steps)) * 100) / 100;
          document.documentElement.scrollTop = newPosition;
          step++;
          if (step > steps) {
            clearInterval(int);
          }
        }, timestep);
      };

      $scope.setTheme = function(themeCode) {
        var themeInfo = $scope.themeCodes[themeCode];
        var root = document.documentElement;
        for (var newColor in themeInfo) {
          if (themeInfo.hasOwnProperty(newColor)) {
            root.style.setProperty(newColor,themeInfo[newColor]);
          }
        }
        $scope.currentTheme = themeCode;
        window.localStorage.setItem("themeCode",themeCode);
      };

      $scope.setTheme($scope.currentTheme);
      $scope.openBigImage = function() {
        var element = document.getElementById("big-image-box");
        element.style.display = "block";
        element.style.opacity = 1;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
        }
      };

      var baseWidth,zoomWidth;
      var zoomedIn = false;
      $scope.closeBigImage = function() {
        console.log(`Attempting to close big image while overImage is ${$scope.overImage}`);
        if ($scope.overImage) {
          return;
        }
        var element = document.getElementById("big-image-box");
        element.style.display = "none";
        element.style.opacity = 0;
        window.onscroll = function() {}
        baseWidth = undefined;
        zoomWidth = undefined;
        zoomedIn = false;
        $scope.overImage = false;
      };

      setTimeout(
        function() {
          var parent = document.getElementById("big-image-box");
          parent.addEventListener("click",function(event) {
            $scope.closeBigImage();
          })
        },500
      )
    }
  ])

  setTimeout(
    function() {
      window.scrollTo(0,0);
    },500
  );