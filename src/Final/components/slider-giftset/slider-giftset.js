import './slider-giftset.scss';


let slider = document.querySelector('.second-slideshow__slides');

let slider_slides = slider.querySelectorAll('.second-slideshow__icon');

let slider_controls = slider.querySelectorAll('.second-slideshow__item');

let slider_prev = slider.querySelector('.second-slideshow__prev');
let slider_next = slider.querySelector('.second-slideshow__next');

let slider_start = 0;

slider_prev.addEventListener('click', shiftSlide.bind(slider_prev, 'prev'));
slider_next.addEventListener('click', shiftSlide.bind(slider_next, 'next'));

function shiftSlide(direction) {
    event.preventDefault();

    let currentSlideId = slider_start;
    let lastSlideIndex = slider_controls.length - 1;
    let slideId;

    if(direction === 'prev') {
        if(currentSlideId > 0) {
            slideId = currentSlideId - 1;
        } else {
            slideId = lastSlideIndex;
        }
    }

    if(direction === 'next') {
        if(currentSlideId !== lastSlideIndex) {
            slideId = currentSlideId + 1;
        } else {
            slideId = 0;
        }
    }

    changeSlide(slideId);
}

for(let i = 0; i < slider_controls.length; i++) {
    slider_controls[i].addEventListener('click', changeSlide.bind(slider_controls[i], i));
}

function changeSlide(id){
    event.preventDefault();

    for(let i = 0; i < slider_slides.length; i++) {
        slider_slides[i].classList.remove('active');
        slider_controls[i].classList.remove('active');
    }

    slider_slides[id].classList.add('active');
    slider_controls[id].classList.add('active');

    slider_start = id;
}

