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

function selectList() {
    let pulldown = document.querySelector('#order');
    let selectValue = pulldown.options[pulldown.selectedIndex].value;

    let list = document.querySelector('.list');
    let listEle = list.children;

    for (let i = 0; i < list.children.length; i++) {
        if (listEle[i].children[0].textContent === selectValue) {
            alert('?????? ????????? ???????????????!');
            document.querySelector('#order').selectedIndex = 0;
            return;
        }
    }
    if (selectValue === 'A') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectA');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>A</div><span>A . ????????? ????????? ???????????? (3~4??????)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">39800</span>???';
        document.querySelector('.list').appendChild(object);
    } else if (selectValue === 'B') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectB');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>B</div><span>B . 5??? ????????? ?????? (3??????) (+10,000???)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">49800</span>???';
        document.querySelector('.list').appendChild(object);
    } else if (selectValue === 'C') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectC');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>C</div><span>C . 5??? ????????? ?????? (3??????) (+20,000???)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">59800</span>???';
        document.querySelector('.list').appendChild(object);
    }
    totalCost();
    return;
}

let list = document.querySelector('.list');
list.onclick = function (e) {
    let target = e.target;
    if (target.tagName !== 'BUTTON') return;
    if (target.className === 'plus') {
        clickPlus(target);
    } else if (target.className === 'minus') {
        clickMinus(target);
    } else if (target.className === 'delete') {
        clickDelete(target);
    }
};

function clickPlus(target) {
    let count = target.parentElement.children[2].value;
    let type = target.parentElement.children[0].textContent;
    let val = Number(count);
    val += 1;

    if (type === 'A') {
        let total = 39800 * val;
        let object = document.querySelector('#objectA');
        object.children[2].value = val;
        object.children[6].textContent = total;
    } else if (type === 'B') {
        let total = 49800 * val;
        let object = document.querySelector('#objectB');

        object.children[2].value = val;
        object.children[6].textContent = total;
    } else if (type === 'C') {
        let total = 59800 * val;
        let object = document.querySelector('#objectC');
        object.children[2].value = val;
        object.children[6].textContent = total;
    }
    totalCost();
    return;
}

function clickMinus(target) {
    let parent = target.parentElement;
    let val = Number(parent.children[2].value);
    val -= 1;
    if (val < 1) return;
    parent.children[2].value = val;

    if (parent.children[0].textContent === 'A') {
        let total = 39800 * val;
        parent.children[6].textContent = total;
    } else if (parent.children[0].textContent === 'B') {
        let total = 49800 * val;
        parent.children[6].textContent = total;
    } else if (parent.children[0].textContent === 'C') {
        let total = 59800 * val;
        parent.children[6].textContent = total;
    }
    totalCost();
    return;
}
function clickDelete(target) {
    let parent = target.parentElement;
    document.querySelector('#order').selectedIndex = 0;
    parent.remove();
    totalCost();
    return;
}

function totalCost() {
    let list = document.querySelector('.list').children;
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].children[6].textContent * 1;
    }
    console.log(document.querySelector('.total-cost'));
    document.querySelector('.total-cost').textContent = total;
}
