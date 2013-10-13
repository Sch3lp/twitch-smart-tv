angular.module('twitchServices', [])
  .factory('Streams', function ($q, $rootScope){
    var getAll = function() {
        /* Got this by watching this youtube video: http://www.youtube.com/watch?v=P6KITGRQujQ */
        /* Another super useful link: http://stackoverflow.com/questions/15604196/promises-in-angularjs-and-where-to-use-them */
        var deferred = $q.defer();
        var twitchCallBack = function(error, data) {
           /*
            * Wrap in $apply so when Angulars model requests an update, it will apply the result of the async twitch call with the resolve on the deferred object.
            * Just assigning the promise (in the controller) won't update the model by itself.
            */
          $rootScope.$apply(function(){
            /* need to suffix with .streams because original object looks like this:
            {
              streams: [{channel: xxx, user: xxx, name: xxx, ...}],
              _links: {}
            }
            See: https://github.com/justintv/Twitch-API/blob/master/v2_resources/streams.md#example-response-1
            */
            deferred.resolve(data.streams);
            deferred.reject(error);
          });
        };
        // internally uses $ajax({}) to perform asynchronous calls to the Twitch REST API
        Twitch.api({method: 'streams', params: { game:'StarCraft II: Heart of the Swarm', limit:5}}, twitchCallBack);
        return deferred.promise;
    };
    return { getAll: getAll }
  });