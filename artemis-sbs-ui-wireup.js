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

