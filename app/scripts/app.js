'use strict';

angular.module('twitchSmartTvApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function ($scope, twitchStreams) {
          console.log("in MainCtrl"); // We don't even ever enter this controller anymore? DAFUQ
          // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
          $scope.streams = twitchStreams;
        },
        resolve: {
          "twitchStreams": function($q){
            /* Got this by watching this youtube video: http://www.youtube.com/watch?v=P6KITGRQujQ */
            var deferred = $q.defer();
            console.log("in twitchStreams resolve");
            var myCallback = function(error, data) {
              console.log("in myCallback's execution");
              if (error === null){
                console.log("no errors, resolving data");
                deferred.resolve(data);
              } else {
                deferred.reject(error);
              }
            };
            // internally uses $ajax({}) to perform asynchronous calls to the Twitch REST API
            Twitch.api({method: 'streams', params: { game:'StarCraft II: Heart of the Swarm', limit:5}}, myCallback);
            console.log("after Twitch.api async call");
            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
