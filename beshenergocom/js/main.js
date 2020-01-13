var burger = document.getElementById('burger');
if(burger) {
	var mobile = document.getElementById('mobileBlock'),
	exit = document.getElementsByClassName('exit')[0];

	burger.onclick = function() {
		mobile.style.display = 'flex';
	}

	exit.onclick = function() {
		mobile.style.display = 'none';
	}

	window.onclick = function(event) {

		if(event.target == mobile) {
			mobile.style.display = 'none';
		}
	}
}