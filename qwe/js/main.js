let burger = document.getElementById('burger-block');
if(burger) {
	let menu = document.getElementById('menu-mobile');
	let exit = document.getElementById('exit');

	burger.onclick = function() {
		menu.style.display = 'flex';
	}

	exit.onclick = function() {
		menu.style.display = 'none';
	}
}