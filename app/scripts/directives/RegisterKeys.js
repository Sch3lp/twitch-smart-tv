angular.module('RegisterKeysDirective')
  .directive('registerKeys', function ($document) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        scope.keypressCallback = function($event) {
    			alert('Event' + $event + ' was registered and got fired');
    			$event.preventDefault();
    		};
      }
    }