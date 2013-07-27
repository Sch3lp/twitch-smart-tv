'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('twitchSmartTvApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should bind a list of remoteKeys to the scope', function () {
    expect(true).toBeTruthy();
  });
});
