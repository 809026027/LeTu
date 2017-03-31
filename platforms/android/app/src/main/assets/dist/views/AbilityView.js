// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(138)
	)

	/* script */
	__vue_exports__ = __webpack_require__(139)

	/* template */
	var __vue_template__ = __webpack_require__(140)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\views\\AbilityView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-03fb4df3"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "position": "relative",
	    "height": 120,
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD",
	    "backgroundColor": "#FF6600"
	  },
	  "logo": {
	    "position": "relative",
	    "width": 50,
	    "height": 50,
	    "top": 35,
	    "left": 35,
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "#FFFFFF"
	  },
	  "image": {
	    "width": 44,
	    "height": 44
	  },
	  "nav": {
	    "display": "flex",
	    "position": "absolute",
	    "left": 120,
	    "top": 35,
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "link": {
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "title": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 32,
	    "lineHeight": 44,
	    "color": "#FFFFFF"
	  }
	}

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["header"]
	  }, [_c('div', {
	    staticClass: ["logo"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/')
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["image"],
	    attrs: {
	      "src": "https://news.ycombinator.com/favicon.ico"
	    }
	  })]), _c('div', {
	    staticClass: ["nav"]
	  }, [_c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('my/letu')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("乐途")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/my/qq')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("腾讯")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/my/baidu')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("百度")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/my/alibaba')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("阿里")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/my/huawei')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("华为")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/map')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("地图")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/ability')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("能力")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(3)
	)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\components\\app-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2666d85e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },

/***/ 138:
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  },
	  "fixed-button": {
	    "position": "absolute",
	    "bottom": 50,
	    "right": 50,
	    "backgroundColor": "#FC6621",
	    "borderRadius": 10,
	    "width": 120,
	    "padding": 15,
	    "color": "#FFFFFF",
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _appHeader = __webpack_require__(108);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var camera = weex.requireModule('camera'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	exports.default = {
	    components: { AppHeader: _appHeader2.default },
	    methods: {
	        captureImage: function captureImage() {
	            camera.captureImage({}, function (ret) {
	                modal.alert({
	                    message: ret.path,
	                    okTitle: '确定'
	                });
	            });
	        },
	        captureVideo: function captureVideo() {
	            camera.captureVideo({}, function (ret) {
	                var modal = weex.requireModule('modal');
	                modal.alert({
	                    message: ret.path,
	                    okTitle: '确定'
	                });
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 140:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('app-header'), _c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.captureImage
	    }
	  }, [_c('text', {
	    staticClass: ["btn"]
	  }, [_vm._v("照相")])]), _c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.captureVideo
	    }
	  }, [_c('text', {
	    staticClass: ["btn"]
	  }, [_vm._v("摄像")])]), _c('text', {
	    staticClass: ["fixed-button"],
	    on: {
	      "click": function($event) {
	        _vm.jump("/")
	      }
	    }
	  }, [_vm._v("返回")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });