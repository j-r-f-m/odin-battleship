/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* -------------------------------------------------------------------------- */\n\n/* ---------------------------- layout -------------------------------------- */\n.content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start]1fr);\n  grid-template-rows: repeat(12, [row-start] 1fr);\n}\n\n/* -------------------------- starting screen ------------------------------- */\n.header {\n  grid-column: 3 / 11;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n.adversaries {\n  grid-column: 3 / 11;\n  grid-row: 5 / 7;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n.btn-start {\n  grid-column: 6 / 8;\n  grid-row: 10 / 11;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n/* ------------------------------- placing screen -------------------------- */\n\n.placing-grid {\n  grid-column: 5 / 12;\n  grid-row: 3 / 10;\n\n  display: grid;\n  grid-template-columns: repeat(10, [col-start]1fr);\n  grid-template-rows: repeat(10, [row-start] 1fr);\n\n  column-gap: 5px;\n  row-gap: 5px;\n\n  background-color: lightgrey;\n}\n\n.sidebar {\n  grid-column: 2 / 4;\n  grid-row: 3 / 8;\n\n  display: grid;\n  grid-template-columns: repeat(5, [col-start]1fr);\n  grid-template-rows: repeat(10, [row-start] 1fr);\n\n  background-color: lightgray;\n}\n\n/* .patrol-boat-container {\n  grid-column: 1 / 6;\n  grid-row: 1 / 3;\n} */\n\n.patrol-boat-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 1 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.patrol-boat {\n  text-align: center;\n\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n\n  background-color: black;\n}\n\n.cruiser-1-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 3 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cruiser-1 {\n  text-align: center;\n\n  grid-column: 1 / 4;\n  grid-row: 4 / 5;\n\n  background-color: black;\n}\n\n.cruiser-2-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cruiser-2 {\n  text-align: center;\n\n  grid-column: 1 / 4;\n  grid-row: 6 / 7;\n\n  background-color: black;\n}\n\n.battleship-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 7 / 8;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.battleship {\n  text-align: center;\n\n  grid-column: 1 / 5;\n  grid-row: 8 / 9;\n\n  background-color: black;\n}\n\n.carrier-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 9 / 10;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carrier {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 10 / 11;\n\n  background-color: black;\n}\n\n/* ------------------------------- playing screen --------------------------- */\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA,+EAA+E;;AAE/E,+EAA+E;AAC/E;EACE,aAAa;EACb,aAAa;EACb,iDAAiD;EACjD,+CAA+C;AACjD;;AAEA,+EAA+E;AAC/E;EACE,mBAAmB;EACnB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,2BAA2B;AAC7B;;AAEA,8EAA8E;;AAE9E;EACE,mBAAmB;EACnB,gBAAgB;;EAEhB,aAAa;EACb,iDAAiD;EACjD,+CAA+C;;EAE/C,eAAe;EACf,YAAY;;EAEZ,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,gDAAgD;EAChD,+CAA+C;;EAE/C,2BAA2B;AAC7B;;AAEA;;;GAGG;;AAEH;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;;EAEf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,gBAAgB;;EAEhB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,iBAAiB;;EAEjB,uBAAuB;AACzB;;AAEA,+EAA+E","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* -------------------------------------------------------------------------- */\n\n/* ---------------------------- layout -------------------------------------- */\n.content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start]1fr);\n  grid-template-rows: repeat(12, [row-start] 1fr);\n}\n\n/* -------------------------- starting screen ------------------------------- */\n.header {\n  grid-column: 3 / 11;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n.adversaries {\n  grid-column: 3 / 11;\n  grid-row: 5 / 7;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n.btn-start {\n  grid-column: 6 / 8;\n  grid-row: 10 / 11;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: lightgray;\n}\n\n/* ------------------------------- placing screen -------------------------- */\n\n.placing-grid {\n  grid-column: 5 / 12;\n  grid-row: 3 / 10;\n\n  display: grid;\n  grid-template-columns: repeat(10, [col-start]1fr);\n  grid-template-rows: repeat(10, [row-start] 1fr);\n\n  column-gap: 5px;\n  row-gap: 5px;\n\n  background-color: lightgrey;\n}\n\n.sidebar {\n  grid-column: 2 / 4;\n  grid-row: 3 / 8;\n\n  display: grid;\n  grid-template-columns: repeat(5, [col-start]1fr);\n  grid-template-rows: repeat(10, [row-start] 1fr);\n\n  background-color: lightgray;\n}\n\n/* .patrol-boat-container {\n  grid-column: 1 / 6;\n  grid-row: 1 / 3;\n} */\n\n.patrol-boat-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 1 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.patrol-boat {\n  text-align: center;\n\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n\n  background-color: black;\n}\n\n.cruiser-1-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 3 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cruiser-1 {\n  text-align: center;\n\n  grid-column: 1 / 4;\n  grid-row: 4 / 5;\n\n  background-color: black;\n}\n\n.cruiser-2-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cruiser-2 {\n  text-align: center;\n\n  grid-column: 1 / 4;\n  grid-row: 6 / 7;\n\n  background-color: black;\n}\n\n.battleship-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 7 / 8;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.battleship {\n  text-align: center;\n\n  grid-column: 1 / 5;\n  grid-row: 8 / 9;\n\n  background-color: black;\n}\n\n.carrier-header {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 9 / 10;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carrier {\n  text-align: center;\n\n  grid-column: 1 / 6;\n  grid-row: 10 / 11;\n\n  background-color: black;\n}\n\n/* ------------------------------- playing screen --------------------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domHelper.js":
/*!**************************!*\
  !*** ./src/domHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crtNode": () => (/* binding */ crtNode)
/* harmony export */ });
/**
 * select a parent dom-element create a dom-element and append the created
 * element
 * @param {string} parent select parent using css selector
 * @param {string} typeOfEle type of dom element
 * @param {string} nameClass class name
 * @param {string} txt text contetn
 */
const crtNode = (parent, typeOfEle, nameClass, txt) => {
  // select parent
  const parentEle = document.querySelector(parent);
  // create element
  const crtEle = document.createElement(typeOfEle);
  crtEle.className = nameClass;
  crtEle.textContent = txt;
  // append created element
  parentEle.appendChild(crtEle);
  return crtEle;
};




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


function Gameboard() {
  /** ----------------------------Properties ----------------------------- */
  // array containing dummy objects that represent all the ships a player has
  // whenever a player places a ship the first element of the array will be removed
  this.availableShips = [
    { name: "Patrol Boat", length: 2, direction: "inX" },
    { name: "Cruiser1", length: 3, direction: "inX" },
    { name: "Cruiser2", length: 3, direction: "inX" },
    { name: "Battleship", length: 4, direction: "inX" },
    { name: "Carrier", length: 5, direction: "inX" },
  ];
  // owner of board
  this.owner = "null";
  // placed ships
  this.placedShips = [];
  // default placing direction
  this.placingDirection = "inX";
  //
  this.shotsMissed = [];
  this.shotsHit = [];

  /**
   * places a ship on the gameboard starting from the coordinates a player clicked
   * on
   * @param {array} startCoor contians coordinates player clicked on
   * return array with palced ships
   */
  this.placeShips = function (startCoor) {
    // create instance of ship
    let currShip = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.availableShips[0].length,
      this.availableShips[0].name
    );
    //   console.log(currShip.hit);
    /**
     * calculates the coordinates the ship occupies
     * if a player clicks on a starting point that would place parts of the ship
     * outside of the board calculate() returns a string
     */
    currShip.coordinates = this.calculate(startCoor, currShip.length);
    // if ship placement is legal place ship and return array with all placed ships
    // if ship placement is illegal reutrn false
    if (currShip.coordinates !== false) {
      this.availableShips.shift();
      this.placedShips.push(currShip);
      return this.placedShips;
    } else if (currShip.coordinates === false) {
      return false;
    }
  };

  this.calculate = function (startCoor, shipLength) {
    // array that contains all the coordinates the ship occupies
    const shipCoor = [];
    // calculate endpoint of ship that player wants to place
    // check of all parts of the ship will be on the board
    const endPointX = startCoor[0] + shipLength;
    const endPointY = startCoor[1] + shipLength;
    // check for illegal moves
    if (this.placingDirection === "inX" && endPointX > 10) {
      return false;
    } else if (this.placingDirection === "inY" && endPointY > 10) {
      return false;
    } else if (this.placingDirection === "inX") {
      // calculate all coordinates that ship will occupy in X-direction
      for (let i = 0; i < shipLength; i++) {
        let currCoor = [startCoor[0] + i, startCoor[1]];
        shipCoor.push(currCoor);
      }
      return shipCoor;
    } else if (this.placingDirection === "inY") {
      // calculate all coordinates that ship will occupy in Y-direction
      for (let i = 0; i < shipLength; i++) {
        let currCoor = [startCoor[0], startCoor[1] + i];
        shipCoor.push(currCoor);
      }
      return shipCoor;
    }
  };

  /**
   *
   * @param {array} targetCoor x- and y-coordinates of tile that user fired on
   * @returns ship object that got hit or null if no ship was hit
   */
  this.searchShips = function (targetCoor) {
    for (let i = 0; i < this.placedShips.length; i++) {
      // coordinate array of current ship object
      let currCoor = this.placedShips[i].coordinates;
      for (let j = 0; j < currCoor.length; j++) {
        // if target hits
        if (
          currCoor[j][0] === targetCoor[0] &&
          currCoor[j][1] === targetCoor[1]
        ) {
          // if target hits a ship return that ship
          return this.placedShips[i];
        }
      }
    }
    // if shot misses
    return null;
  };

  /**
 * delete ship that was destroyed from placedShip-array
 * @param {string} nameShip name of ship that was destroyed 

 */
  this.deleteShip = function (nameShip) {
    for (let i = 0; i < this.placedShips.length; i++) {
      if (this.placedShips[i].name === nameShip) {
        this.placedShips.splice(i, 1);
      }
    }
    return this.placedShips;
  };

  this.receiveAttack = function (targetCoor) {
    // search all placed ships for matching coordinates
    let targetHit = this.searchShips(targetCoor);

    if (targetHit === null) {
      // shot missed
      // mark tile in dom with an x
      // push coordinates that missed into an array
      this.shotsMissed.push(targetCoor);
      return null;
    } else {
      // shot hit
      this.shotsHit.push(targetCoor);
      // mark tile in dom
      console.log(targetHit.hit);
      targetHit.hit();
      targetHit.sunk();
      if (targetHit.isSunk === true) {
        // delete ship from placedShip array
        this.deleteShip(targetHit.name);
      }
    }

    if (this.placedShips.length === 0) {
      // end game
    }
    return this.placedShips;
  };
}

/** ---------------------------------- METHODS ------------------------------ */

// Gameboard.prototype.placeShips = function (startCoor) {
//   // create instance of ship
//   let currShip = new Ship(
//     this.availableShips[0].length,
//     this.availableShips[0].name
//   );
//   //   console.log(currShip.hit);
//   /**
//    * calculates the coordinates the ship occupies
//    * if a player clicks on a starting point that would place parts of the ship
//    * outside of the board calculate() returns a string
//    */
//   currShip.coordinates = this.calculate(startCoor, currShip.length);
//   // if ship placement is legal place ship and return array with all placed ships
//   // if ship placement is illegal reutrn false
//   if (currShip.coordinates !== false) {
//     this.availableShips.shift();
//     this.placedShips.push(currShip);
//     return this.placedShips;
//   } else if (currShip.coordinates === false) {
//     return false;
//   }
// };

/**
 * depending on the palcingDirection of the gameboard a player can place a ship
 *
 * @param {array} startCoor contains coordinates player clicked on
 * @param {integer} shipLength length of ship that player wants to place
 * @returns array with all coordinates the ship occupies or string that points
 * out that placement is illegal
 */
// Gameboard.prototype.calculate = function (startCoor, shipLength) {
//   // array that contains all the coordinates the ship occupies
//   const shipCoor = [];
//   // calculate endpoint of ship that player wants to place
//   // check of all parts of the ship will be on the board
//   const endPointX = startCoor[0] + shipLength;
//   const endPointY = startCoor[1] + shipLength;
//   // check for illegal moves
//   if (this.placingDirection === "inX" && endPointX > 10) {
//     return false;
//   } else if (this.placingDirection === "inY" && endPointY > 10) {
//     return false;
//   } else if (this.placingDirection === "inX") {
//     // calculate all coordinates that ship will occupy in X-direction
//     for (let i = 0; i < shipLength; i++) {
//       let currCoor = [startCoor[0] + i, startCoor[1]];
//       shipCoor.push(currCoor);
//     }
//     return shipCoor;
//   } else if (this.placingDirection === "inY") {
//     // calculate all coordinates that ship will occupy in Y-direction
//     for (let i = 0; i < shipLength; i++) {
//       let currCoor = [startCoor[0], startCoor[1] + i];
//       shipCoor.push(currCoor);
//     }
//     return shipCoor;
//   }
// };

// /**
//  *
//  * @param {array} targetCoor x- and y-coordinates of tile that user fired on
//  * @returns ship object that got hit or null if no ship was hit
//  */
// Gameboard.prototype.searchShips = function (targetCoor) {
//   for (let i = 0; i < this.placedShips.length; i++) {
//     // coordinate array of current ship object
//     let currCoor = this.placedShips[i].coordinates;
//     for (let j = 0; j < currCoor.length; j++) {
//       // if target hits
//       if (
//         currCoor[j][0] === targetCoor[0] &&
//         currCoor[j][1] === targetCoor[1]
//       ) {
//         // if target hits a ship return that ship
//         return this.placedShips[i];
//       }
//     }
//   }
//   // if shot misses
//   return null;
// };

// /**
//  * delete ship that was destroyed from placedShip-array
//  * @param {string} nameShip name of ship that was destroyed

//  */
// Gameboard.prototype.deleteShip = function (nameShip) {
//   for (let i = 0; i < this.placedShips.length; i++) {
//     if (this.placedShips[i].name === nameShip) {
//       this.placedShips.splice(i, 1);
//     }
//   }
//   return this.placedShips;
// };

// Gameboard.prototype.receiveAttack = function (targetCoor) {
//   // search all placed ships for matching coordinates
//   let targetHit = this.searchShips(targetCoor);

//   if (targetHit === null) {
//     // shot missed
//     // mark tile in dom with an x
//     // push coordinates that missed into an array
//     this.shotsMissed.push(targetCoor);
//     return null;
//   } else {
//     // shot hit
//     this.shotsHit.push(targetCoor);
//     // mark tile in dom
//     console.log(targetHit.hit);
//     targetHit.hit();
//     targetHit.sunk();
//     if (targetHit.isSunk === true) {
//       // delete ship from placedShip array
//       this.deleteShip(targetHit.name);
//     }
//   }

//   if (this.placedShips.length === 0) {
//     // end game
//   }
//   return this.placedShips;
// };

// let board = new Gameboard();
// board.placeShips([2, 2]);
// board.placeShips([2, 4]);
// board.placeShips([2, 6]);
// board.placeShips([2, 8]);
// board.placeShips([2, 10]);

// board.receiveAttack([2, 2]);
// board.receiveAttack([3, 2]);
// console.log(board.shotsMissed);
// console.log(board.shotsHit);

// console.log(board);
// // console.log("asdfassadfasdf");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _screenStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenStart */ "./src/screenStart.js");
/* harmony import */ var _screenPlacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screenPlacing */ "./src/screenPlacing.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");





// --------------------- initilize objects --------------------------
// create gameboard for player
const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();

//screenStart();
(0,_screenPlacing__WEBPACK_IMPORTED_MODULE_2__["default"])();
// create ship objects for placement




/***/ }),

/***/ "./src/screenPlacing.js":
/*!******************************!*\
  !*** ./src/screenPlacing.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/domHelper.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _screenSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screenSidebar */ "./src/screenSidebar.js");





/**
 * create placing screen
 */
const screenPlacing = () => {
  console.log(_index__WEBPACK_IMPORTED_MODULE_2__.playerBoard);
  // create content container
  const contentContainer = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)("#body", "div", "content");
  // create placing grid
  const placingGrid = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".content", "div", "placing-grid");
  // create sidebar and display all available ships
  (0,_screenSidebar__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenPlacing);


/***/ }),

/***/ "./src/screenSidebar.js":
/*!******************************!*\
  !*** ./src/screenSidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/domHelper.js");


/**
 * create the sidebar for the placing screen with all the available ships
 */
const crtSidebar = () => {
  // create sidebar
  const sidebar = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".content", "div", "sidebar");

  // create boats
  const patrolBoatHeader = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(
    ".sidebar",
    "div",
    "patrol-boat-header",
    "Patrol Boat"
  );
  const patrolBoat = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "patrol-boat");

  const cruiser1Header = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(
    ".sidebar",
    "div",
    "cruiser-1-header",
    "Cruiser 1"
  );
  const cruiser1 = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "cruiser-1");

  const cruiser2Header = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(
    ".sidebar",
    "div",
    "cruiser-2-header",
    "Cruiser 2"
  );
  const cruiser2 = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "cruiser-2");

  const battleshipHeader = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(
    ".sidebar",
    "div",
    "battleship-header",
    "Battleship"
  );
  const battleship = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "battleship");

  const carrierHeader = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "carrier-header", "Carrier");
  const carrier = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".sidebar", "div", "carrier");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (crtSidebar);


/***/ }),

/***/ "./src/screenStart.js":
/*!****************************!*\
  !*** ./src/screenStart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/domHelper.js");
/* harmony import */ var _screenPlacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenPlacing */ "./src/screenPlacing.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");




/**
 * create starting screen
 */
const screenStart = () => {
  // create content container
  const contentContainer = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)("#body", "div", "content");
  // create header
  (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".content", "div", "header", "Battleship");
  // player board
  (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".content", "div", "adversaries", "Player vs. A.I.");
  // create button
  const startBtn = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.crtNode)(".content", "button", "btn-start", "Start Game");

  startBtn.addEventListener("click", () => {
    // delete start screen
    contentContainer.remove();
    // create placing screen
    (0,_screenPlacing__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenStart);


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


// Exporting the constructor function did not export the pbject methods need some fix

/**
 * create a ship and pass its length
 * @param {integer} length of ship
 */
function Ship(length, name) {
  this.length = length;
  this.isSunk = false;
  this.hitCount = 0;
  this.direction = "inX";
  this.coordinates = null;
  this.name = name;

  this.hit = function () {
    this.hitCount = this.hitCount + 1;
  };
  this.sunk = function () {
    if (this.hitCount >= this.length) {
      this.isSunk = true;
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);
/** ------------- I COULD NOT MAKE DEFINING FUNCTIONS ON PROTOTYPE WORK -------*/

// /**
//  * increase hitcount
//  */
// Ship.prototype.hit = function () {
//   this.hitCount = this.hitCount + 1;
// };

// /**
//  * checks if boat has sunk
//  */
// Ship.prototype.sunk = function () {
//   if (this.hitCount >= this.length) {
//     this.isSunk = true;
//   }
// };

// ---------------- TEST ----------------------

// let testShip = new Ship(2);
// console.log(testShip.hit);

// let testGameboard = new Gameboard();
// let test = testGameboard.calculate([1, 3], 2);
// console.log(test);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundleeba909aa1a7e1f29d9f5.js.map