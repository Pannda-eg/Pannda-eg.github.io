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

// scroll

var $page = $('html, body');
$('a[href*="#"]').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1400);
	return false;
});


// липкое меню

var h_hght = 116; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

$(function(){

	var elem = $('#scroll-top');
	var top = $(this).scrollTop();

	if(top > h_hght){
		elem.css('top', h_mrg);
	}

	$(window).scroll(function(){
		top = $(this).scrollTop();

		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
		} else {
			elem.css('top', h_mrg);
		}
	});

});

// slider



$(document).ready(function(){
	$('.slider-block').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
	});
});


$(document).ready(function(){
	$('.slider2').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
	});
});

// mod1



let tel = document.getElementById('tel1');
if(tel) {
	let mod1 = document.getElementById('mod1');
	let exit1 = document.getElementById('exit1');

	tel.onclick = function() {
		mod1.style.display = 'flex';
	}

	exit1.onclick = function() {
		mod1.style.display = 'none';
	}

	window.onclick = function(event) {

		if(event.target == mod1) {
			mod1.style.display = 'none';
		}
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod1"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let form2 = document.getElementById('form2');
if(form2) {
	let mod2 = document.getElementById('mod2');
	let exit2 = document.getElementById('exit2');

	form2.onclick = function() {
		mod2.style.display = 'flex';
	}

	exit2.onclick = function() {
		mod2.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod2"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let form3 = document.getElementById('form3');
if(form3) {
	let mod3 = document.getElementById('mod3');
	let exit3 = document.getElementById('exit3');

	form3.onclick = function() {
		mod3.style.display = 'flex';
	}

	exit3.onclick = function() {
		mod3.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod3"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let price1 = document.getElementById('price1');
if(price1) {
	let mod4 = document.getElementById('mod4');
	let exit4 = document.getElementById('exit4');

	price1.onclick = function() {
		mod4.style.display = 'flex';
	}

	exit4.onclick = function() {
		mod4.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod4"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let price2 = document.getElementById('price2');
if(price2) {
	let mod5 = document.getElementById('mod5');
	let exit5 = document.getElementById('exit5');

	price2.onclick = function() {
		mod5.style.display = 'flex';
	}

	exit5.onclick = function() {
		mod5.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod5"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let price3 = document.getElementById('price3');
if(price3) {
	let mod6 = document.getElementById('mod6');
	let exit6 = document.getElementById('exit6');

	price3.onclick = function() {
		mod6.style.display = 'flex';
	}

	exit6.onclick = function() {
		mod6.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod6"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let price4 = document.getElementById('price4');
if(price4) {
	let mod7 = document.getElementById('mod7');
	let exit7 = document.getElementById('exit7');

	price4.onclick = function() {
		mod7.style.display = 'flex';
	}

	exit7.onclick = function() {
		mod7.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod7"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let btn1 = document.getElementById('btn1');
if(btn1) {
	let mod8 = document.getElementById('mod8');
	let exit8 = document.getElementById('exit8');

	btn1.onclick = function() {
		mod8.style.display = 'flex';
	}

	exit8.onclick = function() {
		mod8.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod8"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn2 = document.getElementById('btn2');
if(btn2) {
	let mod9 = document.getElementById('mod9');
	let exit9 = document.getElementById('exit9');

	btn2.onclick = function() {
		mod9.style.display = 'flex';
	}

	exit9.onclick = function() {
		mod9.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod9"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let btn3 = document.getElementById('btn3');
if(btn3) {
	let mod10 = document.getElementById('mod10');
	let exit10 = document.getElementById('exit10');

	btn3.onclick = function() {
		mod10.style.display = 'flex';
	}

	exit10.onclick = function() {
		mod10.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod10"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn4 = document.getElementById('btn4');
if(btn4) {
	let mod11 = document.getElementById('mod11');
	let exit11 = document.getElementById('exit11');

	btn4.onclick = function() {
		mod11.style.display = 'flex';
	}

	exit11.onclick = function() {
		mod11.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod11"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn5 = document.getElementById('btn5');
if(btn5) {
	let mod12 = document.getElementById('mod12');
	let exit12 = document.getElementById('exit12');

	btn5.onclick = function() {
		mod12.style.display = 'flex';
	}

	exit12.onclick = function() {
		mod12.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod12"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let btn6 = document.getElementById('btn6');
if(btn6) {
	let mod13 = document.getElementById('mod13');
	let exit13 = document.getElementById('exit13');

	btn6.onclick = function() {
		mod13.style.display = 'flex';
	}

	exit13.onclick = function() {
		mod13.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod13"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let btn7 = document.getElementById('btn7');
if(btn7) {
	let mod14 = document.getElementById('mod14');
	let exit14 = document.getElementById('exit14');

	btn7.onclick = function() {
		mod14.style.display = 'flex';
	}

	exit14.onclick = function() {
		mod14.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod14"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn8 = document.getElementById('btn8');
if(btn8) {
	let mod15 = document.getElementById('mod15');
	let exit15 = document.getElementById('exit15');

	btn8.onclick = function() {
		mod15.style.display = 'flex';
	}

	exit15.onclick = function() {
		mod15.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod15"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn9 = document.getElementById('btn9');
if(btn9) {
	let mod16 = document.getElementById('mod16');
	let exit16 = document.getElementById('exit16');

	btn9.onclick = function() {
		mod16.style.display = 'flex';
	}

	exit16.onclick = function() {
		mod16.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod16"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btn10 = document.getElementById('btn10');
if(btn10) {
	let mod17 = document.getElementById('mod17');
	let exit17 = document.getElementById('exit17');

	btn10.onclick = function() {
		mod17.style.display = 'flex';
	}

	exit17.onclick = function() {
		mod17.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mod17"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let clickLink1 = document.getElementById('clickLink1');
if(clickLink1) {
	let clickBlock1 = document.getElementById('clickBlock1');
	let click1 = document.getElementById('click1');

	clickLink1.onclick = function() {
		clickBlock1.style.display = 'flex';
	}

	click1.onclick = function() {
		clickBlock1.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#clickBlock1"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let clickLink2 = document.getElementById('clickLink2');
if(clickLink2) {
	let clickBlock2 = document.getElementById('clickBlock2');
	let click2 = document.getElementById('click2');

	clickLink2.onclick = function() {
		clickBlock2.style.display = 'flex';
	}

	click2.onclick = function() {
		clickBlock2.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#clickBlock2"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let clickLink3 = document.getElementById('clickLink3');
if(clickLink3) {
	let clickBlock3 = document.getElementById('clickBlock3');
	let click3 = document.getElementById('click3');

	clickLink3.onclick = function() {
		clickBlock3.style.display = 'flex';
	}

	click3.onclick = function() {
		clickBlock3.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#clickBlock3"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let clickLink4 = document.getElementById('clickLink4');
if(clickLink4) {
	let clickBlock4 = document.getElementById('clickBlock4');
	let click4 = document.getElementById('click4');

	clickLink4.onclick = function() {
		clickBlock4.style.display = 'flex';
	}

	click4.onclick = function() {
		clickBlock4.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#clickBlock4"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let clickLink5 = document.getElementById('clickLink5');
if(clickLink5) {
	let clickBlock5= document.getElementById('clickBlock5');
	let click5 = document.getElementById('click5');

	clickLink5.onclick = function() {
		clickBlock5.style.display = 'flex';
	}

	click5.onclick = function() {
		clickBlock5.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#clickBlock5"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let stagesLink1 = document.getElementById('stagesLink1');
if(stagesLink1) {
	let stagesPage= document.getElementById('stagesPage');
	let clickStages1 = document.getElementById('clickStages1');
	let pod = document.getElementById('pod');

	stagesLink1.onclick = function() {
		stagesPage.style.display = 'flex';
	}

	clickStages1.onclick = function() {
		stagesPage.style.display = 'none';
	}

	if(pod) {
		let formStages= document.getElementById('formStages');
		let FormClick1 = document.getElementById('FormClick1');
		let txtstages = document.getElementById('txtstages');

		pod.onclick = function() {
			txtstages.style.display = 'none';
			formStages.style.display = 'flex';
		}

		FormClick1.onclick = function() {
			stagesPage.style.display = 'none';
			formStages.style.display = 'none';
		}
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let stagesLink2 = document.getElementById('stagesLink2');
if(stagesLink2) {
	let stagesPage2 = document.getElementById('stagesPage2');
	let clickStages2 = document.getElementById('clickStages2');
	let pod2 = document.getElementById('pod2');

	stagesLink2.onclick = function() {
		stagesPage2.style.display = 'flex';
	}

	clickStages2.onclick = function() {
		stagesPage2.style.display = 'none';
	}

	if(pod2) {
		let formStages2= document.getElementById('formStages2');
		let FormClick2 = document.getElementById('FormClick2');
		let txtstages2 = document.getElementById('txtstages2');

		pod2.onclick = function() {
			txtstages2.style.display = 'none';
			formStages2.style.display = 'flex';
		}

		FormClick2.onclick = function() {
			stagesPage2.style.display = 'none';
			formStages2.style.display = 'none';
		}
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage2"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let stagesLink3 = document.getElementById('stagesLink3');
if(stagesLink3) {
	let stagesPage3 = document.getElementById('stagesPage3');
	let clickStages3 = document.getElementById('clickStages3');
	let pod3 = document.getElementById('pod3');

	stagesLink3.onclick = function() {
		stagesPage3.style.display = 'flex';
	}

	clickStages3.onclick = function() {
		stagesPage3.style.display = 'none';
	}

	// if(pod2) {
	// 	let formStages2= document.getElementById('formStages2');
	// 	let FormClick2 = document.getElementById('FormClick2');
	// 	let txtstages2 = document.getElementById('txtstages2');

	// 	pod2.onclick = function() {
	// 		txtstages2.style.display = 'none';
	// 		formStages2.style.display = 'flex';
	// 	}

	// 	FormClick2.onclick = function() {
	// 		stagesPage2.style.display = 'none';
	// 		formStages2.style.display = 'none';
	// 	}
	// }
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage3"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let stagesLink4 = document.getElementById('stagesLink4');
if(stagesLink4) {
	let stagesPage4 = document.getElementById('stagesPage4');
	let clickStages4 = document.getElementById('clickStages4');
	let pod4 = document.getElementById('pod4');

	stagesLink4.onclick = function() {
		stagesPage4.style.display = 'flex';
	}

	clickStages4.onclick = function() {
		stagesPage4.style.display = 'none';
	}

	// if(pod2) {
	// 	let formStages2= document.getElementById('formStages2');
	// 	let FormClick2 = document.getElementById('FormClick2');
	// 	let txtstages2 = document.getElementById('txtstages2');

	// 	pod2.onclick = function() {
	// 		txtstages2.style.display = 'none';
	// 		formStages2.style.display = 'flex';
	// 	}

	// 	FormClick2.onclick = function() {
	// 		stagesPage2.style.display = 'none';
	// 		formStages2.style.display = 'none';
	// 	}
	// }
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage4"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let stagesLink5 = document.getElementById('stagesLink5');
if(stagesLink5) {
	let stagesPage5 = document.getElementById('stagesPage5');
	let clickStages5 = document.getElementById('clickStages5');
	let pod5 = document.getElementById('pod5');

	stagesLink5.onclick = function() {
		stagesPage5.style.display = 'flex';
	}

	clickStages5.onclick = function() {
		stagesPage5.style.display = 'none';
	}

	// if(pod2) {
	// 	let formStages2= document.getElementById('formStages2');
	// 	let FormClick2 = document.getElementById('FormClick2');
	// 	let txtstages2 = document.getElementById('txtstages2');

	// 	pod2.onclick = function() {
	// 		txtstages2.style.display = 'none';
	// 		formStages2.style.display = 'flex';
	// 	}

	// 	FormClick2.onclick = function() {
	// 		stagesPage2.style.display = 'none';
	// 		formStages2.style.display = 'none';
	// 	}
	// }
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage5"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let stagesLink6 = document.getElementById('stagesLink6');
if(stagesLink6) {
	let stagesPage6 = document.getElementById('stagesPage6');
	let clickStages6 = document.getElementById('clickStages6');
	let pod6 = document.getElementById('pod6');

	stagesLink6.onclick = function() {
		stagesPage6.style.display = 'flex';
	}

	clickStages6.onclick = function() {
		stagesPage6.style.display = 'none';
	}

	// if(pod2) {
	// 	let formStages2= document.getElementById('formStages2');
	// 	let FormClick2 = document.getElementById('FormClick2');
	// 	let txtstages2 = document.getElementById('txtstages2');

	// 	pod2.onclick = function() {
	// 		txtstages2.style.display = 'none';
	// 		formStages2.style.display = 'flex';
	// 	}

	// 	FormClick2.onclick = function() {
	// 		stagesPage2.style.display = 'none';
	// 		formStages2.style.display = 'none';
	// 	}
	// }
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#stagesPage6"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let workLink = document.getElementById('workLink');
if(workLink) {
	let modstage= document.getElementById('modstage');
	let exitstage = document.getElementById('exitstage');

	workLink.onclick = function() {
		modstage.style.display = 'flex';
	}

	exitstage.onclick = function() {
		modstage.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#modstage"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let leftsl = document.getElementById('leftsl');
if(leftsl) {
	let leftslid= document.getElementById('leftslid');
	let exitsl = document.getElementById('exitsl');

	leftsl.onclick = function() {
		leftslid.style.display = 'flex';
	}

	exitsl.onclick = function() {
		leftslid.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#leftslid"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });


let konsmod = document.getElementById('kons-mod');
if(konsmod) {
	let modkons= document.getElementById('modkons');
	let exitkons = document.getElementById('exitkons');

	konsmod.onclick = function() {
		modkons.style.display = 'flex';
	}

	exitkons.onclick = function() {
		modkons.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#modkons"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

// let kat1 = document.getElementById('link-kat');
// if(kat1) {
// 	let link-kat= document.getElementById('kat');
// 	let exitkat = document.getElementById('exitkat');

// 	kat1.onclick = function() {
// 		kat.style.display = 'flex';
// 	}

// 	exitkat.onclick = function() {
// 		kat.style.display = 'none';
// 	}
// }


let dob = document.getElementById('dob');
if(dob) {
	let formS= document.getElementById('formS');
	let exitformS = document.getElementById('formS-exit');

	dob.onclick = function() {
		formS.style.display = 'flex';
	}

	exitformS.onclick = function() {
		formS.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#formS"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

let btntur = document.getElementById('btn-tur');
if(btntur) {
	let tur= document.getElementById('tur');
	let turlink = document.getElementById('turlink');

	btntur.onclick = function() {
		tur.style.display = 'flex';
	}

	turlink.onclick = function() {
		tur.style.display = 'none';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#tur"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });