import './slider-chuan-gu-dung.scss';

let
    slider = document.getElementById('first-slideshow'),
    arrowLeft = document.getElementById('first-slideshow__prev'),
    arrowRight = document.getElementById('first-slideshow__next'),
    current = 1,
    position = 0;

function slideLeft() {
    if(current !== 1) {
        current -= 1;
        position += 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

function slideRight() {
    if(current !== 5) {
        current += 1;
        position -= 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);