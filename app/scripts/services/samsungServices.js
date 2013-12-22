/*
	This module should serve as a wrapper to the Samsung SDK, much like twitchServices is a wrapper to the Twitch SDK
*/
angular.module('samsungServices', [])
  .factory('RemoteKeys', function ($rootScope){
  	var keydown = function($event){
  		console.log("$event: "+ $event);
	    var keyCode = $event.keyCode;
	    console.log("Key pressed: " + keyCode);
	    
	    switch(keyCode) {
	        case TVKeys.KEY_DOWN:
	            console.log("DOWN");
	            break;
	            
	        case TVKeys.KEY_UP:
	            console.log("UP");
	            break;

            case TVKeys.KEY_LEFT:
	            console.log("LEFT");
	            break;

            case TVKeys.KEY_RIGHT:
	            console.log("RIGHT");
	            break;

	        case TVKeys.KEY_ENTER:
	            console.log("ENTER");
	            break;

	        case TVKeys.KEY_PANEL_ENTER:
	            console.log("PANEL_ENTER");
	            break;
	        
	        default:
	            console.log("Unhandled key");
	            break;
	    }
  	}; // keydown function

  	return {keydown : keydown};
  });