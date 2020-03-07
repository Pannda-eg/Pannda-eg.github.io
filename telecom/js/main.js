// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}


let btn1 = document.getElementById('btnOne');
if(btn1) {
    let it1 = document.getElementById('itOne');
    let it2 = document.getElementById('itTwo');

    btn1.onclick = function() {
        it1.style.display = 'none';
        it2.style.display = 'block';
    }
}

let btn2 = document.getElementById('btnTwo');
if(btn2) {
    let it2 = document.getElementById('itTwo');
    let it3 = document.getElementById('itThree');

    btn2.onclick = function() {
        it2.style.display = 'none';
        it3.style.display = 'block';
    }
}

let btn3 = document.getElementById('btnThree');
if(btn3) {
    let it3 = document.getElementById('itThree');
    let it4 = document.getElementById('itFour');

    btn3.onclick = function() {
        it3.style.display = 'none';
        it4.style.display = 'block';
    }
}

let btn4 = document.getElementById('btnFour');
if(btn4) {
    let it4 = document.getElementById('itFour');
    let it5 = document.getElementById('itFive');

    btn4.onclick = function() {
        it4.style.display = 'none';
        it5.style.display = 'block';
    }
}

$(document).ready(function(){
    $('.my-menu').on('click', function(){
        var burgerEl = document.querySelector('.my-menu .burger'),
            exitEl   = document.querySelector('.my-menu .exit');
        $('.sidebar-menu').toggle();

        if(burgerEl.style.display != 'none') {
            burgerEl.style.display = 'none';
            exitEl.style.display   = 'block';
        } else {
            burgerEl.style.display = 'block';
            exitEl.style.display   = 'none';
        }
    });
});
