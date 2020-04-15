document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});





// menu
$(document).ready(function(){
    $('.my-menu').on('click', function(){
        var burgerEl = document.querySelector('.my-menu .burger'),
            exitEl   = document.querySelector('.my-menu .exit'),
            menuMain = document.querySelector('.menu-main');

        if(menuMain.style.display == '')
            menuMain.style.display = 'none';

        if(menuMain.style.display != 'none') {
            menuMain.style.display = 'none';
        } else {
            menuMain.style.display = 'flex';
        }

        if(burgerEl.style.display != 'none') {
            burgerEl.style.display = 'none';
            exitEl.style.display   = 'flex';
        } else {
            burgerEl.style.display = 'flex';
            exitEl.style.display   = 'none';
        }
    });
});

// смена полей

document.onclick = function() {
var elem = window.event.srcElement;

if (elem.className == "change-link") {
    var n1 = document.getElementById('n1').value,
        n2 = document.getElementById('n2').value;

    document.getElementById('n1').value = n2;
    document.getElementById('n2').value = n1;
}
};

