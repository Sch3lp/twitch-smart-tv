// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    mainwindow: 'mainwindow.js'
    widget: 'lib/Common/API/Widget.js', // replace with $MANAGER_WIDGET/Common/API/Widget.js
    tvkeyvalue: 'lib/Common/API/TVKeyValue.js' // replace with $MANAGER_WIDGET/Common/API/TVKeyValue.js
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});