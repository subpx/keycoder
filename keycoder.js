(function() {
	
	var display = document.getElementById('display');
	
	var displayKeycode = function(event) {
		event.preventDefault();
		
		display.innerHTML = event.keyCode;
	};
	
	document.addEventListener('keydown', displayKeycode);

})();