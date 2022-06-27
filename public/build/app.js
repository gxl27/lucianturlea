(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_fonts_v1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/fonts-v1.css */ "./assets/styles/fonts-v1.css");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/main-v1.js */ "./assets/js/main-v1.js");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/main-v1.js":
/*!******************************!*\
  !*** ./assets/js/main-v1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

var body = document.querySelector('body');
var main = document.querySelector('#main');
var sectionFirstLeft = document.querySelector('#section-first-left');
var sectionFirstRight = document.querySelector('#section-first-right');
var mainImg = document.querySelector('#main-img');
var compositeAnime = document.querySelectorAll('.composite-anime');
var descend = document.querySelector('.descend');
var menuItems = document.querySelectorAll('.menu-item'); // let mainMatrix = document.querySelector('#main-matrix');
// let matrixSpans = document.querySelectorAll('.terminal');
// let overlay = document.querySelector('#overlay');

var checkboxes = document.querySelectorAll('input[type=checkbox]'); // var svgimages = document.querySelectorAll('.svg-image');

markCheckboxes();
scrollUpScreen();

if (matchMedia) {
  var mq = window.matchMedia("(min-width: 768px)");
  window.device;

  if (mq.matches) {
    // pc
    window.device = true;
  } else {
    // mobile
    window.device = false;
  }

  initialAnimation(window.device);
  menuitemsanimation();
  mq.addListener(WidthChange);
  WidthChange(mq);
} // media query change


function WidthChange(mq) {
  if (mq.matches) {
    //pc
    window.device = true;
    initialpc();
  } else {
    // phone
    window.device = false;
    initialphone(); // 
  }
}

function initialpc() {// showall();
}

function initialphone() {}

function initialAnimation($device) {
  var header = document.querySelector('header');
  var mainIm = mainImg;
  var spanElements = document.querySelectorAll('.span-elements');
  var versionElement = document.querySelector('#version');
  initialAnimation = gsap.timeline({
    defaults: {
      duration: 1.2
    }
  });
  initialAnimation.to(header, {
    ease: "expo",
    opacity: 1,
    delay: 0
  });
  initialAnimation.from(header, {
    ease: "expo",
    y: "-10%",
    delay: -1.2
  });

  if ($device) {
    initialAnimation.to(mainIm, {
      ease: "power2",
      opacity: 1,
      duration: 1.8,
      delay: -.7
    });
    initialAnimation.from(mainIm, {
      ease: "power2",
      y: "+10%",
      duration: 1.8,
      delay: -2.8
    });
  }

  initialAnimation.to(spanElements, {
    ease: "expo",
    opacity: 1,
    delay: -.4,
    stagger: 0.3
  });
  initialAnimation.to(versionElement, {
    ease: "expo",
    opacity: 1,
    delay: -.4
  }); // setTimeout(startTimer, 10000)

  if ($device) {
    setTimeout(function () {
      startTimer();
    }, 200);
  }

  function startTimer() {
    var darkSvg = document.querySelectorAll('.dark-svg');
    var counter = 0;
    timer = setInterval(function () {
      if (counter == darkSvg.length) {
        counter = 0;
      }

      changeSvg(darkSvg[counter]);
      counter++;
    }, 4000);

    function changeSvg(svg) {
      darkSvg.forEach(function (f) {
        f.style.opacity = 0;
      });
      setTimeout(function () {
        svg.style.opacity = 1;
      }, 200);
    }
  }
}

function showall() {
  content.style.opacity = 1;
  sectionFirstLeft.style.opacity = 1;
  sectionFirstRight.style.opacity = 1;
  menuItems.forEach(function (f) {
    f.style.opacity = 1;
  });
  compositeAnime.forEach(function (f) {
    f.style.opacity = 1;
  });
  initialize.style.opacity = 0;
} // document.addEventListener("DOMContentLoaded", initialanimation);


function menuitemsanimation() {
  menuItems.forEach(function (e) {
    // hover animation
    // tl = gsap.timeline({ defaults:{duration: .1}})
    // e.addEventListener('mouseenter', function(event){
    //     elem = event.target.querySelector('.menu-item-imgs')
    //     imgs = elem.querySelectorAll('img');
    //     tl.to(imgs[0], { ease: "power3", opacity: 0, duration:.2});
    //     tl.to(imgs[1], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
    // })
    // e.addEventListener('mouseleave', function(event){
    //     elem = event.target.querySelector('.menu-item-imgs')
    //     imgs = elem.querySelectorAll('img');
    //     tl.to(imgs[1], { ease: "power3", opacity: 0, duration:.2});
    //     tl.to(imgs[0], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
    // })
    // on click event (scroll)
    e.addEventListener('click', function () {
      if (e.dataset.scroll) {
        link = e.dataset.scroll;
        element = document.querySelector(link); // document.querySelector(link).scrollIntoView();

        scrollToTargetAdjusted(element);

        if (!window.device) {
          // hide the navbar for mobile after click on menu items
          var navToggle = document.querySelector('#nav-toggle');
          navToggle.checked = false;
        }
      }
    }); // function for the click - scroll animation

    function scrollToTargetAdjusted(scrolledelement) {
      var body = document.body.getBoundingClientRect().top;
      var elementPosition = scrolledelement.getBoundingClientRect().top;
      var offsetPosition = elementPosition - body;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
}

function initialanimation() {
  window.addEventListener('load', function (f) {
    //display initial homepage
    //   tl = gsap.timeline({ defaults:{duration: 3}})
    //   tl.to(main, { ease: "expo", opacity: 1});
    //display monitor animation
    var imageindex = 0; // monitoranimation();

    function monitoranimation() {
      f = svgimages[imageindex];
      chimageinterval = setInterval(changeimage, 5000);

      function changeimage(f) {
        var elem = svgimages[imageindex];

        if (f) {
          if (imageindex == 0) {
            var svgimageslength = svgimages.length; // let svgimageslenghtminus = svgimageslength - 1

            next = svgimages[svgimageslength - 1];
            imageindex = svgimageslength - 1;
          } else {
            next = svgimages[+imageindex - 1];
            imageindex = +imageindex - 1;
          }
        } else {
          if (svgimages.length == +imageindex + 1) {
            next = svgimages[0];
            imageindex = 0;
          } else {
            next = svgimages[+imageindex + 1];
            imageindex = +imageindex + 1;
          }
        }

        carouselanimation();

        function carouselanimation() {
          tl = gsap.timeline({
            defaults: {
              duration: 1
            }
          });
          tl.to(elem, {
            ease: "power2",
            opacity: 0
          });
          tl.to(next, {
            ease: "power2",
            opacity: 1,
            delay: -.9
          });
        }
      }
    }
  });
}

function markCheckboxes() {
  checkboxes.forEach(function (e) {
    e.addEventListener('click', function () {
      if (e.getAttribute('checked') == 'checked') {
        e.setAttribute('checked', null);
      } else {
        e.setAttribute('checked', 'checked');
      }
    });
  });
} //upscreen


function scrollUpScreen() {
  var upScreen = document.querySelector('#up-screen');
  upScreen.addEventListener("click", function () {
    document.querySelector('html').scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  window.addEventListener('scroll', function (e) {
    y = window.scrollY;

    if (y > 150) {
      upScreen.style.display = 'initial';
    } else {
      upScreen.style.display = 'none';
    }
  });
} // leaflet map


function generateMap() {
  // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";
  // const mymap = L.map('map').setView([46, 25], 6);
  // const attribution =
  //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  // const tiles = L.tileLayer(tileUrl, { attribution });
  // tiles.addTo(mymap);
  // L.addTo(mymap);
  // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";
  var map = L.map('map').setView([44.181231, 28.641438], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([44.181231, 28.641438]).addTo(map).bindPopup('Romania: Constanta city').openPopup();
}

generateMap();

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./assets/styles/fonts-v1.css":
/*!************************************!*\
  !*** ./assets/styles/fonts-v1.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-5de6b2","assets_styles_fonts-v1_css-assets_styles_app_scss"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLGtIQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDZEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLihqfHQpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLXYxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250cy12MS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2ZvbnRzLXYxLmNzcyc7XG5pbXBvcnQgJy9hc3NldHMvanMvbWFpbi12MS5qcyc7XG5cblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuXG5sZXQgc2VjdGlvbkZpcnN0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWN0aW9uLWZpcnN0LWxlZnQnKTtcbmxldCBzZWN0aW9uRmlyc3RSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWN0aW9uLWZpcnN0LXJpZ2h0Jyk7XG5sZXQgbWFpbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWltZycpO1xuXG5sZXQgY29tcG9zaXRlQW5pbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcG9zaXRlLWFuaW1lJyk7XG5sZXQgZGVzY2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjZW5kJyk7XG5cbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG5cblxuLy8gbGV0IG1haW5NYXRyaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1tYXRyaXgnKTtcbi8vIGxldCBtYXRyaXhTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXJtaW5hbCcpO1xuLy8gbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xubGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuLy8gdmFyIHN2Z2ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdmctaW1hZ2UnKTtcblxuXG5cbm1hcmtDaGVja2JveGVzKCk7XG5cbnNjcm9sbFVwU2NyZWVuKCk7XG5cblxuXG5pZiAobWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA3NjhweClcIik7XG5cbiAgICB3aW5kb3cuZGV2aWNlOyBcbiAgICBpZihtcS5tYXRjaGVzKXtcbiAgICAgICAgLy8gcGNcbiAgICAgICAgd2luZG93LmRldmljZSA9IHRydWVcbiAgICB9ZWxzZSB7XG4gICAgICAgIC8vIG1vYmlsZVxuICAgICAgICB3aW5kb3cuZGV2aWNlID0gZmFsc2VcbiAgICB9XG4gICAgaW5pdGlhbEFuaW1hdGlvbih3aW5kb3cuZGV2aWNlKTtcbiAgICBtZW51aXRlbXNhbmltYXRpb24oKVxuICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICBXaWR0aENoYW5nZShtcSk7XG4gIH1cbiBcbiAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgaWYobXEubWF0Y2hlcyl7XG4gICAgICAgIC8vcGNcbiAgICAgICAgd2luZG93LmRldmljZSA9IHRydWU7XG4gICAgICAgIGluaXRpYWxwYygpO1xuXG4gICAgfWVsc2V7XG4gICAgICAgICAgLy8gcGhvbmVcbiAgICAgICAgd2luZG93LmRldmljZSA9IGZhbHNlO1xuICAgICAgICBpbml0aWFscGhvbmUoKTtcbiAgICBcbiAgICAvLyBcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbHBjKCl7XG4gICAgLy8gc2hvd2FsbCgpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFscGhvbmUoKXtcblxufVxuXG5mdW5jdGlvbiBpbml0aWFsQW5pbWF0aW9uKCRkZXZpY2Upe1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBsZXQgbWFpbkltID0gbWFpbkltZztcbiAgICBsZXQgc3BhbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYW4tZWxlbWVudHMnKTtcbiAgICBsZXQgdmVyc2lvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmVyc2lvbicpO1xuXG4gICAgaW5pdGlhbEFuaW1hdGlvbiA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IDEuMn19KVxuICAgIGluaXRpYWxBbmltYXRpb24udG8oaGVhZGVyLCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxLCBkZWxheTowfSk7XG4gICAgaW5pdGlhbEFuaW1hdGlvbi5mcm9tKGhlYWRlciwgeyBlYXNlOiBcImV4cG9cIiwgeTogXCItMTAlXCIsIGRlbGF5Oi0xLjJ9KTtcbiAgICBpZigkZGV2aWNlKXtcbiAgICAgICAgaW5pdGlhbEFuaW1hdGlvbi50byhtYWluSW0sIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZHVyYXRpb246MS44LCBkZWxheTotLjd9KTtcbiAgICAgICAgaW5pdGlhbEFuaW1hdGlvbi5mcm9tKG1haW5JbSwgeyBlYXNlOiBcInBvd2VyMlwiLCB5OiBcIisxMCVcIiwgZHVyYXRpb246MS44LCBkZWxheTotMi44fSk7XG4gICAgfVxuICAgIGluaXRpYWxBbmltYXRpb24udG8oc3BhbkVsZW1lbnRzLCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxLCBkZWxheTotLjQsIHN0YWdnZXI6IDAuM30pO1xuICAgIGluaXRpYWxBbmltYXRpb24udG8odmVyc2lvbkVsZW1lbnQsIHsgZWFzZTogXCJleHBvXCIsIG9wYWNpdHk6IDEsIGRlbGF5Oi0uNH0pO1xuICAgICAgICBcbiAgICAvLyBzZXRUaW1lb3V0KHN0YXJ0VGltZXIsIDEwMDAwKVxuICAgIGlmKCRkZXZpY2Upe1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIH0sIDIwMCk7IFxuICAgIH1cblxuICAgIFxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGxldCBkYXJrU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhcmstc3ZnJyk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT0gZGFya1N2Zy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlU3ZnKGRhcmtTdmdbY291bnRlcl0pXG4gICAgICAgICAgICBjb3VudGVyICsrO1xuICAgICAgICB9LCA0MDAwKTtcblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VTdmcoc3ZnKXtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGRhcmtTdmcuZm9yRWFjaChmdW5jdGlvbihmKXtcbiAgICAgICAgICAgICAgICBmLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LCAyMDApOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd2FsbCgpe1xuICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2VjdGlvbkZpcnN0TGVmdC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZWN0aW9uRmlyc3RSaWdodC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihmKXtcbiAgICAgICAgZi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9KVxuICAgIGNvbXBvc2l0ZUFuaW1lLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgICAgIGYuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfSlcbiAgICBpbml0aWFsaXplLnN0eWxlLm9wYWNpdHkgPSAwO1xufVxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGFuaW1hdGlvbik7XG5cblxuXG5mdW5jdGlvbiBtZW51aXRlbXNhbmltYXRpb24oKXtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICBcbiAgICAgICAgLy8gaG92ZXIgYW5pbWF0aW9uXG4gICAgICAgIC8vIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogLjF9fSlcbiAgICAgICAgLy8gZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAvLyAgICAgZWxlbSA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcubWVudS1pdGVtLWltZ3MnKVxuICAgICAgICAvLyAgICAgaW1ncyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIHRsLnRvKGltZ3NbMF0sIHsgZWFzZTogXCJwb3dlcjNcIiwgb3BhY2l0eTogMCwgZHVyYXRpb246LjJ9KTtcbiAgICAgICAgLy8gICAgIHRsLnRvKGltZ3NbMV0sIHsgZWFzZTogXCJwb3dlcjNcIiwgb3BhY2l0eTogMSwgZHVyYXRpb246LjMsIGRlbGF5Oi0uMn0pO1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgLy8gICAgIGVsZW0gPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignLm1lbnUtaXRlbS1pbWdzJylcbiAgICAgICAgLy8gICAgIGltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAgIFxuICAgICAgICAvLyAgICAgdGwudG8oaW1nc1sxXSwgeyBlYXNlOiBcInBvd2VyM1wiLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjouMn0pO1xuICAgICAgICAvLyAgICAgdGwudG8oaW1nc1swXSwgeyBlYXNlOiBcInBvd2VyM1wiLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjouMywgZGVsYXk6LS4yfSk7XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gb24gY2xpY2sgZXZlbnQgKHNjcm9sbClcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGlmKGUuZGF0YXNldC5zY3JvbGwpe1xuICAgICAgICAgICAgICAgIGxpbmsgPSBlLmRhdGFzZXQuc2Nyb2xsO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKVxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RhcmdldEFkanVzdGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuZGV2aWNlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSB0aGUgbmF2YmFyIGZvciBtb2JpbGUgYWZ0ZXIgY2xpY2sgb24gbWVudSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi10b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBuYXZUb2dnbGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gZnVuY3Rpb24gZm9yIHRoZSBjbGljayAtIHNjcm9sbCBhbmltYXRpb25cbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9UYXJnZXRBZGp1c3RlZChzY3JvbGxlZGVsZW1lbnQpe1xuICAgICBcbiAgICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbGVkZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBib2R5O1xuXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbiBmdW5jdGlvbiBpbml0aWFsYW5pbWF0aW9uKCl7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbiAgICAvL2Rpc3BsYXkgaW5pdGlhbCBob21lcGFnZVxuICAgIC8vICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAzfX0pXG4gICAgLy8gICB0bC50byhtYWluLCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxfSk7XG4gICAgIFxuXG4gICAgLy9kaXNwbGF5IG1vbml0b3IgYW5pbWF0aW9uXG4gICAgbGV0IGltYWdlaW5kZXggPSAwO1xuICAgIC8vIG1vbml0b3JhbmltYXRpb24oKTtcblxuICAgIGZ1bmN0aW9uIG1vbml0b3JhbmltYXRpb24oKXtcblxuICAgICAgICBmID0gc3ZnaW1hZ2VzW2ltYWdlaW5kZXhdO1xuICAgICBcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG5cbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlaW1hZ2UoZil7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlbGVtID0gc3ZnaW1hZ2VzW2ltYWdlaW5kZXhdO1xuICAgICAgICAgICAgaWYoZil7XG4gICAgICAgICAgICAgICAgaWYoaW1hZ2VpbmRleCA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN2Z2ltYWdlc2xlbmd0aCA9IHN2Z2ltYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBzdmdpbWFnZXNsZW5naHRtaW51cyA9IHN2Z2ltYWdlc2xlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzW3N2Z2ltYWdlc2xlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWFnZWluZGV4ID0gc3ZnaW1hZ2VzbGVuZ3RoICAtMTtcblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBzdmdpbWFnZXNbK2ltYWdlaW5kZXgtMV1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VpbmRleCA9ICtpbWFnZWluZGV4IC0xICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoc3ZnaW1hZ2VzLmxlbmd0aCA9PSAraW1hZ2VpbmRleCArIDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgIGltYWdlaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzWytpbWFnZWluZGV4KzFdXG4gICAgICAgICAgICAgICAgICAgIGltYWdlaW5kZXggPSAraW1hZ2VpbmRleCArMSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2Fyb3VzZWxhbmltYXRpb24oKVxuICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY2Fyb3VzZWxhbmltYXRpb24oKXtcbiAgICAgICAgICAgICAgICB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IDF9fSlcbiAgICAgICAgICAgICAgICB0bC50byhlbGVtLCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDB9KVxuICAgICAgICAgICAgICAgIHRsLnRvKG5leHQsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZGVsYXk6IC0uOX0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSAgICAgICAgIFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0NoZWNrYm94ZXMoKXtcblxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgIGlmKGUuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgPT0gICdjaGVja2VkJyl7XG4gICAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICAgICAgIFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgO1xuICAgICAgICAgIH1cbiAgICAgIH0pXG4gICB9KVxufVxuXG4vL3Vwc2NyZWVuXG5mdW5jdGlvbiBzY3JvbGxVcFNjcmVlbigpe1xuICAgIGNvbnN0IHVwU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwLXNjcmVlbicpXG4gICAgdXBTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBpZih5ID4gMTUwKXtcbiAgICAgICAgICAgIHVwU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdXBTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBsZWFmbGV0IG1hcFxuZnVuY3Rpb24gZ2VuZXJhdGVNYXAoKXtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncy1tYXAnKS5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J21hcCcgc3R5bGU9J3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ei1pbmRleDoxOyc+PC9kaXY+XCI7XG4gICAgLy8gY29uc3QgbXltYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNDYsIDI1XSwgNik7XG4gICAgLy8gY29uc3QgYXR0cmlidXRpb24gPVxuICAgIC8vICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJztcblxuICAgIC8vIGNvbnN0IHRpbGVVcmwgPSAnaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnO1xuICAgIC8vIGNvbnN0IHRpbGVzID0gTC50aWxlTGF5ZXIodGlsZVVybCwgeyBhdHRyaWJ1dGlvbiB9KTtcbiAgICAvLyB0aWxlcy5hZGRUbyhteW1hcCk7XG4gICAgLy8gTC5hZGRUbyhteW1hcCk7XG4gICAgXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3MtbWFwJykuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdtYXAnIHN0eWxlPSd3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO3otaW5kZXg6MTsnPjwvZGl2PlwiO1xuXG4gICAgdmFyIG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFs0NC4xODEyMzEsIDI4LjY0MTQzOF0sIDEyKTtcblxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICB9KS5hZGRUbyhtYXApO1xuXG4gICAgTC5tYXJrZXIoWzQ0LjE4MTIzMSwgMjguNjQxNDM4XSkuYWRkVG8obWFwKVxuICAgICAgICAuYmluZFBvcHVwKCdSb21hbmlhOiBDb25zdGFudGEgY2l0eScpXG4gICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICBcbn1cbmdlbmVyYXRlTWFwKCk7IiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gc3BlYyByZXF1aXJlbWVudFxuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbiIsInNlY3Rpb25GaXJzdExlZnQiLCJzZWN0aW9uRmlyc3RSaWdodCIsIm1haW5JbWciLCJjb21wb3NpdGVBbmltZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjZW5kIiwibWVudUl0ZW1zIiwiY2hlY2tib3hlcyIsIm1hcmtDaGVja2JveGVzIiwic2Nyb2xsVXBTY3JlZW4iLCJtYXRjaE1lZGlhIiwibXEiLCJ3aW5kb3ciLCJkZXZpY2UiLCJtYXRjaGVzIiwiaW5pdGlhbEFuaW1hdGlvbiIsIm1lbnVpdGVtc2FuaW1hdGlvbiIsImFkZExpc3RlbmVyIiwiV2lkdGhDaGFuZ2UiLCJpbml0aWFscGMiLCJpbml0aWFscGhvbmUiLCIkZGV2aWNlIiwiaGVhZGVyIiwibWFpbkltIiwic3BhbkVsZW1lbnRzIiwidmVyc2lvbkVsZW1lbnQiLCJnc2FwIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwidG8iLCJlYXNlIiwib3BhY2l0eSIsImRlbGF5IiwiZnJvbSIsInkiLCJzdGFnZ2VyIiwic2V0VGltZW91dCIsInN0YXJ0VGltZXIiLCJkYXJrU3ZnIiwiY291bnRlciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjaGFuZ2VTdmciLCJzdmciLCJmb3JFYWNoIiwiZiIsInN0eWxlIiwic2hvd2FsbCIsImNvbnRlbnQiLCJpbml0aWFsaXplIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhc2V0Iiwic2Nyb2xsIiwibGluayIsInNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQiLCJuYXZUb2dnbGUiLCJjaGVja2VkIiwic2Nyb2xsZWRlbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZWxlbWVudFBvc2l0aW9uIiwib2Zmc2V0UG9zaXRpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaW5pdGlhbGFuaW1hdGlvbiIsImltYWdlaW5kZXgiLCJtb25pdG9yYW5pbWF0aW9uIiwic3ZnaW1hZ2VzIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJlbGVtIiwic3ZnaW1hZ2VzbGVuZ3RoIiwibmV4dCIsImNhcm91c2VsYW5pbWF0aW9uIiwidGwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ1cFNjcmVlbiIsInNjcm9sbFkiLCJkaXNwbGF5IiwiZ2VuZXJhdGVNYXAiLCJtYXAiLCJMIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwiYWRkVG8iLCJtYXJrZXIiLCJiaW5kUG9wdXAiLCJvcGVuUG9wdXAiXSwic291cmNlUm9vdCI6IiJ9