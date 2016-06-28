function toggleFullScreen() {
	var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
	if (!fullscreenElement) {
//      document.documentElement.requestFullscreen();
	var el = document.documentElement;
	if(el.requestFullscreen) {
		el.requestFullscreen();
	} else if(el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if(el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	} else if(el.msRequestFullscreen) {
		el.msRequestFullscreen();
	}
  } else {
	if(el.exitFullscreen) {
		el.exitFullscreen();
	} else if(el.mozExitFullScreen) {
		el.mozExitFullScreen();
	} else if(el.webkitExitFullscreen) {
		el.webkitExitFullscreen();
	} else if(el.msExitFullscreen) {
		el.msExitFullscreen();
	}
  }

}



////TODO
// redalert sound sound and/or red-tint everything.and/or popup

function audioAlert() {
        var audAlert = new Audio("audio/alert.m4a" );

        window.console && console.log(audAlert.readyState)
//      audAlert.load();
        audAlert.play();
        //setTimeout(function(audFX){ audFX.pause(); }(audAlert),850);

}




//getters for shipname, shiphealth, speed, loc, 
//		even just stub it for a static JSON file for now.

