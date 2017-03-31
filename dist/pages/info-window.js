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
	__vue_styles__.push(__webpack_require__(151)
	)

	/* script */
	__vue_exports__ = __webpack_require__(152)

	/* template */
	var __vue_template__ = __webpack_require__(154)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\pages\\info-window.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ad66bb2e"
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

/***/ 91:
/***/ function(module, exports) {

	module.exports = {
	  "info-win": {
	    "width": 500,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderColor": "rgba(0,0,0,0.1)",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "rgba(0,0,0,0.25)"
	  },
	  "cover": {
	    "flex": 1,
	    "height": 180
	  },
	  "desc": {
	    "fontSize": 20,
	    "backgroundColor": "#ffffff",
	    "padding": 5
	  },
	  "address": {
	    "fontSize": 16,
	    "color": "#999999",
	    "backgroundColor": "#ffffff",
	    "padding": 5,
	    "paddingBottom": 10
	  }
	}

/***/ },

/***/ 92:
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

	exports.default = {
	    props: ['src', 'title', 'location']
	};
	module.exports = exports['default'];

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["info-win"]
	  }, [_c('image', {
	    staticClass: ["cover"],
	    attrs: {
	      "src": _vm.src
	    }
	  }), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
	    staticClass: ["address"]
	  }, [_vm._v(_vm._s(_vm.location))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

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

/***/ 151:
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
	    "minHeight": 800,
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
	  "btn-group": {
	    "flexDirection": "row"
	  },
	  "btn": {
	    "flex": 1,
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  },
	  "info-win": {
	    "width": 500,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderColor": "rgba(0,0,0,0.1)",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "rgba(0,0,0,0.25)"
	  }
	}

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navbar = __webpack_require__(146);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _infoWindow = __webpack_require__(153);

	var _infoWindow2 = _interopRequireDefault(_infoWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var Amap = null;
	try {
	  Amap = weex.requireModule('amap');
	} catch (err) {
	  console.log(err);
	}
	var modal = weex.requireModule('modal');
	exports.default = {
	  components: { Navbar: _navbar2.default, InfoWindow: _infoWindow2.default },
	  data: function data() {
	    return {
	      keys: {
	        h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	        ios: '',
	        android: 'db6a973159cb0c2639ad02c617a786ae'
	      },
	      pos: [116.397428, 39.90923],
	      zoom: 11,
	      marker: {
	        position: [116.379278, 39.865374],
	        title: 'Beijing South Railway Station',
	        icon: 'http://img1.vued.vanthink.cn/vuede8f1ae7b454267d75c31c6d46819b597.png'
	      },
	      marker2: {
	        position: [116.397389, 39.908742],
	        title: 'The Palace Museum',
	        icon: 'http://img1.vued.vanthink.cn/vuede8f1ae7b454267d75c31c6d46819b597.png'
	      },
	      palaceMuseum: {
	        position: [116.397389, 39.908742],
	        offset: [0, -80],
	        open: false
	      },
	      southStation: {
	        position: [116.379278, 39.865374],
	        offset: [0, -80],
	        open: true
	      }
	    };
	  },


	  methods: {
	    toggleSta: function toggleSta() {
	      this.southStation.open = !this.southStation.open;
	      // only one info window can be opened in the map
	      if (this.southStation.open && this.palaceMuseum.open) {
	        this.palaceMuseum.open = false;
	      }
	    },
	    toggleMus: function toggleMus() {
	      this.palaceMuseum.open = !this.palaceMuseum.open;
	      if (this.palaceMuseum.open && this.southStation.open) {
	        this.southStation.open = false;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(91)
	)

	/* script */
	__vue_exports__ = __webpack_require__(92)

	/* template */
	var __vue_template__ = __webpack_require__(93)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\include\\info-window.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-58b16e66"
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

/***/ 154:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('navbar', {
	    attrs: {
	      "title": "设置自定义信息窗体"
	    }
	  }), _c('weex-amap', {
	    staticClass: ["map"],
	    attrs: {
	      "id": "map2017",
	      "sdkKey": _vm.keys,
	      "zoom": _vm.zoom,
	      "center": _vm.pos
	    }
	  }, [_c('weex-amap-marker', {
	    staticStyle: {
	      zIndex: "1000"
	    },
	    attrs: {
	      "hideCallout": "true",
	      "position": _vm.marker.position,
	      "icon": _vm.marker.icon,
	      "title": _vm.marker.title
	    }
	  }), _c('weex-amap-marker', {
	    staticStyle: {
	      zIndex: "1000"
	    },
	    attrs: {
	      "hideCallout": "true",
	      "position": _vm.marker2.position,
	      "icon": _vm.marker.icon,
	      "title": _vm.marker2.title
	    }
	  }), _c('weex-amap-info-window', {
	    staticClass: ["info-win"],
	    attrs: {
	      "offset": _vm.palaceMuseum.offset,
	      "open": _vm.palaceMuseum.open,
	      "position": _vm.palaceMuseum.position
	    }
	  }, [_c('info-window', {
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued6dfd998fc0738f7e88d4b66bafc547ce.jpeg",
	      "title": "The Palace Museum",
	      "location": "4 Jingshan Front St, Dongcheng Qu, Beijing"
	    }
	  })], 1), _c('weex-amap-info-window', {
	    staticClass: ["info-win"],
	    attrs: {
	      "offset": _vm.southStation.offset,
	      "open": _vm.southStation.open,
	      "position": _vm.southStation.position
	    }
	  }, [_c('info-window', {
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued2de302ef72ae921313a1fa1bbbbd9455.jpeg",
	      "title": "Beijing South Railway Station",
	      "location": "Fengtai, Beijing"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["map-control"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Component: weex-amap-info-window")]), _c('text', {
	    staticClass: ["tips"]
	  }, [_vm._v("在地图上显示自定义窗体")]), _c('div', {
	    staticClass: ["btn-group"]
	  }, [_c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.toggleSta
	    }
	  }, [_c('text', {
	    staticClass: ["btn"],
	    attrs: {
	      "if": !_vm.southStation.open
	    }
	  }, [_vm._v("打开南站信息")]), _c('text', {
	    staticClass: ["btn"],
	    attrs: {
	      "if": _vm.southStation.open
	    }
	  }, [_vm._v("关闭南站信息")])]), _c('div', {
	    staticClass: ["btnbox"],
	    on: {
	      "click": _vm.toggleMus
	    }
	  }, [_c('text', {
	    staticClass: ["btn"],
	    attrs: {
	      "if": !_vm.palaceMuseum.open
	    }
	  }, [_vm._v("打开故宫信息")]), _c('text', {
	    staticClass: ["btn"],
	    attrs: {
	      "if": _vm.palaceMuseum.open
	    }
	  }, [_vm._v("关闭故宫信息")])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });