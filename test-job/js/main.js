$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true
});



$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#success"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#error"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });