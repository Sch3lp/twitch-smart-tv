define([
  'tvkeyvalue' // Request common/api/tvkeyvalue.js
], function(TVKeyValue){
  var init = function(){
    alert("MainWindow.init()");
    // var tvKey = new Common.API.TVKeyValue();
    // TODO: figure out how to use Common.API.jQuery and replace this getElementById with a jQuery selector
    document.getElementById("dummy-anchor").focus(); // Sets focus on anchor for handling key inputs
    // TODO: bind keyDown() to onkeydown using jQuery
    document.getElementById("dummy-anchor").attr("onkeydown", onKeyDown());
    // onkeydown="Main.keyDown();"
    // TODO: where does this "event" come from?

    function onKeyDown(){
        var keyCode = event.keyCode;
        alert("User pressed: [" + keyCode +"]");

        switch (keyCode) {
            case tvKey.KEY_LEFT:
                alert("left pressed");
                document.getElementById("welcome").innerHTML = "Nice to meet you.";
                /**
                 * Code for Left key event!
                 */
                break;
            case tvKey.KEY_RIGHT:
                alert("right pressed");
                document.getElementById("welcome").innerHTML = "I'm so happy.";
                break;
            case tvKey.KEY_UP:
                alert("up pressed");
                document.getElementById("welcome").innerHTML = "I Love you.";
                break;
            case tvKey.KEY_DOWN:
                alert("down pressed");
                document.getElementById("welcome").innerHTML = "Good job.";
                break;
            case tvKey.KEY_ENTER:
                alert("enter pressed");
                break;
            case tvKey.KEY_RETURN:
                break;
        };
    }
  };

  return { 
    init: init
  };
});