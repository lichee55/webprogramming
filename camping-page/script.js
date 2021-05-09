function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        } else {
            let sibling = this.parentElement.children;
            for (let i = 0; i < sibling.length; i++) {
                if (sibling[i].classList.contains('panel')) {
                    sibling[i].style.display = 'none';
                } else {
                    sibling[i].classList.remove('active');
                }
            }
            this.classList.add('active');
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        }
    });
}
