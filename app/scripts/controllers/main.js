'use strict';

angular.module('twitchSmartTvApp', ['twitchServices'])
  .controller('MainCtrl', function ($scope, Streams) {
    // TODO: how do I set my $scope.streams variable to the returned streams array on asynchronous calls? Use AngularJS async ?
    $scope.streams = Streams.getAll();
  });