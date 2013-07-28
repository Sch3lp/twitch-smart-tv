angular.module('twitchServices', [])
  .factory('Streams', function ($q){
    return { getAll: function() {
        /* Got this by watching this youtube video: http://www.youtube.com/watch?v=P6KITGRQujQ */
        var deferred = $q.defer();
        console.log("in twitchStreams resolve");
        var successCb = function(error, data) {
          console.log("In successCb's execution {");
          console.log("Error:" + error);
          console.log("Data:" + data);
          console.log("}");
          if (error === null){
            deferred.resolve(data);
          } else {
            deferred.reject(error);
          }
        };
        // internally uses $ajax({}) to perform asynchronous calls to the Twitch REST API
        Twitch.api({method: 'streams', params: { game:'StarCraft II: Heart of the Swarm', limit:5}}, successCb);
        console.log("after Twitch.api async call");
        var promise = deferred.promise;
        return promise;
      }
    }
  });