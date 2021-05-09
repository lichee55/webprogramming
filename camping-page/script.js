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
            alert('이미 선택된 항목입니다!');
            document.querySelector('#order').selectedIndex = 0;
            return;
        }
    }
    if (selectValue === 'A') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectA');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>A</div><span>A . 스피드 원터치 팝업텐트 (3~4인용)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">39800</span>원';
        document.querySelector('.list').appendChild(object);
        return;
    } else if (selectValue === 'B') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectB');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>B</div><span>B . 5초 원터치 텐트 (3인용) (+10,000원)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">49800</span>원';
        document.querySelector('.list').appendChild(object);
        return;
    } else if (selectValue === 'C') {
        let object = document.createElement('div');
        object.setAttribute('id', 'objectC');
        object.setAttribute('class', 'listElement');
        object.innerHTML +=
            '<div class="type" hidden>C</div><span>C . 5초 원터치 텐트 (3인용) (+20,000원)</span><input type="text" value="1" disabled  size=4 /><button class="plus">+</button><button class="minus">-</button><button class="delete">x</button><span class="total">59800</span>원';
        document.querySelector('.list').appendChild(object);
        return;
    }
}

// function listHandler() {
//     console.log();
// }

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
    let totalCost = target.parentElement.children[6].textContent;
    let val = Number(count);
    val += 1;

    if (type === 'A') {
        let total = 39800 * val;
        let object = document.querySelector('#objectA');
        object.children[2].value = val;
        object.children[6].textContent = total;
        return;
    }
    if (type === 'B') {
        let total = 49800 * val;
        let object = document.querySelector('#objectB');

        object.children[2].value = val;
        object.children[6].textContent = total;
        return;
    }
    if (type === 'C') {
        let total = 59800 * val;
        let object = document.querySelector('#objectC');
        object.children[2].value = val;
        object.children[6].textContent = total;
        return;
    }
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
        return;
    }
    if (parent.children[0].textContent === 'B') {
        let total = 49800 * val;
        parent.children[6].textContent = total;
        return;
    }
    if (parent.children[0].textContent === 'C') {
        let total = 59800 * val;
        parent.children[6].textContent = total;
        return;
    }
}
function clickDelete(target) {
    let parent = target.parentElement;
    document.querySelector('#order').selectedIndex = 0;
    parent.remove();
}
