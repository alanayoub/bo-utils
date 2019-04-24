(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bo-utils"] = factory();
	else
		root["bo-utils"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.generated.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.generated.js":
/*!****************************!*\
  !*** ./index.generated.js ***!
  \****************************/
/*! exports provided: arrayAverage, arrayNormalize, arrayPercentRange, arrayToObject, checkDataTypesEqual, createSvgInMemoryNode, d3SimpleBarChart, d3Sparkline, diffNumericStrings, formatNumberAsCurrency, formatNumberAs, getRandomInt, htmlPollElement, htmlToggleClass, isFloat, isInteger, isNumber, nodeEventsEmitAny, nodePugCompileTemplates, numberGroupDigits, numberNormalize, numberScale, objectGetNestedProperty, objectIsEmptyObject, objectIsObject, objectToArray, partialApplication, stringCamelcase, stringCapitalizeFirstLetter, timeAgo, timeseriesPrune, timeseriesRescale, timeseriesScale, timeseriesThin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_array_average_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/array-average.js */ \"./src/array-average.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"arrayAverage\", function() { return _src_array_average_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_array_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/array-normalize.js */ \"./src/array-normalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"arrayNormalize\", function() { return _src_array_normalize_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_array_percent_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/array-percent-range.js */ \"./src/array-percent-range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"arrayPercentRange\", function() { return _src_array_percent_range_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _src_array_to_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/array-to-object.js */ \"./src/array-to-object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"arrayToObject\", function() { return _src_array_to_object_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _src_check_data_types_equal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/check-data-types-equal.js */ \"./src/check-data-types-equal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkDataTypesEqual\", function() { return _src_check_data_types_equal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _src_create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/create-svg-in-memory-node.js */ \"./src/create-svg-in-memory-node.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSvgInMemoryNode\", function() { return _src_create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _src_d3_simple_bar_chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/d3-simple-bar-chart.js */ \"./src/d3-simple-bar-chart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"d3SimpleBarChart\", function() { return _src_d3_simple_bar_chart_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _src_d3_sparkline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/d3-sparkline.js */ \"./src/d3-sparkline.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"d3Sparkline\", function() { return _src_d3_sparkline_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _src_diff_numeric_strings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/diff-numeric-strings.js */ \"./src/diff-numeric-strings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"diffNumericStrings\", function() { return _src_diff_numeric_strings_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _src_format_number_as_currency_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/format-number-as-currency.js */ \"./src/format-number-as-currency.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatNumberAsCurrency\", function() { return _src_format_number_as_currency_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _src_format_number_as_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/format-number-as.js */ \"./src/format-number-as.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatNumberAs\", function() { return _src_format_number_as_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _src_get_random_int_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/get-random-int.js */ \"./src/get-random-int.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return _src_get_random_int_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _src_html_poll_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/html-poll-element.js */ \"./src/html-poll-element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"htmlPollElement\", function() { return _src_html_poll_element_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _src_html_toggle_class_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/html-toggle-class.js */ \"./src/html-toggle-class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"htmlToggleClass\", function() { return _src_html_toggle_class_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _src_is_float_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/is-float.js */ \"./src/is-float.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFloat\", function() { return _src_is_float_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _src_is_integer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/is-integer.js */ \"./src/is-integer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isInteger\", function() { return _src_is_integer_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _src_is_number_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/is-number.js */ \"./src/is-number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _src_is_number_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _src_node_events_emit_any_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/node-events-emit-any.js */ \"./src/node-events-emit-any.js\");\n/* harmony import */ var _src_node_events_emit_any_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_node_events_emit_any_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"nodeEventsEmitAny\", function() { return _src_node_events_emit_any_js__WEBPACK_IMPORTED_MODULE_17___default.a; });\n/* harmony import */ var _src_node_pug_compile_templates_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/node-pug-compile-templates.js */ \"./src/node-pug-compile-templates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nodePugCompileTemplates\", function() { return _src_node_pug_compile_templates_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _src_number_group_digits_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/number-group-digits.js */ \"./src/number-group-digits.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"numberGroupDigits\", function() { return _src_number_group_digits_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _src_number_normalize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/number-normalize.js */ \"./src/number-normalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"numberNormalize\", function() { return _src_number_normalize_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _src_number_scale_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/number-scale.js */ \"./src/number-scale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"numberScale\", function() { return _src_number_scale_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _src_object_get_nested_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/object-get-nested-property.js */ \"./src/object-get-nested-property.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"objectGetNestedProperty\", function() { return _src_object_get_nested_property_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _src_object_is_empty_object_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/object-is-empty-object.js */ \"./src/object-is-empty-object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"objectIsEmptyObject\", function() { return _src_object_is_empty_object_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _src_object_is_object_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/object-is-object.js */ \"./src/object-is-object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"objectIsObject\", function() { return _src_object_is_object_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _src_object_to_array_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/object-to-array.js */ \"./src/object-to-array.js\");\n/* harmony import */ var _src_object_to_array_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_object_to_array_js__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"objectToArray\", function() { return _src_object_to_array_js__WEBPACK_IMPORTED_MODULE_25___default.a; });\n/* harmony import */ var _src_partial_application_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/partial-application.js */ \"./src/partial-application.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partialApplication\", function() { return _src_partial_application_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _src_string_camelcase_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/string-camelcase.js */ \"./src/string-camelcase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stringCamelcase\", function() { return _src_string_camelcase_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _src_string_capitalize_first_letter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/string-capitalize-first-letter.js */ \"./src/string-capitalize-first-letter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stringCapitalizeFirstLetter\", function() { return _src_string_capitalize_first_letter_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _src_time_ago_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/time-ago.js */ \"./src/time-ago.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeAgo\", function() { return _src_time_ago_js__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _src_timeseries_prune_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/timeseries-prune.js */ \"./src/timeseries-prune.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeseriesPrune\", function() { return _src_timeseries_prune_js__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _src_timeseries_rescale_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/timeseries-rescale.js */ \"./src/timeseries-rescale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeseriesRescale\", function() { return _src_timeseries_rescale_js__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _src_timeseries_scale_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/timeseries-scale.js */ \"./src/timeseries-scale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeseriesScale\", function() { return _src_timeseries_scale_js__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _src_timeseries_thin_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/timeseries-thin.js */ \"./src/timeseries-thin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeseriesThin\", function() { return _src_timeseries_thin_js__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n//\n// This is a generated file\n//\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bo-utils/./index.generated.js?");

/***/ }),

/***/ "./src/array-average.js":
/*!******************************!*\
  !*** ./src/array-average.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * Array Average\n *\n * Take the average of all the numbers in an array\n *\n * @param {Array} array - array of numbers\n * @return {Number}\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((array) => {\n  let total = 0;\n  array.forEach(x => total += x);\n  return total / array.length;\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/array-average.js?");

/***/ }),

/***/ "./src/array-normalize.js":
/*!********************************!*\
  !*** ./src/array-normalize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number_normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-normalize.js */ \"./src/number-normalize.js\");\n\n\n/**\n *\n * Array Normalize\n *\n * Applies the normalize function to an array of numbers\n *\n * @param {Array} array - the array to be normalized\n * @param {Number} min - the min range to apply\n * @param {Number} max - the max range to apply\n * @return {Array} return the normalized array\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((array, min, max) => {\n  const aMax = Math.max(...array);\n  const aMin = Math.min(...array);\n  const result = array.map(n => {\n    return Object(_number_normalize_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n, min, max, aMin, aMax);\n  });\n  return result;\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/array-normalize.js?");

/***/ }),

/***/ "./src/array-percent-range.js":
/*!************************************!*\
  !*** ./src/array-percent-range.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * Percent Range\n *\n * Calculate the percentage change between the maximum and minimum values\n * in the array compared to the first value\n *\n * @param {Array} array - array of numbers\n * @return {Number}\n *\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((array) => {\n  const oldest = array[0];\n  const min = d3.min(array);\n  const max = d3.max(array);\n  const diff = max - min;\n  const result = Math.round(diff / (oldest / 100));\n  return result;\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/array-percent-range.js?");

/***/ }),

/***/ "./src/array-to-object.js":
/*!********************************!*\
  !*** ./src/array-to-object.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * Array to Object\n *\n * Convert an array of Objects to an Object of Objects\n * via one of the Objects fields as the Id\n *\n * ```\n * // input\n * const array = [\n *   {id: 1, foo: 'bar'},\n *   {id: 2, baz: 'qux'},\n * ]\n *\n * arrayToObject(array, 'id');\n *\n * // output\n * {\n *   1: {id: 1, foo: 'bar'}\n *   2: {id: 2, baz: 'qux'}\n * }\n * ```\n *\n * @param {Array} array - an Array of Objects\n * @param {field} field - field to use as a key\n * @return {Objecct}\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((array, field) => {\n  const result = {};\n  let obj;\n  for (obj of array) {\n    result[obj[field]] = obj;\n  }\n  return result;\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/array-to-object.js?");

/***/ }),

/***/ "./src/check-data-types-equal.js":
/*!***************************************!*\
  !*** ./src/check-data-types-equal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkDataTypesEqual; });\n\n\n/**\n *\n * Check Data Types Equal\n *\n * TODO: update to support an arbritary number of arguments\n *\n */\nfunction checkDataTypesEqual(data1, data2) {\n  return (Object.prototype.toString.call(data1) === Object.prototype.toString.call(data2));\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/check-data-types-equal.js?");

/***/ }),

/***/ "./src/create-svg-in-memory-node.js":
/*!******************************************!*\
  !*** ./src/create-svg-in-memory-node.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * Create an SVG node without adding it to the DOM\n * @param {String} type - the type of node to create, e.g. 'rect', 'g' etc\n * @return {D3NodeObject} - a D3 node\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (type => {\n  const elm = document.createElementNS('http://www.w3.org/2000/svg', type);\n  return d3.select(elm);\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/create-svg-in-memory-node.js?");

/***/ }),

/***/ "./src/d3-simple-bar-chart.js":
/*!************************************!*\
  !*** ./src/d3-simple-bar-chart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-svg-in-memory-node.js */ \"./src/create-svg-in-memory-node.js\");\n/* harmony import */ var _array_percent_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-percent-range.js */ \"./src/array-percent-range.js\");\n\n\n\n/**\n *\n * D3 Simple Bar Chart\n *\n * @param {Array} data\n * @param {Boolean} range - show the percent fluctuation of the data\n * @param {Number} [width]\n * @param {Number} [height]\n * @param {String} [styles]\n * @param {String} [fill]\n * @return {SVGElement}\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (({data, range, width = 100, height = 30, styles = '', fill = '#eee'}) => {\n\n  const rangeXOffset = range ? 20 : 0;\n  const xArray = data.map(d => d.x);\n  const yArray = data.map(d => d.y);\n  const yMax = Math.max(...yArray);\n  const yMin = Math.min(...yArray);\n\n  const svgElement = Object(_create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('svg')\n    .attr('style', 'position: absolute; bottom: 0');\n\n  const svg = svgElement\n    .attr('width', width)\n    .attr('height', height)\n    .attr('style', styles)\n    .append('g');\n\n  const x = d3.scaleBand().rangeRound([rangeXOffset, width]).padding(0.1);\n  const y = d3.scaleLinear().rangeRound([height, 0]);\n\n  x.domain(xArray);\n  y.domain([0, yMax]);\n\n  svg.selectAll()\n    .data(data)\n    .enter().append('rect')\n    .attr('x', d => x(d.x))\n    .attr('y', d => y(d.y))\n    .attr('fill', fill)\n    .attr('width', x.bandwidth())\n    .attr('height', d => height - y(d.y));\n\n  if (range) {\n\n    const volumeArray = data.map(v => v.y);\n    const percentSwing = Object(_array_percent_range_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(volumeArray);\n\n    const rangeGroup = svg.append('g')\n      .attr('class', 'cryptohub-sparkline-range');\n\n    rangeGroup.append('title')\n      .text('Percent fluctuation over 7 days');\n\n    // rangeGroup.append('rect')\n    //   .attr('width', '20')\n    //   .attr('height', '12')\n    //   .attr('fill', '#fff')\n    //   .attr('fill-opacity', '0.8')\n    //   .attr('x', 0)\n    //   .attr('y', 0)\n    //   .attr('rx', 0)\n    //   .attr('ry', 0);\n\n    rangeGroup.append('text')\n      .attr('x', '2')\n      .attr('y', 8)\n      .attr('fill', '#00A3E5')\n      .attr('font-size', '10px')\n      .attr('text-anchor', 'start')\n      .text(percentSwing);\n  }\n\n  return svgElement;\n\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/d3-simple-bar-chart.js?");

/***/ }),

/***/ "./src/d3-sparkline.js":
/*!*****************************!*\
  !*** ./src/d3-sparkline.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-svg-in-memory-node.js */ \"./src/create-svg-in-memory-node.js\");\n/* harmony import */ var _array_percent_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-percent-range.js */ \"./src/array-percent-range.js\");\n\n\n\n/**\n *\n * D3 Sparkline\n *\n * @param {Array} data\n * @param {Boolean} range - show the percent fluctuation of the data\n * @param {Number} [width]\n * @param {Number} [height]\n * @param {String} [styles]\n * @return {SVGElement}\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (({data, range, width = 100, height = 30, styles = ''}) => {\n\n  const rangeXOffset = range ? 20 : 0;\n  const svgElement = Object(_create_svg_in_memory_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('svg');\n  const len = data.length;\n  if (!len) return svgElement;\n\n  //initialize scales\n  const xExtent = d3.extent(data, d => d.x);\n  const yExtent = d3.extent(data, d => d.y);\n  const x = d3.scaleLinear().domain(xExtent).range([rangeXOffset, width - 2]);\n  const y = d3.scaleLinear().domain(yExtent).range([height - 4, 0]);\n\n  const line = d3.line()\n    .x(d => x(d.x))\n    .y(d => y(d.y))\n    .curve(d3.curveBasis);\n\n  const svg = svgElement\n    .attr('width', width)\n    .attr('height', height)\n    .attr('style', styles)\n    .append('g')\n    .attr('transform', 'translate(0, 2)');\n\n  svg.append('path')\n     .datum(data)\n     .attr('class', 'cryptohub-sparkline')\n     .attr('fill', 'none')\n     .attr('stroke', '#000')\n     .attr('stroke-width', '0.5px')\n     .attr('d', line);\n\n  svg.append('circle')\n     .attr('class', 'cryptohub-sparkline-circle')\n     .attr('cx', x(data[len - 1].x))\n     .attr('cy', y(data[len - 1].y))\n     .attr('fill', '#00A3E5')\n     .attr('stroke', 'none')\n     .attr('r', 1.5);\n\n  if (range) {\n\n    const priceArray = data.map(v => v.y);\n    const percentSwing = Object(_array_percent_range_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(priceArray);\n\n    const rangeGroup = svg.append('g')\n      .attr('class', 'cryptohub-sparkline-range');\n\n    rangeGroup.append('title')\n      .text('Percent fluctuation over 7 days');\n\n    // rangeGroup.append('rect')\n    //   .attr('width', '20')\n    //   .attr('height', '12')\n    //   .attr('fill', '#fff')\n    //   .attr('fill-opacity', '0.8')\n    //   .attr('x', 0)\n    //   .attr('y', 0)\n    //   .attr('rx', 0)\n    //   .attr('ry', 0);\n\n    rangeGroup.append('text')\n      .attr('x', '2')\n      .attr('y', '8')\n      .attr('fill', '#555')\n      .attr('font-size', '10px')\n      .attr('text-anchor', 'start')\n      .text(percentSwing);\n  }\n\n  return svgElement;\n\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/d3-sparkline.js?");

/***/ }),

/***/ "./src/diff-numeric-strings.js":
/*!*************************************!*\
  !*** ./src/diff-numeric-strings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return diffNumericStrings; });\n/**\n *\n * Diff Numeric Strings\n * This function is for identifying the changes between 2 numbers\n * For example in stock data if you wanted to know by how much a value\n * has increased or decreased\n *\n * v1     v2     return\n * 1234   1244   {start: 12, end: 44}\n * 10010  11000  {start: 1,  end: 1000}\n * 20000  12345  {start: ,   end: 12345}\n *\n * @param {String} v1\n * @param {String} v2\n * @return {Object}\n *\n */\nfunction diffNumericStrings(v1, v2) {\n\n  let s1;\n  let s2;\n  v1 = String(v1);\n  v2 = String(v2);\n\n  if (v2.length > v1.length) {\n\n    s1 = '';\n    s2 = v2;\n\n  }\n  else {\n\n    let i = v1.length -1;\n    let idx;\n\n    for (; i > -1; i--) {\n      if (v1.charAt(i) !== v2.charAt(i)) {\n        idx = i;\n      }\n    }\n\n    s1 = v2.substring(0, idx);\n    s2 = v2.substring(idx);\n\n  }\n\n  if (s1 === s2) s1 = '';\n\n  return {\n    start: s1, end: s2\n  }\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/diff-numeric-strings.js?");

/***/ }),

/***/ "./src/format-number-as-currency.js":
/*!******************************************!*\
  !*** ./src/format-number-as-currency.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatNumberAsCurrency; });\n/**\n *\n * Format Number as Bitcoin\n *\n * num      precision     return\n * 12345    2             Ƀ12,345.00\n * 0.001    2             Ƀ0.00\n *\n * @param {Number} num\n * @param {String} code - currency code\n * @param {Number} [precision]\n * @return {String}\n *\n */\nfunction formatNumberAsCurrency(num, code, precision) {\n\n  const special = {\n    'BTC': '฿',\n    'SAT': 'sat'\n  };\n\n  if (special[code]) {\n    if (!precision) {\n      if (code === 'BTC') precision = 8;\n      if (code === 'SAT') precision = 0;\n    }\n    let output = new Intl\n      .NumberFormat('en-US', {\n        style: 'currency',\n        currency: 'USD',\n        minimumFractionDigits: precision,\n        maximumFractionDigits: precision,\n      })\n      .format(num)\n      .replace('$', '');\n    if (code === 'SAT') output += ` ${special[code]}`;\n    else output = special[code] + output;\n    return output;\n  }\n  else {\n    if (!precision) {\n      precision = 2;\n    }\n    return new Intl\n      .NumberFormat('en-US', {\n        style: 'currency',\n        currency: code,\n        minimumFractionDigits: precision,\n        maximumFractionDigits: precision,\n      })\n      .format(num);\n  }\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/format-number-as-currency.js?");

/***/ }),

/***/ "./src/format-number-as.js":
/*!*********************************!*\
  !*** ./src/format-number-as.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatNumberAsCurrency; });\n/**\n *\n * Format Number as Bitcoin\n *\n * num      precision     return\n * 12345    2             Ƀ12,345.00\n * 0.001    2             Ƀ0.00\n *\n * @param {Number} num\n * @param {Number} precision\n * @param {String} code - currency code\n * @return {String}\n *\n */\nfunction formatNumberAsCurrency(num, precision, code) {\n\n  const special = {\n    'BTC': 'Ƀ'\n  };\n\n  if (special[code]) {\n    return new Intl\n      .NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: precision})\n      .format(num)\n      .replace('$', 'Ƀ');\n  }\n  else {\n    return new Intl\n      .NumberFormat('en-US', {style: 'currency', currency: code, minimumFractionDigits: precision})\n      .format(num);\n  }\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/format-number-as.js?");

/***/ }),

/***/ "./src/get-random-int.js":
/*!*******************************!*\
  !*** ./src/get-random-int.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomInt; });\n/**\n *\n * GET RANDOM INT\n *\n * Get a random integer between the min and max values provided\n * If no values are provided it will return an integer between 0 and 1,000,000\n *\n * NOTE: The min and max are inclusive\n *\n * @param {Number} [min]\n * @param {Number} [max]\n * @return {Number}\n *\n */\nfunction getRandomInt(min = 0, max = 1000000) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/get-random-int.js?");

/***/ }),

/***/ "./src/html-poll-element.js":
/*!**********************************!*\
  !*** ./src/html-poll-element.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return htmlPollElement; });\n/**\n *\n * HTML POLL ELEMENT\n *\n * Repeatidly check if an element is available in the DOM.\n * Call the callback function when it becomes available\n * and clear the interval\n *\n * @param {String} selector\n * @param {Number} interval\n * @param {Function} callback\n * @return {undefined}\n *\n */\nfunction htmlPollElement(selector, interval, callback) {\n  const inter = setInterval(function () {\n    if (document.querySelectorAll(selector)[0]) {\n      clearInterval(inter);\n      callback();\n    }\n  }, interval);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/html-poll-element.js?");

/***/ }),

/***/ "./src/html-toggle-class.js":
/*!**********************************!*\
  !*** ./src/html-toggle-class.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return htmlToggleClass; });\n/**\n*\n* HTML TOGGLE CLASS\n*\n* Toggle a class on a DOM node\n*\n* @param {HTMLElement} element\n* @param {String} cssClass\n* @return {undefined}\n*\n*/\nfunction htmlToggleClass(element, cssClass) {\n  element.classList.contains(cssClass)\n    ? element.classList.remove(cssClass)\n    : element.classList.add(cssClass);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/html-toggle-class.js?");

/***/ }),

/***/ "./src/is-float.js":
/*!*************************!*\
  !*** ./src/is-float.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isFloat; });\n/**\n *\n * Is Float\n *\n * @param {*} x\n * @return {Boolean}\n *\n */\nfunction isFloat(x) {\n  return Number(x) === x && x % 1 !== 0;\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/is-float.js?");

/***/ }),

/***/ "./src/is-integer.js":
/*!***************************!*\
  !*** ./src/is-integer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isInteger; });\n/**\n *\n * Is Integer\n *\n * @param {*} x\n * @return {Boolean}\n *\n */\nfunction isInteger(x) {\n  return Number(x) === x && x % 1 === 0;\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/is-integer.js?");

/***/ }),

/***/ "./src/is-number.js":
/*!**************************!*\
  !*** ./src/is-number.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isNumber; });\n/* harmony import */ var _is_integer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-integer.js */ \"./src/is-integer.js\");\n/* harmony import */ var _is_float_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-float.js */ \"./src/is-float.js\");\n\n\n\n/**\n *\n * Is Number\n * Check if the value is an Integer or a Float\n *\n * @param {*} x\n * @return {Boolean}\n *\n */\nfunction isNumber(x) {\n  return Object(_is_integer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x) || Object(_is_float_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/is-number.js?");

/***/ }),

/***/ "./src/node-events-emit-any.js":
/*!*************************************!*\
  !*** ./src/node-events-emit-any.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EventEmitter = __webpack_require__(/*! events */ \"events\");\n/**\n *\n * Extend node.js events to support listening\n * to any event\n *\n */\nmodule.exports = class Emitter extends EventEmitter {\n  emit(type, ...args) {\n    super.emit(type, ...args);\n  }\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/node-events-emit-any.js?");

/***/ }),

/***/ "./src/node-pug-compile-templates.js":
/*!*******************************************!*\
  !*** ./src/node-pug-compile-templates.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pugCompileTemplates; });\nconst pug  = __webpack_require__(/*! pug */ \"pug\");\nconst glob = __webpack_require__(/*! glob */ \"glob\");\nconst fs   = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n\n/**\n *\n * Compile Pug templates and save to a file\n * Compiled templates are provided in an array at `varName`\n *\n * @param {String} pugGlob - pug glob\n * @param {String} outFile - output file\n * @return {Boolean}\n *\n */\nfunction pugCompileTemplates({varName = 'pug', pugGlob, outFile}) {\n  try {\n    glob(pugGlob, {}, (error, files) => {\n      const len = files.length - 1;\n      const pugTemplates = [];\n      const start = `module.exports = {`;\n      const end = '}';\n      let str, idx, file, name, prop, tmpl;\n      for ([idx, file] of Object.entries(files)) {\n\n        idx = +idx;\n\n        str = fs.readFileSync(file, 'utf8');\n        if (!str) continue;\n        tmpl = pug.compile(str);\n\n        if (!idx) prop = start;\n        else prop = '';\n\n        name = file.replace(/.*\\/(.*).pug$/, '$1');\n        prop += `'${name}': ${tmpl.toString()}`;\n\n        if (idx === len) prop += end;\n\n        pugTemplates.push(prop);\n\n      }\n\n      fs.writeFileSync(outFile, pugTemplates.join(','));\n      return true;\n\n    });\n  } catch (error) {\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/node-pug-compile-templates.js?");

/***/ }),

/***/ "./src/number-group-digits.js":
/*!************************************!*\
  !*** ./src/number-group-digits.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return numberGroupDigits; });\n/* harmony import */ var _is_integer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-integer.js */ \"./src/is-integer.js\");\n\n\n/**\n *\n * NUMBER GROUP DIGITS\n *\n * Group numbers with a delimiter\n *\n * func(1234)      // 1,234\n * func(123456)    // 123,456\n * func(1234, ' ') // 1 234\n *\n * @see https://en.wikipedia.org/wiki/Decimal_separator for further enhancements\n *\n * @param {Number} number\n * @param {String} [delimiter]\n * @return {String|Boolean}\n *\n */\nfunction numberGroupDigits(number, delimiter = ',') {\n  if (!Object(_is_integer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(number)) return void false;\n  return Math.floor(number).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, `$1${delimiter}`);\n};\n\n\n//# sourceURL=webpack://bo-utils/./src/number-group-digits.js?");

/***/ }),

/***/ "./src/number-normalize.js":
/*!*********************************!*\
  !*** ./src/number-normalize.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * Number Normalize\n *\n * Normalize a number from one range to another\n *\n * @param {Number} num - the number to be normalized\n * @param {Number} min - the min range of the original numbers\n * @param {Number} max - the max range of the original number\n * @param {Number} nMin - the new min range to apply\n * @param {Number} nMax - the new max range to apply\n * @return {Number} return the normalized number\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((num, min, max, nMin, nMax) => {\n  const percent = (num - nMin) / (nMax - nMin);\n  const output = percent * (max - min) + min;\n  return output;\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/number-normalize.js?");

/***/ }),

/***/ "./src/number-scale.js":
/*!*****************************!*\
  !*** ./src/number-scale.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return numberScale; });\n\n\n/**\n *\n * Number Scale\n *\n * @param {Number} num\n * @param {Number} min\n * @param {Number} max\n * @param {Number} newMin\n * @param {Number} newMax\n * @return {Nuber}\n *\n */\nfunction numberScale(num, min, max, newMin = 0, newMax = 100) {\n\n  if (num < min) num = min;\n  if (num > max) num = max;\n\n  // If the ranges suck\n  if (min === max) min *= 0.99, max *= 1.01;\n  if (newMin === newMax) throw new Error(`numberScale(): Incorrect range ${min}-${max}`);\n\n  const percent = (num - min) / (max - min);\n  return percent * (newMax - newMin) + newMin;\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/number-scale.js?");

/***/ }),

/***/ "./src/object-get-nested-property.js":
/*!*******************************************!*\
  !*** ./src/object-get-nested-property.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return objectGetNestedProperty; });\n/**\n *\n * Get nested property\n *\n * @param {Object} obj\n * @param {String} str\n * @return {Object|String} return the property, can be any value\n *\n */\nfunction objectGetNestedProperty(obj, str) {\n  const pathArr = str.split('.');\n  return pathArr.reduce((o, k) => (o && o[k] !== void 0) ? o[k] : void 0, obj);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/object-get-nested-property.js?");

/***/ }),

/***/ "./src/object-is-empty-object.js":
/*!***************************************!*\
  !*** ./src/object-is-empty-object.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return objectIsEmptyObject; });\n/* harmony import */ var _object_is_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-is-object */ \"./src/object-is-object.js\");\n\n\n/**\n *\n * IS EMPTY OBJECT\n *\n * @param {Object} object - object or any other type\n * @return {Boolean}\n *\n */\nfunction objectIsEmptyObject(data) {\n  return Object(_object_is_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data) && !Object.keys(data).length;\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/object-is-empty-object.js?");

/***/ }),

/***/ "./src/object-is-object.js":
/*!*********************************!*\
  !*** ./src/object-is-object.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return objectIsObject; });\n/**\n *\n * objectIsObject\n *\n * @param {Object} object - object or any other type\n * @return {Boolean}\n *\n */\nfunction objectIsObject(object) {\n  return Object.prototype.toString.call(object) === '[object Object]';\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/object-is-object.js?");

/***/ }),

/***/ "./src/object-to-array.js":
/*!********************************!*\
  !*** ./src/object-to-array.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n *\n * @param {Object} data\n * @return {Array}\n *\n */\nmodule.exports = function objectToArray(data) {\n  const arrayData = [];\n  for (let [id, obj] of Object.entries(data)) {\n    obj.id = obj.Id;\n    arrayData.push(obj);\n  }\n  return arrayData;\n};\n\n\n//# sourceURL=webpack://bo-utils/./src/object-to-array.js?");

/***/ }),

/***/ "./src/partial-application.js":
/*!************************************!*\
  !*** ./src/partial-application.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * partialApplication\n *\n * @param {Function} fn\n * @param {Arguments} cache\n * @return {Function}\n *\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((fn, ...cache) => (...args) => {\n  const all = cache.concat(args);\n  return all.length >= fn.length ? fn(...all) : pApply(fn, ...all);\n});\n\n\n//# sourceURL=webpack://bo-utils/./src/partial-application.js?");

/***/ }),

/***/ "./src/string-camelcase.js":
/*!*********************************!*\
  !*** ./src/string-camelcase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return camelcase; });\n/* harmony import */ var _string_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-capitalize-first-letter */ \"./src/string-capitalize-first-letter.js\");\n\n\n// bo-utils\n\n\n/**\n *\n * @param {String} str\n * @param {String} delimiter\n * @return {String}\n *\n */\nfunction camelcase(str, delimiter) {\n  return str\n    .split('-')\n    .map((x, i) => {\n      return !i ? x : Object(_string_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x)\n    })\n    .join('');\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/string-camelcase.js?");

/***/ }),

/***/ "./src/string-capitalize-first-letter.js":
/*!***********************************************!*\
  !*** ./src/string-capitalize-first-letter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return capitalizeFirstLetter; });\n/**\n *\n * @param {String} str\n * @return {String}\n *\n */\nfunction capitalizeFirstLetter(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/string-capitalize-first-letter.js?");

/***/ }),

/***/ "./src/time-ago.js":
/*!*************************!*\
  !*** ./src/time-ago.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timeAgo; });\n/**\n *\n * Timeago\n *\n * NOTE: Requires moment\n *\n * @param {String|Date|Number} timestamp\n * @return {String} e.g. 'a few seconds'\n *\n */\nfunction timeAgo(timestamp) {\n  let timeago;\n  if (timestamp !== void 0) {\n    const startDate = moment(timestamp);\n    const endDate = moment(new Date);\n    const ms = Math.abs(startDate.diff(endDate));\n    const duration = moment.duration(ms).humanize();\n    timeago = `${duration}`;\n  }\n  return timeago;\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/time-ago.js?");

/***/ }),

/***/ "./src/timeseries-prune.js":
/*!*********************************!*\
  !*** ./src/timeseries-prune.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timeseriesPrune; });\n\n\n/**\n *\n * Timeseries prune\n *\n * @param {Array} ts - Array of timeseries objects\n * @param {Number} maxAge - Remove all items older than now - maxAge in ms\n * @param {String} [timestampField] - The name of the timestamp field\n *\n */\nfunction timeseriesPrune(ts, maxAge, timestampField = 'timestamp') {\n  const timeNow = +new Date();\n  return ts.filter((v, i) => (timeNow - v[timestampField]) < maxAge);\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/timeseries-prune.js?");

/***/ }),

/***/ "./src/timeseries-rescale.js":
/*!***********************************!*\
  !*** ./src/timeseries-rescale.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timeseriesRescale; });\n/* harmony import */ var _timeseries_thin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeseries-thin */ \"./src/timeseries-thin.js\");\n/* harmony import */ var _timeseries_prune__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeseries-prune */ \"./src/timeseries-prune.js\");\n/* harmony import */ var _timeseries_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeseries-scale */ \"./src/timeseries-scale.js\");\n\n\n\n\n\n\n/**\n *\n * Timeseries Rescale\n *\n * @param {Array} ts - Array of timeseries objects\n * @return {Array} - Array of updated timeseries object\n *\n */\nfunction timeseriesRescale(item, limit = 50, maxAge = 1000 * 60 * 60 * 24 * 7) {\n\n  const price     = item['cc-total-vol-full-PRICE'];\n  const volume    = item['cc-total-vol-full-TOTALVOLUME24HTO'];\n  const ts        = item['cryptohub-price-history'];\n  const minP      = item['cryptohub-price-history-min'] || price - 1;\n  const maxP      = item['cryptohub-price-history-max'] || price;\n  const minV      = item['cryptohub-volume-history-min'] || volume - 1;\n  const maxV      = item['cryptohub-volume-history-max'] || volume;\n  const timestamp = item['cc-total-vol-full-PRICE-timestamp'];\n\n  Object(_timeseries_prune__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ts, maxAge);\n  Object(_timeseries_thin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ts, limit);\n\n  // scale up\n  Object(_timeseries_scale__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ts, min: minP, max: maxP, scaleField: 'price'});\n  Object(_timeseries_scale__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ts, min: minV, max: maxV, scaleField: 'volume'});\n\n  // add item\n  const last = ts[ts.length - 1];\n  const next = {price, volume, timestamp: +new Date(timestamp)};\n  if (JSON.stringify(last) !== JSON.stringify(next)) ts.push(next);\n\n  // scale down\n  Object(_timeseries_scale__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ts, min: 0, max: 1000, scaleField: 'price'});\n  Object(_timeseries_scale__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ts, min: 0, max: 1000, scaleField: 'volume'});\n\n  // return {\n  //   timeseries: tsArr,\n  //   priceMin: newPriceMin,\n  //   priceMax: newPriceMax,\n  //   volumeMin: newVolMin,\n  //   volumeMax: newVolMax,\n  // };\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/timeseries-rescale.js?");

/***/ }),

/***/ "./src/timeseries-scale.js":
/*!*********************************!*\
  !*** ./src/timeseries-scale.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timeseriesScale; });\n/* harmony import */ var _number_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-scale */ \"./src/number-scale.js\");\n\n\n\n\n/**\n *\n * Timeseries Scale\n *\n * @param {Array} ts - Array of timeseries objects\n * @param {Number} min - Minimum value of range to scale to\n * @param {Number} max - Maximim value of the range to scale to\n * @param {String} scaleField - The name of the field to scale\n * @param {String} [timestampField] - The name of the timestamp field\n * @param {String} [ceil] - Rount the value up\n * @return {Array} - Array of updated timeseries object\n *\n */\nfunction timeseriesScale({ts, min, max, scaleField, timestampField = 'timestamp', ceil = true}) {\n\n  const arr = ts.map(x => x[scaleField]);\n  const minOld = Math.min(...arr);\n  const maxOld = Math.max(...arr);\n\n  let val;\n  let scale;\n  for (val of Object.values(ts)) {\n    scale = Object(_number_scale__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val[scaleField], minOld, maxOld, min, max);\n    val[scaleField] = ceil ? Math.ceil(scale) : scale;\n  }\n\n  return ts;\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/timeseries-scale.js?");

/***/ }),

/***/ "./src/timeseries-thin.js":
/*!********************************!*\
  !*** ./src/timeseries-thin.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timeseriesThin; });\n\n\n/**\n *\n * Timeseries thin\n *\n * Remove the timeseries items that have the\n * shortest time span between them and their siblings\n * Keep removing until the limit has been reached\n *\n * @param {Array} ts\n * @param {Number} limit\n * @param {String} [timestampField]\n * @return {Array}\n *\n */\nfunction timeseriesThin(ts, limit, timestampField = 'timestamp') {\n\n  const numToRemove = ts.length - limit;\n\n  if (!numToRemove) {\n    return ts;\n  }\n  else {\n\n    let idx;\n    let diff;\n    let diffs = {};\n\n    for (idx of Object.keys(ts)) {\n      if (idx > 0) {\n        diff = Math.abs(ts[idx - 1][timestampField] - ts[idx][timestampField]);\n        diffs[diff] = idx;\n      };\n    }\n\n    let i;\n    let itemsToRemove = Object.keys(diffs).sort().splice(0, numToRemove);\n    for ([i, idx] of Object.entries(itemsToRemove)) {\n      ts.splice(diffs[idx] - i, 1);\n    }\n\n  }\n\n  return ts;\n\n}\n\n\n//# sourceURL=webpack://bo-utils/./src/timeseries-thin.js?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack://bo-utils/external_%22events%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack://bo-utils/external_%22fs-extra%22?");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"glob\");\n\n//# sourceURL=webpack://bo-utils/external_%22glob%22?");

/***/ }),

/***/ "pug":
/*!**********************!*\
  !*** external "pug" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pug\");\n\n//# sourceURL=webpack://bo-utils/external_%22pug%22?");

/***/ })

/******/ });
});