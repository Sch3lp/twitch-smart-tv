'use strict';

angular.module('twitchSmartTvApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          twitchStreams: function($q){
            var deferred = $q.defer();
            
            var myCallback = function(error, data) {
              if (error === null){
                deferred.resolve(data);
              } else {
                deferred.reject(error);
              }
            };
            // internally uses $ajax({}) to perform asynchronous calls to the Twitch REST API
            Twitch.api({method: 'streams', params: { game:'StarCraft II: Heart of the Swarm', limit:5}}, myCallback);

            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
