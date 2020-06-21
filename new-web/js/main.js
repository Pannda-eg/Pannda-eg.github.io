let menu = document.getElementById('menu');
if(menu) {
	let hoverMenu = document.getElementById('hover-menu');
	let close = document.getElementById('close');

	menu.onclick = function() {
		hoverMenu.style.left = '0';
	}

	close.onclick = function() {
		hoverMenu.style.left = '-100%';
	}
}