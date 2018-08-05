import './slider-combo-phin.scss';

let
    slider = document.getElementById('third-slideshow'),
    arrowLeft = document.getElementById('third-slideshow__prev'),
    arrowRight = document.getElementById('third-slideshow__next'),
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