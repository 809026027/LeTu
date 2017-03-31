/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _UserssongfengWeekDemo1pluginsweexAmapweb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"C:UserssongfengWeekDemo1pluginsweex-amapweb\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _UserssongfengWeekDemo1pluginsweexAmapweb2 = _interopRequireDefault(_UserssongfengWeekDemo1pluginsweexAmapweb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.weex && window.weex.install(_UserssongfengWeekDemo1pluginsweexAmapweb2.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Init weex instance depending on the url params.
	 * There are three ways to load weex bundles, depends on the
	 * parameter 'loader' in the url:
	 *
	 *   + xhr: use XMLHttpRequest. Parameter 'page' should be
	 *   the bundle's url.
	 *   + source: use the transformed code itself. 'page' should
	 *   be the transformed weex bundle.
	 *
	 * @param {String} bundle - It has different meaning depends on
	 *   the type of loader.
	 */
	
	(function () {
	  function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	    var match = location.search.match(reg);
	    return match && match[1];
	  }
	  var loader = getUrlParam('loader') || 'xhr';
	  var page = getUrlParam('page') || '../dist/index.js';
	  window.weex.init({
	    appId: location.href,
	    loader: loader,
	    source: page,
	    rootId: 'weex'
	  });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTFhNWYwMjFiOTdmY2ZlNDg2OTUiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwiZ2V0VXJsUGFyYW0iLCJrZXkiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsImxvY2F0aW9uIiwic2VhcmNoIiwibG9hZGVyIiwicGFnZSIsImluaXQiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBQ0FBLFFBQU9DLElBQVAsSUFBZUQsT0FBT0MsSUFBUCxDQUFZQyxPQUFaLG9EQUFmLEM7Ozs7Ozs7O0FDREM7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEVBQUMsWUFBWTtBQUNYLFlBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQUlDLE1BQU0sSUFBSUMsTUFBSixDQUFXLFVBQVVGLEdBQVYsR0FBZ0IsVUFBM0IsQ0FBVjtBQUNBLFNBQUlHLFFBQVFDLFNBQVNDLE1BQVQsQ0FBZ0JGLEtBQWhCLENBQXNCRixHQUF0QixDQUFaO0FBQ0EsWUFBT0UsU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7QUFDRCxPQUFJRyxTQUFTUCxZQUFZLFFBQVosS0FBeUIsS0FBdEM7QUFDQSxPQUFJUSxPQUFPUixZQUFZLE1BQVosS0FBdUIsa0JBQWxDO0FBQ0FILFVBQU9DLElBQVAsQ0FBWVcsSUFBWixDQUFpQjtBQUNmQyxZQUFPTCxTQUFTTSxJQUREO0FBRWJKLGFBQVFBLE1BRks7QUFHYkssYUFBUUosSUFISztBQUliSyxhQUFRO0FBSkssSUFBakI7QUFNRCxFQWRELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MWE1ZjAyMWI5N2ZjZmU0ODY5NSIsImltcG9ydCBhbWFwIGZyb20gXCJDOlxcVXNlcnNcXHNvbmdmZW5nXFxXZWVrRGVtbzFcXHBsdWdpbnNcXHdlZXgtYW1hcFxcd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoYW1hcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwiIC8qKlxuICAqIEluaXQgd2VleCBpbnN0YW5jZSBkZXBlbmRpbmcgb24gdGhlIHVybCBwYXJhbXMuXG4gICogVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gbG9hZCB3ZWV4IGJ1bmRsZXMsIGRlcGVuZHMgb24gdGhlXG4gICogcGFyYW1ldGVyICdsb2FkZXInIGluIHRoZSB1cmw6XG4gICpcbiAgKiAgICsgeGhyOiB1c2UgWE1MSHR0cFJlcXVlc3QuIFBhcmFtZXRlciAncGFnZScgc2hvdWxkIGJlXG4gICogICB0aGUgYnVuZGxlJ3MgdXJsLlxuICAqICAgKyBzb3VyY2U6IHVzZSB0aGUgdHJhbnNmb3JtZWQgY29kZSBpdHNlbGYuICdwYWdlJyBzaG91bGRcbiAgKiAgIGJlIHRoZSB0cmFuc2Zvcm1lZCB3ZWV4IGJ1bmRsZS5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBidW5kbGUgLSBJdCBoYXMgZGlmZmVyZW50IG1lYW5pbmcgZGVwZW5kcyBvblxuICAqICAgdGhlIHR5cGUgb2YgbG9hZGVyLlxuICAqL1xuICBcblxuICBcbiAoZnVuY3Rpb24gKCkge1xuICAgZnVuY3Rpb24gZ2V0VXJsUGFyYW0oa2V5KSB7XG4gICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCdbP3wmXScgKyBrZXkgKyAnPShbXiZdKyknKVxuICAgICB2YXIgbWF0Y2ggPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2gocmVnKVxuICAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV1cbiAgIH1cbiAgIHZhciBsb2FkZXIgPSBnZXRVcmxQYXJhbSgnbG9hZGVyJykgfHwgJ3hocic7XG4gICB2YXIgcGFnZSA9IGdldFVybFBhcmFtKCdwYWdlJykgfHwgJy4uL2Rpc3QvaW5kZXguanMnO1xuICAgd2luZG93LndlZXguaW5pdCh7XG4gICAgIGFwcElkOiBsb2NhdGlvbi5ocmVmXG4gICAgICwgbG9hZGVyOiBsb2FkZXJcbiAgICAgLCBzb3VyY2U6IHBhZ2VcbiAgICAgLCByb290SWQ6ICd3ZWV4J1xuICAgfSlcbiB9KSgpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWIvanMvaW5pdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=