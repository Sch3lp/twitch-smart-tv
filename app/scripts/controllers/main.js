'use strict';

angular.module('twitchSmartTvApp', [])
  .controller('MainCtrl', function ($scope, Streams) {
    console.log("in MainCtrl");
    // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
    Streams.getAll().then(function (data) {
      console.log("in Streams.getAll().then()");
      $scope.streams = data;
    });
  });