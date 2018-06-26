// Controls behavior functions for the Artemis SBS GUI imitation/supplement
// Separated because it should be called at the end of the page, when document is nearly ready
// and common functions already defined.
// authored by justin.warwick@gmail.com
// released under MIT license; see LICENSE file.

//=\\ Standard Wire-up
function makeExclusiveActiveButton(btnelm) {
	document.querySelectorAll('button.major_action').forEach(function(elm,idx,arr){ 
		elm.className = elm.className.replace(/(?:^|\s)major_action_active(?!\S)/,'');
		//elm.className = elm.className.replace(/\bmajor_action_active\b/,'');
	} );
	btnelm.className += " major_action_active";
	audioAcknowledge && audioAcknowledge();
}
document.querySelectorAll('button.major_action').forEach(function(elm,idx,arr){ 
	elm.addEventListener("click", function(){ makeExclusiveActiveButton(this); }); 
} );


if (sessionStorage["greeting"] == "acknowledged") {
	document.querySelector("#communique").style.display = 'none';
}





var audioExtensions = {};
	audioExtensions["ogg"] = "ogg";
	audioExtensions["webm"] = "webm";
	audioExtensions["mp4"] = "aac";
var audioPath = "./audio/";
var audioType;

var audAck;
var audAlert;
var audInput;

auDummy = document.getElementById("audUmmy").appendChild(document.createElement("audio"));
for (var key in audioExtensions) {
	if (auDummy.canPlayType("audio/"+audioExtensions[key]) != '') {
		auDummy.src = audioPath + "ui2." + key;
		//TODO: test it further??
		console.log(auDummy.src + "   " +auDummy.src.lastIndexOf(".")); 
		audioType =  auDummy.src.slice(auDummy.src.lastIndexOf(".") + 1);
		console.log("We have a winner: " + audioType);
		break;
	}
}
audAck   = new Audio("audio/changescreen." + audioType);
audAlert = new Audio("audio/ui13." + audioType);
audInput = new Audio("audio/ui2." + audioType);

function audioAlert() {
        window.console && console.log(audAlert.readyState)
		//audAlert.load();
        audAlert.play();
		//TODO:bonus: have a fallback for no supported file types (or MUTE active):  floating div pops up and flashes, then disappears. der blinken lights
}

function audioAcknowledge() {
	audAck.play();
}

function audioInput() {
	audInput.play();
}

document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("Attempting to play " + audAck);
	audioAcknowledge();
});
