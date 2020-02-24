    $('.slick-slider').slick({
    	infinite: true,
    	dots: false,
    	arrows: false,
    	autoplay: false,
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	responsive: [
    	{
    		breakpoint: 576,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    	]
    });

    var btnMenu = document.getElementById('btnMenu');
    if(btnMenu) {
    	var menublock = document.getElementById('menu-block'),
    	exit = document.getElementsByClassName('exit')[0];

    	btnMenu.onclick = function() {
    		menublock.style.display = 'flex';
    	}

    	exit.onclick = function() {
    		menublock.style.display = 'none';
    	}
    }

    var login = document.getElementById('login');
    if(login) {
    	var register_block = document.getElementById('register_block'),
    	form_btn = document.getElementsByClassName('form-btn')[0],
    	form_exit = document.getElementsByClassName('form-exit')[0];

    	login.onclick = function() {
    		register_block.style.display = 'flex';
    	}

    	form_btn.onclick = function() {
    		register_block.style.display = 'none';
    	}

    		form_exit.onclick = function() {
    		register_block.style.display = 'none';
    	}
    }