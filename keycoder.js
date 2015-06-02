(function() {
	
	var display = document.getElementById('display');
	
	var displayKeycode = function(event) {
	
		event.preventDefault();
		
		display.classList.remove('placeholder');
		
		var displayHTML = '';
		
		if(event.altKey && event.keyIdentifier !== 'Alt') {
			displayHTML += '<span class="key">Alt</span> + ';
		}
		
		if(event.ctrlKey && event.keyIdentifier !== 'Ctrl') {
			displayHTML += '<span class="key">Ctrl</span> + ';
		}
		
		if(event.shiftKey && event.keyIdentifier !== 'Shift') {
			displayHTML += '<span class="key">Shift</span> + ';
		}
		
		displayHTML += '<span class="key">' + event.keyIdentifier.replace('U+', '&#x') + '</span> = ' + event.keyCode;
		
		display.innerHTML = displayHTML;
	};
	
	document.addEventListener('keydown', displayKeycode);

})();