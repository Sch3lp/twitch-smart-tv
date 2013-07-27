'use strict';

angular.module('twitchSmartTvApp')
  .controller('MainCtrl', function ($q, $scope, $watch, twitchStreams) {
    // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
    $scope.streams = twitchStreams;
  });