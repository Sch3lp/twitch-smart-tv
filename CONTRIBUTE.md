Contribute
==========

#How to set up your environment
I use [SublimeText2](http://www.sublimetext.com/2) at the moment, because it's got the best javascript support out there.

* Install the [Package Manager](http://wbond.net/sublime_packages/package_control/installation)
* Using PackageControl, install the [SublimeTODO plugin](https://github.com/robcowie/SublimeTODO)

#Yeoman
* npm install -g yeoman
* npm install -g bower
* npm install -g grunt
* After cloning this repo, navigate to the directory to which you cloned and type "npm install"

#Running browser that updates on save
* grunt server

#Running Tests
* grunt test

TODO: 
* add info on :
	* how to stub out the samsung ApplicationManager api etc. (add separate section on testing)


#Twitch.tv API
Twitch.tv has an elaborate API, which you can read all about over at the [Twitch-API project on GitHub](https://github.com/justintv/Twitch-API/blob/master/README.md)

They also have a [JS SDK](https://github.com/justintv/twitch-js-sdk) to use with their API. It basically simplifies a bunch of otherwise tedious http calls. One caveat is that this SDK relies on jQuery, and so needs to be loaded after jQuery is imported.

Twitch is also working on a [developer portal](http://dev.twitch.tv/).