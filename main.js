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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/debounce.js":
/*!************************!*\
  !*** ./js/debounce.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack:///./js/debounce.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ \"./js/slide.js\");\n\n\nconst slide = new _slide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slide\", \".slide-wrapper\");\nslide.init();\nslide.addArrow(\".prev\", \".next\");\nslide.addControl();\n// slide.navkey();\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/slide.js":
/*!*********************!*\
  !*** ./js/slide.js ***!
  \*********************/
/*! exports provided: Slide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slide\", function() { return Slide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SlideNav; });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/debounce.js\");\n\n\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\n    this.activeClass = \"active\";\n    this.changeEvent = new Event(\"changeEvent\");\n  }\n\n  transition(active) {\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\n  }\n\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\n  }\n\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\n    return this.dist.finalPosition - this.dist.movement;\n  }\n\n  onStart(event) {\n    let movetype;\n    if (event.type === \"mousedown\") {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      movetype = \"mousemove\";\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      movetype = \"touchmove\";\n    }\n    this.wrapper.addEventListener(movetype, this.onMove);\n    this.transition(false);\n  }\n\n  onMove(event) {\n    const pointerPosition =\n      event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n\n  onEnd(event) {\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    this.wrapper.removeEventListener(movetype, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n\n  addSlideEvents() {\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\n  }\n\n  // Slides config\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element);\n      return { position, element };\n    });\n  }\n\n  slideIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1,\n    };\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(this.slideArray[index].position);\n    this.slideIndexNav(index);\n    this.dist.finalPosition = activeSlide.position;\n    this.changeActiveClass();\n    this.wrapper.dispatchEvent(this.changeEvent);\n    this.showFrase();\n  }\n\n  changeActiveClass() {\n    this.slideArray.forEach((item) => item.element.classList.remove(this.activeClass));\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\n  }\n\n  activePrevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 500);\n  }\n\n  addResizeEvent() {\n    window.addEventListener(\"resize\", this.onResize);\n  }\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n\n    this.onResize = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n  }\n\n  init() {\n    this.bindEvents();\n    this.transition(true);\n    this.addSlideEvents();\n    this.slidesConfig();\n    this.addResizeEvent();\n    this.changeSlide(0);\n    return this;\n  }\n}\n\nclass SlideNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper);\n    this.bindControlEvents();\n  }\n\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.addArrowEvent();\n  }\n\n  addArrowEvent() {\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\n  }\n\n  createControl() {\n    const controle = document.createElement(\"ul\");\n    const boxPag = document.querySelector(\".pag\");\n    controle.dataset.controle = \"slide\";\n    this.slideArray.forEach((item, index) => {\n      controle.innerHTML += `<li><a href=\"#slide${index + 1}\">${index + 1}</a></li>`;\n    });\n    boxPag.appendChild(controle);\n    return controle;\n  }\n\n  eventControl(item, index) {\n    item.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      this.changeSlide(index);\n    });\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\n  }\n\n  activeControlItem() {\n    this.controleArray.forEach((item) => item.classList.remove(this.activeClass));\n    this.controleArray[this.index.active].classList.add(this.activeClass);\n  }\n\n  addControl(customControl) {\n    this.controle = document.querySelector(customControl) || this.createControl();\n    this.controleArray = [...this.controle.children];\n    this.activeControlItem();\n    this.controleArray.forEach(this.eventControl);\n  }\n\n  showFrase() {\n    const frases = document.querySelector(\".frases ul\");\n    const frasesArray = [...frases.children];\n    frasesArray.forEach((item) => item.classList.remove(this.activeClass));\n    frasesArray[this.index.active].classList.add(this.activeClass);\n  }\n\n  bindControlEvents() {\n    this.eventControl = this.eventControl.bind(this);\n    this.activeControlItem = this.activeControlItem.bind(this);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/slide.js?");

/***/ })

/******/ });