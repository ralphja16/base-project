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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__m_navigation_js_m_navigation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__m_navigation_js_m_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__m_navigation_js_m_navigation__);

// import { mModal } from './m-modal/js/m-modal';


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Navigation {
	constructor(holder) {
		this.holder = document.querySelector(holder);
		this.navItems = this.holder.querySelectorAll('.m-navigation__item');
		this.toggleButton = this.holder.querySelector('.m-navigation__toggle');
		this.activeClass = 'is--active';
		this.initEventHandler();
		this.mobileToggle(this.holder);

		console.log(holder);
	}

	show(item) {
		item.classList.add(this.activeClass);
	}

	hide(item) {
		item.classList.remove(this.activeClass);
	}

	mobileToggle(holder) {
		this.toggleButton.addEventListener('click', function() {
			const iconElement = this.firstElementChild;
			const bars = 'fa-bars';
			const cross = 'fa-times';
			console.log(iconElement);
			// if (iconElement.classList.contains(bars)) {
			// 	iconElement.classList.add(cross);
			// 	iconElement.classList.remove(bars);
			// } else {
			// 	iconElement.classList.add(bars);
			// 	iconElement.classList.remove(cross);
			// }
			holder.classList.toggle('is--open');
		});
	}

	initEventHandler() {
		const _this = this;

		for (let i = 0; i < this.navItems.length; i++) {
			const item = this.navItems[i];

			if (item.querySelector('.m-navigation__submenu')) {
				item.addEventListener('click', function(e) {
					e.preventDefault();

					if (this.classList.contains(_this.activeClass)) {
						_this.hide(this);
					} else {
						_this.show(this);
					}
				});
			}
		}
	}
}

const navigation = new Navigation('.m-navigation');


/***/ })
/******/ ]);