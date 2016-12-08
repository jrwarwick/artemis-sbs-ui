Imitation Artemis SBS UI in HTML5/CSS/JS for Enhanced Ambiance
==============================================================

Supplemental GUIs in HTML5/CSS/JS, as environmental decoration for the multiplayer game Artemis SBS. Even if information is not functionally meaningful, the experience is enhanced by giving a feeling of authenticity, ambiance.

This is meant to be an easy-to-use visual layer for greebly/glittery/set-dressing type screens on an Artemis SBS custom bridge. Somewhat similar to the TAC and INFO screens from the Data station, but with no real "in-game" information. It is essentially just a CSS theme with an HTML5 "template" and a few examples to get you started. At the fancier end of things, you could probably glue this together with some kind of fancy NodeJS backend like artemis-glitter (that was certainly my original plan), but, baby steps. This project is inspired by @IvanSanchez's artemis-glitter, but more modest in scope. However, at some point in the future, the astute Game Master may be able to utilize these secondary interfaces to convey information to players or trigger game events in response to particular secondary interface actions, all in an in-game meaningful fashion; e.g., science scans of a region of space, rather than just known objects, reveals some play-impacting information or maybe a "reverse the polarity of the deflector dish while flooding the plasma vents" can transfer some energy to a stranded merchant vessel, or perhaps moving a damcon team to an aft node (where the cargo bay is) represents the damcon team collecting needed parts to perform a critical repair (that would otherwise become re-damaged by GM standing in for "unstable phase transducers").

The most basic CSS layer should work with IE10 "or better". Fancier stuff uses CSS3 and SVG with animation and good JS. So the optimal environment would be a recentish edition of Chrome. Chrome (and/or Chromium and/or Canary) is available on most common platforms. Perhaps try NeverWhere's CloudReady, which will turn a laptop into a "Chromebook". I had pretty good success with it even on some slightly older Dell laptops.

To make some use of this, you will probably need some kind of basic webserver (but does not have to be on the internet, per se, just available to your Artemis client computers on the LAN) and "install" this in the web root directory. Since it is all client-side, just download a .zip file (or do a git clone) right in your web server's web root, and as long as your webserver is serving, you are ready to go. Should even be usable on android & iOS devices.

Presently pages are client-side only in any dynamicness. 

Live demo:  http://jrwarwick.github.io/artemis-sbs-ui/


Project Plan
============
Pages planned or in progress
 * cartography
	* randomized orrerry
	* waypoint/jump path tracer/generator
	* scrolling list of local celestial objects "of interest"
 * life support
	* ~~atmosphere, water~~
		* ~~composition~~
		* temp/press/vol with some kind of boyle's law graph
	* radiation, EM, Warp
	* firesupression/damcon
	* hull integrity
	* ~~biological contamination/sterilization~~
	* accoustic
 * ~~mission time clock~~  (this could be useful for paying customers to see remaining session time)
	* what else might go here? (what else would a paying customer want to see?) possibly a qr code or current IP address, whatever is necessary to get client connected.
	* Planck Time, Planck Epoch, super-UTC , stacked or concentric in "metric" clock 
	* display for the passing hectoseconds and kiloseconds
 * distribution networks
   	* plasma
  	* electricity
  	* water
  	* coolant
	* replicator component matter stream (carbon, hydrogen, oxygen, silicon, iron, sodium, nitrogen, aluminum)
 * comms
	* video:  ideally webrtc based, which might lead to need for broker server and/or library of prerecorded messages.
	* PTT. Maybe some kind of mumble integration
 * sig int  
	* EMF/radio signal scanning & id
	* decryption module
	* Jamming/anti-jamming
 * Cargo and Crew Manifest
 * Infirmary
 * "IT" computer system stats
 * security
	* minigame to contain raiders/infiltraters. Failure to contain results in GM ending mission (with actors that burst into the bridge costumed and artmed with "stun guns").
 * science 
	* short range sensor that can reveal pre-seeded (by GM) info that is fun/interesting, or maybe even game signficant.

Optional server-side statefulness via DB
 * angular/meteor
 * mongodb or couchdb
 * some kind of graceful fall back to a handful of static JSON files that would at least make pages look nice.

GM's console
 * general super easy report/editor
 * threshold/event alerts
 * presets/datasets that can be saved and loaded. E.g., a sectormap meant to be "bundled" with a particular scripted mission. Once loaded, secondary science scan facts could be discovered.

Optional Real actual gamestate integration
 * independent Data Client RESTful "translator/wrapper". Probably based on IAN 
 * optional consumption of the services
 * gamestate input/change capability


Contributing
============
I am new to git and github. I found it challenging to begin and I still struggle a bit with it. But it won't bite, and neither will I. Pull requests are welcome, though I do have something of a vision for where I want this to go and how it should be done. Please see GitHub's excellent introductory and tutorial materials and then come back here and fork-download-hack-requestpull etc.

Some of the technical decisions that don't seem very "modern" or "conventional" (or in other cases are unnecessarily "modern" or "hip") are either due to my ignorance as a "life-long student" of coding or sometimes short-term laziness (like moving things to functions later on, or consistency in style or comments cleanup) but sometimes there are deliberate choices. One notable example: I am a long-time fan of jquery, and I use it at work. Nonetheless, I wanted to gain some intimate familiarity with modern browser's DOM and ECMAscript and it takes to build something like jquery. Therefore, I am "doing it by hand" on purpose. Please do not send in a pull request that adds in jquery. Some food for thought, by the by: http://youmightnotneedjquery.com/ 


License
=======
Everything is shared under the MIT license, details in the LICENSE file. A few bits and pieces may resemble or reference the work others, and intended just for example.


Thanks
======

for contributing:
* @aaroneiche

for software resources:
*  http://www.colorzilla.com/gradient-editor/
*  http://lea.verou.me/css3patterns/
*  https://developer.mozilla.org/en-US/docs/Web
*  https://www.google.com/fonts  
*  https://github.com/SamHerbert/SVG-Loaders
*  http://codepen.io/colin/pen/kKCDp
*  https://github.com/sindresorhus/screenfull.js

for information and references:
*  http://www.st-v-sw.net/STSWvolumetrics.html
*  http://www.navy.mil/navydata/cno/n87/usw/issue_10/breathe.html
*  https://books.google.com/books?id=yJkrAAAAYAAJ&lpg=PA30&ots=9fPIRYlRzW&dq=submarine%20air%20analysis%20spectral&pg=PA31#v=onepage&q=submarine%20air%20analysis%20spectral&f=false
*  http://www.nasa.gov/mission_pages/station/research/experiments/193.html
*  http://www.esa.int/Our_Activities/Human_Spaceflight/International_Space_Station/ANITA_air_quality_monitoring_for_the_International_Space_Station
*  http://www.bipm.org/metrology/time-frequency/units.html

for inspiration:
* https://github.com/IvanSanchez/artemis-glitter
* http://youmightnotneedjquery.com/

and of course:
*  http://artemis.eochu.com/
