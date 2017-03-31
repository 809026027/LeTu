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
	__vue_styles__.push(__webpack_require__(158)
	)

	/* script */
	__vue_exports__ = __webpack_require__(159)

	/* template */
	var __vue_template__ = __webpack_require__(160)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\pages\\polygon-contains-marker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8382d8e2"
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

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  "navbar-con": {
	    "height": 108,
	    "paddingTop": 20
	  },
	  "navbar": {
	    "zIndex": 1000,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 88,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#dddddd"
	  },
	  "btn-back": {
	    "zIndex": 1002,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 180,
	    "height": 88
	  },
	  "btn-arrow-left": {
	    "width": 60,
	    "height": 60,
	    "marginLeft": 10
	  },
	  "btn-text": {
	    "color": "#0f89f5"
	  },
	  "title": {
	    "position": "absolute",
	    "left": 180,
	    "right": 180,
	    "top": 0,
	    "height": 88,
	    "lineHeight": 88,
	    "fontSize": 36,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	var navigator = weex.requireModule('navigator');
	exports.default = {
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["navbar-con"]
	  }, [_c('div', {
	    staticClass: ["navbar"]
	  }, [_c('div', {
	    staticClass: ["btn-back"],
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: ["btn-arrow-left"],
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v("返回")])]), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.title))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(94)
	)

	/* script */
	__vue_exports__ = __webpack_require__(95)

	/* template */
	var __vue_template__ = __webpack_require__(96)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\include\\navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-10bd3f22"
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

/***/ 158:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "map": {
	    "flex": 1,
	    "position": "relative",
	    "backgroundColor": "#ffffff",
	    "minHeight": 600,
	    "borderBottomWidth": 10,
	    "borderBottomColor": "#ffffff"
	  },
	  "map-control": {
	    "paddingTop": 20,
	    "minHeight": 600
	  },
	  "title": {
	    "marginLeft": 20,
	    "paddingLeft": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "fontSize": 36,
	    "borderLeftWidth": 6,
	    "borderLeftColor": "#0f89f5",
	    "color": "#222222",
	    "textAlign": "left"
	  },
	  "tips": {
	    "margin": 20,
	    "padding": 10,
	    "color": "#666666",
	    "fontSize": 20
	  },
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
	  "distance": {
	    "padding": 5,
	    "margin": 20,
	    "fontSize": 22,
	    "backgroundColor": "#f1c40f",
	    "color": "#000000"
	  }
	}

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navbar = __webpack_require__(146);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Amap = null; //
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
	//
	//
	//
	//
	//
	//

	try {
	  Amap = weex.requireModule('amap');
	} catch (err) {
	  console.log(err);
	}
	var modal = weex.requireModule('modal');
	var path = [[116.403322, 39.920255], [116.410703, 39.897555], [116.402292, 39.892353], [116.389846, 39.891365]];
	exports.default = {
	  components: { Navbar: _navbar2.default },
	  data: function data() {
	    return {
	      keys: {
	        h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	        ios: '',
	        android: 'db6a973159cb0c2639ad02c617a786ae'
	      },
	      pos: [116.397428, 39.90923],
	      path: path,
	      zoom: 13,
	      marker: {
	        position: [116.368904, 39.923423],
	        title: 'a marker'
	      },
	      marker2: {
	        position: [116.403322, 39.897555],
	        title: 'another marker'
	      }
	    };
	  },


	  methods: {
	    test: function test() {
	      var _this = this;

	      Amap.polygonContainsMarker(this.marker.position, this.$refs.polygon2017.ref, function (res) {
	        _this.handleRes(res);
	      });
	    },
	    test2: function test2() {
	      var _this2 = this;

	      Amap.polygonContainsMarker(this.marker2.position, this.$refs.polygon2017.ref, function (res) {
	        _this2.handleRes(res);
	      });
	    },
	    handleRes: function handleRes(res) {
	      var msg = '标记点';
	      if (res.result === 'success' && res.data) {
	        msg += '存在';
	      } else {
	        msg += '不存在';
	      }
	      modal.alert({
	        message: '标记点' + msg
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 160:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('navbar', {
	    attrs: {
	      "title": "多边形包含判断"
	    }
	  }), _c('weex-amap', {
	    ref: "map2017",
	    staticClass: ["map"],
	    attrs: {
	      "sdkKey": _vm.keys,
	      "zoom": _vm.zoom,
	      "center": _vm.pos
	    }
	  }, [_c('weex-amap-polygon', {
	    ref: "polygon2017",
	    attrs: {
	      "path": _vm.path,
	      "fillColor": "#2ecc71"
	    }
	  }), _c('weex-amap-marker', {
	    attrs: {
	      "position": _vm.marker.position,
	      "title": _vm.marker.title
	    }
	  }), _c('weex-amap-marker', {
	    attrs: {
	      "position": _vm.marker2.position,
	      "title": _vm.marker2.title
	    }
	  })], 1), _c('div', {
	    staticClass: ["map-control"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Method: polygonContainsMarker")]), _c('text', {
	    staticClass: ["tips"]
	  }, [_vm._v("判断多边形是不是包含某个点")]), _c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.test
	    }
	  }, [_c('text', {
	    staticClass: ["btn"]
	  }, [_vm._v("Test Marker1")])]), _c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.test2
	    }
	  }, [_c('text', {
	    staticClass: ["btn"]
	  }, [_vm._v("Test Marker2")])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });