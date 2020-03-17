let burger = document.getElementById('burger');
if(burger) {
    let menu = document.getElementById('mobMenu');
    let exit = document.getElementById('exit');

    burger.onclick = function() {
        menu.style.display = 'flex';
        document.getElementById('top').className +=" filter-mob";
        document.getElementById('bottom').className +=" filter-mob";
    }
    exit.onclick = function() {
    	menu.style.display = 'none';
    	document.getElementById('top').className -=" filter-mob";
    	document.getElementById('top').className ="main-block";
    	document.getElementById('bottom').className -="main-block";
    	document.getElementById('bottom').className ="footer";
    }
}

