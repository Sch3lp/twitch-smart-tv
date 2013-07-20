define([
  'mainwindow',
  'widget' // Request common/api/widget.js
], function(MainWindow, Widget){
  var initialize = function(){
    alert("Main.onLoad()");
    // var widgetAPI = new Common.API.Widget(); // Creates Common module
    // var tvKey = new Common.API.TVKeyValue();
    Widget.sendReadyEvent(); // Sends ready message to Application Manager
    document.getElementById("anchor").focus(); // Sets focus on anchor for handling key inputs
    MainWindow.init();

  };

  return { 
    initialize: initialize
  };
});


var Main = {                     // Main object
};

Main.onLoad = function() {             // called by body's onload event
    alert("Main.onLoad()");
    widgetAPI.sendReadyEvent();             // Sends ready message to Application Manager
    document.getElementById("anchor").focus();    // Sets focus on anchor for handling key inputs
                                                  // from the remote control
    /**
     * JavaScript code Here!
     */
};