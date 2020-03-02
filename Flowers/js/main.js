$('.slick-slider').slick({
	infinite: true,
	dots: false,
	arrows: true,
	autoplay: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			arrows: false
		}
	},
	{
		breakpoint: 992,
		settings: {
			centerMode: true,
			slidesToShow: 1,
			arrows: false
		}
	}
	]
});

$(document).ready(function(){
	$('a').on('click', function(e){
		e.preventDefault();
	});
});


function openbox(id){
	display = document.getElementById(id).style.display;

	if(display=='none'){
		document.getElementById(id).style.display='block';
	}else{
		document.getElementById(id).style.display='none';
	}
}

