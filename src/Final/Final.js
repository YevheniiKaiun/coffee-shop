import './Final.scss';
import './components/slider-giftset/slider-giftset.js';
import './components/slider-chuan-gu-dung/slider-chuan-gu-dung.js';
import './components/slider-combo-phin-phe/slider-combo-phin.js';

const btn = document.querySelector('.toggle');
const nav = document.querySelector('.menu-components');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-components_expand');
});




