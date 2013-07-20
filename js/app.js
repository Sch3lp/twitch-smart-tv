var Main = {                     // Main object
}

var widgetAPI = new Common.API.Widget();        // Creates Common module
var tvKey = new Common.API.TVKeyValue();

Main.onLoad = function() {             // called by body's onload event
    alert("Main.onLoad()");
    widgetAPI.sendReadyEvent();             // Sends ready message to Application Manager
    document.getElementById("anchor").focus();    // Sets focus on anchor for handling key inputs
                                                  // from the remote control
    /**
     * JavaScript code Here!
     */
}

Main.keyDown = function() {            // Key handler
    var keyCode = event.keyCode;
    alert("Main Key code : " + keyCode);

    switch (keyCode) {
        case tvKey.KEY_LEFT:
            alert("left");
            document.getElementById("welcome").innerHTML = "Nice to meet you.";
            /**
             * Code for Left key event!
             */
            break;
        case tvKey.KEY_RIGHT:
            alert("right");
            document.getElementById("welcome").innerHTML = "I'm so happy.";
            break;
        case tvKey.KEY_UP:
            alert("up");
            document.getElementById("welcome").innerHTML = "I Love you.";
            break;
        case tvKey.KEY_DOWN:
            alert("down");
            document.getElementById("welcome").innerHTML = "Good job.";
            break;
        case tvKey.KEY_ENTER:
            alert("enter");
            break;
        case tvKey.KEY_RETURN:
            break;
    }
}