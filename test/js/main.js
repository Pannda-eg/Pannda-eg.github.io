let videoLink = document.getElementById('videoLink');
if(videoLink) {
	let modalBlock = document.getElementById('modalBlock');

	videoLink.onclick = function() {
		modalBlock.style.display = 'flex';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#modalBlock"); // тут указываем ID элемента
        if (div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });