'use strict';

angular.module('twitchSmartTvApp', ['twitchServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/streams', {
        templateUrl: 'views/main.html',
        controller: function ($scope, Streams) {
          console.log("in MainCtrl");
          // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
          Streams.getAll().then(function (data) {
            console.log("in Streams.getAll().then()");
            $scope.streams = data;
          });
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });