/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 329);
/******/ })
/************************************************************************/
/******/ ({

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(331);

__webpack_require__(332);

__webpack_require__(334);

__webpack_require__(336);

var btn = document.querySelector('.toggle');
var nav = document.querySelector('.menu-components');

btn.addEventListener('click', function () {
    nav.classList.toggle('menu-components_expand');
});

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(333);

var slider = document.querySelector('.second-slideshow__slides');

var slider_slides = slider.querySelectorAll('.second-slideshow__icon');

var slider_controls = slider.querySelectorAll('.second-slideshow__item');

var slider_prev = slider.querySelector('.second-slideshow__prev');
var slider_next = slider.querySelector('.second-slideshow__next');

var slider_start = 0;

slider_prev.addEventListener('click', shiftSlide.bind(slider_prev, 'prev'));
slider_next.addEventListener('click', shiftSlide.bind(slider_next, 'next'));

function shiftSlide(direction) {
    event.preventDefault();

    var currentSlideId = slider_start;
    var lastSlideIndex = slider_controls.length - 1;
    var slideId = void 0;

    if (direction === 'prev') {
        if (currentSlideId > 0) {
            slideId = currentSlideId - 1;
        } else {
            slideId = lastSlideIndex;
        }
    }

    if (direction === 'next') {
        if (currentSlideId !== lastSlideIndex) {
            slideId = currentSlideId + 1;
        } else {
            slideId = 0;
        }
    }

    changeSlide(slideId);
}

for (var i = 0; i < slider_controls.length; i++) {
    slider_controls[i].addEventListener('click', changeSlide.bind(slider_controls[i], i));
}

function changeSlide(id) {
    event.preventDefault();

    for (var _i = 0; _i < slider_slides.length; _i++) {
        slider_slides[_i].classList.remove('active');
        slider_controls[_i].classList.remove('active');
    }

    slider_slides[id].classList.add('active');
    slider_controls[id].classList.add('active');

    slider_start = id;
}

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(335);

var slider = document.getElementById('first-slideshow'),
    arrowLeft = document.getElementById('first-slideshow__prev'),
    arrowRight = document.getElementById('first-slideshow__next'),
    current = 1,
    position = 0;

function slideLeft() {
    if (current !== 1) {
        current -= 1;
        position += 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

function slideRight() {
    if (current !== 5) {
        current += 1;
        position -= 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(337);

var slider = document.getElementById('third-slideshow'),
    arrowLeft = document.getElementById('third-slideshow__prev'),
    arrowRight = document.getElementById('third-slideshow__next'),
    current = 1,
    position = 0;

function slideLeft() {
    if (current !== 1) {
        current -= 1;
        position += 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

function slideRight() {
    if (current !== 5) {
        current += 1;
        position -= 8;
        slider.style.transform = 'translateX(' + position + '%)';
    }
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });