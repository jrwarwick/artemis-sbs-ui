// Common Support functions and resources for the Artemis SBS GUI imitation/supplement
// authored by justin.warwick@gmail.com
// released under MIT license; see LICENSE file.



document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;
function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

function exitFullscreen(element) {
    if (element.exitFullscreen) {
        element.exitFullscreen();
    } else if (element.mozExitFullScreen) {
        element.mozExitFullScreen();
    } else if (element.webkitExitFullScreen) {
        element.webkitExitFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (document.webkitExitFullscreen) {
	document.webkitExitFullscreen();
    } else {
	document.console && console.log("uh oh, dont' know how to  escape fullscreen");
    }
}

function toggleFullScreen() {
	if (document.fullscreenEnabled) {
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
		if (fullscreenElement) {
			exitFullscreen(fullscreenElement);
		} else {
			//requestFullscreen(document.documentElement);
			requestFullscreen(document.getElementsByTagName("body")[0]);
		}
	}
}


function generateOrrery(containerID){
//Thanks Mr. Young!  http://codepen.io/BraedenYoung/pen/YqNjeK?editors=1100
	var container = document.getElementById(containerID);

	//container.innerHTML = "sun";
	{//need a for loop against a random # of planets
		var planetID = "planetOne";
		container.innerHTML += " <div id='" + planetID + "-orbit'>\n"
			+" <img id='"+planetID+"' src=\"images/3d-wireframe-sphere.svg\"> \n"
			+"</div> ";
		var pEl = document.getElementById(planetID);
		pEl.style.position = "absolute";
		pEl.style.height = "10px";
		pEl.style.width= "10px";
		//pEl.style.height = "7.64px";
		//pEl.style.width= "7.64px";
		pEl.style.top ="6%";
		pEl.style.left ="51%";
		pEl.style.marginLeft="-21px";
		pEl.style.marginTop="-12px";
		var poEl = document.getElementById(planetID+"-orbit");
		poEl.style.position = "absolute";
		poEl.style.top = "50%";
		poEl.style.left = "50%";
		poEl.style.width="154.8px"
		poEl.style.height="154.8px";
		poEl.style.marginTop = "-75px";
		poEl.style.borderWidth ="2px";
		poEl.style.borderStyle="dotted";
		poEl.style.borderColor ="white";
		poEl.style.borderRadius="50%";
		poEl.style.MozAnimationName="spin-left";
		poEl.style.MozAnimationDelay="8.41s";
		poEl.style.MozAnimationTimingFunction="linear";
		poEl.style.MozAnimationDuration="infinite";
		poEl.style.webkitAnimation="spin-left 8.41s linear infinite";
		poEl.style.msAnimation="spin-left 8.41s linear infinite";
		poEl.style.oAnimation="spin-left 8.41s linear infinite";
		poEl.style.animation="spinpoEl.style.left 8.41s linear infinite";
//was 2.41, change dto 8.41


	}
/* perplanet...

#mercury {
  position: absolute;
  top: 6%;
  left: 51%;
  height: 7.64px;
  width: 7.64px;
  margin-left: -21px;
  margin-top: -12px;
}

#mercury-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 154.8px;
  height: 154.8px;
  margin-top: -75px;
  margin-left: -75px;
  border-width: 2px;
  border-style: dotted;
  border-color: white;
  border-radius: 50%;
}

#mercury-orbit {
  -webkit-animation: spin-left 2.41s linear infinite;
  -moz-animation: spin-left 2.41s linear infinite;
  -ms-animation: spin-left 2.41s linear infinite;
  -o-animation: spin-left 2.41s linear infinite;
  animation: spin-left 2.41s linear infinite;
}

*/
/* once for all 

@keyframes spin-left {
  100% {
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
*/
}




                                /*var 
document.addEventListener("DOMContentLoaded", function(event) { 
	//do work
	var Bel = document.getElementsByTagName("body")[0];
	Bel.insertAdjacentHTML("beforeend", '<audio src="audio/changescreen.webm" type="audio/webm" />');
});

	--refrence--
			thisAudio = $('<audio/>').attr({
			src: BASE_AUDIO_PATH + url,
			preload: "none",
			onplay:"$(this).siblings('button').css('color', 'yellow');",
			onended: "$(this).siblings('button').css('color', 'white');",
			type: mediaTypes[url.substr(url.length - 3)]
			})      
*/



//TODO:
//function establish audio type:
	//Start with ogg, fallback to m4a, fallback to webm
	//then loop and load all needed files
	//bonus: have a fallback for no supported file types:  floating div pops up and flashes, then disappears. der blinken lights

var audAlert = new Audio("audio/alert.m4a" );
var audAck = new Audio("audio/changescreen.webm" );
//var audAck = new Audio("audio/bleep.m4a" );
function audioAlert() {
        window.console && console.log(audAlert.readyState)
		//audAlert.load();
        audAlert.play();
}

function audioAcknowledge() {
	audAck.play();
}



document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("Attempting to play " + audAck);
	audioAcknowledge();
});



////TODO
//getters for shipname, shiphealth, speed, loc, 
//		even just stub it for a static JSON file for now.
// test for audio compatibility with OSX/safari, iOS, android
// remaining audio events
// red-tint-ifier everything.and/or popups for red alert condition
