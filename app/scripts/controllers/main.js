'use strict';

angular.module('twitchSmartTvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.remoteKeys = ['KEY_LEFT'];
    Twitch.api({method: 'streams', params: { game: 'StarCraft II: Heart of the Swarm', limit:5}}, function(error, streams) {
	  $scope.streams = streams;
	  $scope.error = error;
	});
    /*$http.get('https://api.twitch.tv/kraken/streams/api/streams')
    	.success(function (data){
	    	$scope.streams = data;
	    	$scope.loading = false;
    	})
    	.error(function (){
    		$scope.error = "Couldn't load Twitch Streams :(";
	    	$scope.loading = false;
    	});*/
  })
  // TODO: figure out why I can't just add this as a script tag to index.html
  .run(function(){
  	Twitch.init({clientId: '3e4prc5i7sljtycsdsbbxzoqex93yrn', 
        version: 'v2'},
        function(error, status) {  
            if (error) {
                console.log(error);
            }
        });
  });
