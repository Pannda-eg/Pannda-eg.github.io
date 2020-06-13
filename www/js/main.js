$('.slider-product').slick({
	dots: true,
	autoplay: true,
	arrows: false,
	infinite: true
});

$('.tree-slider').slick({
	dots: true,
	verticalSwiping: true,
	vertical: true,
	autoplay: true,
	arrows: false,
	infinite: true,
	responsive: [
	{
		breakpoint: 992,
		settings: "unslick"
	}
	]
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 992) {
    $('.tree-slider').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('.tree-slider').slick();
      sliderIsLive = true;
    }
  }
});

$('.seven-slider').slick({
	dots: false,
	slidesToShow: 3,
  slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	infinite: true,
	responsive: [
	{
		breakpoint: 1366,
		settings: {
			slidesToShow: 3,
			dots: true,
			arrows: false,
			centerMode: true
		}
	},
	{
		breakpoint: 769,
		settings: {
			slidesToShow: 2,
			dots: true,
			arrows: false,
			centerMode: true
		}
	}
	]
});


// map

ymaps.ready(init);

function init() {
	var map = new ymaps.Map('map', {
		center: [55.75399400, 37.62209300],
		zoom: 12,
		controls: ['zoomControls'],
		behaciors: ['drag']
	});

	var placemark = new ymaps.Placemark([55.75399400, 37.62209300], {
		hintContent: '<div class="map__hint">Москва ул.Академика Королева 13 стр 1</div>',
		balloonContent: [
		'<div class="map__balloon">',
		'<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
		'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
		'</div>'
		].join('')
	},

	{
		iconLayout: 'default#image',
		iconImageHref: '/img/index/img-map.png',
		iconImageSize: [22, 22],
		iconImageOffset: [-11, -22]
	});


	map.geoObjects.add(placemark);
}


// добавление класса в header


$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".header-bottom"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 769){
      elem.addClass('header-slider');
      $('.header-slider').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				infinite: true,
				slidesToShow: 1
			});
    }
    else{
      elem.addClass('header-slider');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".top-page"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 1366){
      elem.addClass('top-slider');
      $('.top-slider').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				infinite: true,
				slidesToShow: 1
			});
    }
    else{
      elem.addClass('top-slider');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".advantages-block"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 992){
      elem.addClass('advantages-slider');
      $('.advantages-slider').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				infinite: true,
				slidesToShow: 1
			});
    }
    else{
      elem.addClass('advantages-slider');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});


// menu

let burger = document.getElementById('burger');
if(burger) {
	let menu = document.getElementById('menu-mobile');
	let exit = document.getElementById('close');

	burger.onclick = function() {
		menu.style.display = 'flex';
	}

	exit.onclick = function() {
		menu.style.display = 'none';
	}
}