Artemis Glitter UI Style Clone in CSS
=====================================

Environmental decoration for Artemis. Even if information is not functionally meaningful, the experience is enhanced by giving a feeling of authenticity, ambiance. 

This is meant to be an easy-to-use visual layer for greebly/glittery/set-dressing type screens on an Artemis SBS custom bridge. It is essentially just a CSS theme with an HTML5 "template" and a few examples to get you started. At the fancier end of things, you could probably glue this together with some kind of fancy node backend like artemis-glitter (that was certainly my original plan), but, baby steps. This project is inspired by @IvanSanchez's artemis-glitter, but more modest in scope. However, at some point in the future, the astute Game Master may be able to utilize these secondary interfaces to convey information to players or trigger game events in response to particular secondary interface actions, all in an in-game meaningful fashion; e.g., science scans of a region of space, rather than just known objects, reveals some play-impacting information or maybe a "reverse the polarity of the deflector dish while flooding the plasma vents" can transfer some energy to a stranded merchant vessel.

The most basic CSS layer should work with IE10 and "up and out". Fancier stuff uses CSS3 and SVG with animation and good JS. So the optimal environment would be a recentish edition of Chrome. Chrome (and/or Chromium and/or Canary) is available on most common platforms. Perhaps try NeverWhere's CloudReady, which will turn a laptop into a "Chromebook". I had pretty good success with it even on some slightly older Dell laptops.

You will probably need some kind of basic webserver (but does not have to be on the internet, per se, just available to your Artemis client computers on the LAN) and "install" this in the web root directory.

Presently pages are client-side only in any dynamicness. 


Pages
=====
Most are planned or in progress
 * cartography
 * life support
	* atmosphere, water 
		* comp./ temp/press
	* radiation, EM, Warp
	* firesupression/damcon
	* hull integrity
	* biological contamination/sterilization
	* accoustic
 * mission time clock (should something else go here?)
 * distribution networks
   	* plasma
  	* electricity
  	* water
  	* coolant
	* replicator component matter stream (carbon, hydrogen, oxygen, silicon, iron, sodium, nitrogen, aluminum)
 * sig int 
	* EMF/radio signal scanning & id
	* decryption module
 * "IT" computer system stats
 * security


License
=======
Everything is shared under the MIT license, details in the LICENSE file. Any bits or pieces that resemble others work is coincidence or is just for example.


Thanks
======

for software resources:
*  http://www.colorzilla.com/gradient-editor/
*  http://lea.verou.me/css3patterns/
*  https://developer.mozilla.org/en-US/docs/Web
*  https://www.google.com/fonts  
*  https://github.com/SamHerbert/SVG-Loaders
*  http://codepen.io/colin/pen/kKCDp

for information and references:
*  http://www.st-v-sw.net/STSWvolumetrics.html
*  http://www.navy.mil/navydata/cno/n87/usw/issue_10/breathe.html
*  https://books.google.com/books?id=yJkrAAAAYAAJ&lpg=PA30&ots=9fPIRYlRzW&dq=submarine%20air%20analysis%20spectral&pg=PA31#v=onepage&q=submarine%20air%20analysis%20spectral&f=false
*  http://www.nasa.gov/mission_pages/station/research/experiments/193.html
*  http://www.esa.int/Our_Activities/Human_Spaceflight/International_Space_Station/ANITA_air_quality_monitoring_for_the_International_Space_Station
*  http://www.bipm.org/metrology/time-frequency/units.html

for inspiration:
* https://github.com/IvanSanchez/artemis-glitter

and of course:
*  http://artemis.eochu.com/
