twitch-smart-tv
===============

Samsung SmartTV App to watch Twitch.tv streams

## Why
I was sick of hooking up my laptop/pc to my SmartTV all the time.
And with the browser app not working properly on Twitch.tv, I just decided to build this app.

I'm not sure how difficult it's going to be, but I'll figure it out eventually.

## Help/Contribute
Any contributors welcome, especially if you have experience developing SmartTV Apps.

Visit [this page](CONTRIBUTE.md).

## To do:
### Application
If you don't like given-when-then style: deal with it. If you have improvements to make to these sentences, feel free to do so.

App=Twitch.tv SmartTV app

* As a SmartTV user, when I start up the App, then I can see the main twitch.tv/sc2 stream
* As an anonymous user, given I am in the App, when I click on a browse button, I can see an overview of Twitch.tv streams
* As an anonymous user, given I am in the Browse screen, when I use the arrowkeys on my remote, I can select the Twitch.tv stream I'm interested in watching
* As an anonymous user, given I am in the Browse screen, when I press the ok-button on my remote, the stream I selected starts playing fullscreen

### Tech
* Spike Require.js modular development & deployment on the emulator
* Spike AngularJS deployment on emulator
* Can I use the Twitch.TV API to send video-commands like play, pause, etc. ?
* Figure out how to package without js tests: Solved, using yeoman generated angular webapp which as a bower package command