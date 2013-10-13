'use strict';

angular.module('twitchSmartTvApp', ['twitchServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/streams', {
        templateUrl: 'views/main.html',
        controller: function ($scope, Streams) {
          $scope.streams = Streams.getAll();
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });