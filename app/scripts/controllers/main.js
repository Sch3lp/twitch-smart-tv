'use strict';

angular.module('twitchSmartTvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.remoteKeys = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('/api/streams')
    	.succes(function (data){
	    	$scope.streams = data;
	    	$scope.loading = false;
    	})
    	.error(function (){
    		$scope.error = "Couldn't load Twitch Streams :(";
	    	$scope.loading = false;
    	});
  });
