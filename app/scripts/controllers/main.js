'use strict';

angular.module('twitchSmartTvApp')
  .controller('MainCtrl', function ($scope, resolvedStreamsPromise) {
    console.log("in MainCtrl");
    // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
    $scope.streams = resolvedStreamsPromise;
  });