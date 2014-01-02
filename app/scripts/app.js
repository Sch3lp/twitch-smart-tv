'use strict';

angular.module('twitchSmartTvApp', ['twitchServices', 'samsungServices', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/keys', {
        templateUrl: 'views/keys.html',
        controller: function ($scope) {
          // $scope.registeredKeys = {13:'keypressCallback($event)'};
          // $scope.keypressCallback = function($event) {
          //   alert('Voila!');
          //   $event.preventDefault();
          // };
          $scope.keypress = function($event){
            $event.preventDefault();
            console.log("Key pressed: " + $event.keyCode);
            $scope.lastKey = $event.keyCode;
          };
        }
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function ($scope, Streams) {
          $scope.streams = Streams.getAll();
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);