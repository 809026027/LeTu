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
	__vue_styles__.push(__webpack_require__(133)
	)

	/* script */
	__vue_exports__ = __webpack_require__(134)

	/* template */
	var __vue_template__ = __webpack_require__(136)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\views\\MapView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7443c225"
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

/***/ 84:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _exampleListItem = __webpack_require__(86);

	var _exampleListItem2 = _interopRequireDefault(_exampleListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ExampleListItem: _exampleListItem2.default },
	    props: ['items'],
	    data: function data() {
	        return {
	            root: ''
	        };
	    },
	    created: function created() {
	        var bundleUrl = weex.config.bundleUrl;
	        console.log(bundleUrl);
	        var host = '';
	        var path = '';
	        var dirs = this.root.split('/');
	        dirs.forEach(function (dir, index) {
	            if (!dir) dirs.splice(index, 1);
	        });
	        var root = dirs.length > 0 ? dirs[0] : '';
	        var subRoot = dirs.length > 1 ? dirs.slice(1).join('/') + '/' : '';

	        var nativeBase;
	        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            // fxied weexpack android assets
	            nativeBase = 'file://assets/dist';
	        } else if (isiOSAssets) {
	            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	            var matchFirstPath = /\/\/.+\/([^\/]+?)\//.exec(bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            if (matchFirstPath && matchFirstPath.length >= 2) {
	                path = matchFirstPath[1];
	            }
	            nativeBase = 'http://' + host + '/';
	        }
	        var h5Base = './index.html?page=';
	        // in Native
	        var base = nativeBase;
	        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	            // check if in weexpack project
	            if (path === 'web') {
	                base = h5Base + '/dist/';
	            } else {
	                base = h5Base;
	            }
	        } else {
	            base = nativeBase + path + '/';
	        }

	        for (var i in this.items) {
	            var item = this.items[i];
	            if (!item.url) {
	                item.url = base + item.name + '.js';
	                console.log(item.url);
	            }
	        }
	        // see log in Android Logcat
	        if (this.items.length) console.log('hit', this.items[0].url);
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(87)
	)

	/* script */
	__vue_exports__ = __webpack_require__(88)

	/* template */
	var __vue_template__ = __webpack_require__(89)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\include\\example-list-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9ab6aec6"
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

/***/ 87:
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "height": 460,
	    "margin": 40,
	    "marginTop": 20,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderBottomWidth": 2,
	    "borderColor": "rgba(0,0,0,0.2)"
	  },
	  "item-bannar": {
	    "height": 300,
	    "borderWidth": 10,
	    "borderColor": "#ffffff"
	  },
	  "item-desc": {
	    "flex": 1,
	    "flexDirection": "row",
	    "paddingTop": 15,
	    "fontSize": 36,
	    "color": "#555555",
	    "textAlign": "center"
	  },
	  "inner": {
	    "flex": 0.7,
	    "flexDirection": "column",
	    "paddingLeft": 10,
	    "alignItems": "flex-start"
	  },
	  "keyword": {
	    "fontSize": 40,
	    "color": "#1995f9"
	  },
	  "details": {
	    "fontSize": 24,
	    "color": "#333333"
	  },
	  "btn-wrap": {
	    "flex": 0.4,
	    "justifyContent": "center",
	    "alignSelf": "right"
	  },
	  "btn": {
	    "alignSelf": "center",
	    "marginLeft": 10,
	    "display": "inline-block",
	    "backgroundColor": "#1995f9",
	    "color": "#ffffff",
	    "padding": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderRadius": 30,
	    "fontSize": 24
	  }
	}

/***/ },

/***/ 88:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	  props: ['imgsrc', 'keyword', 'desc', 'url'],
	  methods: {
	    redirect: function redirect() {
	      navigator.push({
	        url: this.url
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item"],
	    on: {
	      "click": _vm.redirect
	    }
	  }, [_c('image', {
	    staticClass: ["item-bannar"],
	    attrs: {
	      "src": _vm.imgsrc
	    }
	  }), _c('div', {
	    staticClass: ["item-desc"]
	  }, [_c('div', {
	    staticClass: ["inner"]
	  }, [_c('text', {
	    staticClass: ["keyword"]
	  }, [_vm._v(_vm._s(_vm.keyword))]), _c('text', {
	    staticClass: ["details"]
	  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["btn-wrap"]
	  }, [_c('text', {
	    staticClass: ["btn"]
	  }, [_vm._v("查看详情")])])
	}]}
	module.exports.render._withStripped = true

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', _vm._l((_vm.items), function(item) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('example-list-item', {
	      attrs: {
	        "title": item.title,
	        "url": item.url,
	        "keyword": item.keyword,
	        "desc": item.desc,
	        "imgsrc": item.imgsrc
	      }
	    })], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 133:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#b5d6ea"
	  },
	  "bg": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "backgroundColor": "#b4d6eb"
	  },
	  "map-bg": {
	    "flex": 1,
	    "height": 1130
	  },
	  "title": {
	    "color": "#1995f9",
	    "fontSize": 38,
	    "padding": 20,
	    "alignItems": "center"
	  },
	  "logo-wrap": {
	    "display": "flex",
	    "alignItems": "center"
	  },
	  "logo": {
	    "width": 160,
	    "height": 160,
	    "marginTop": 40
	  },
	  "map": {
	    "height": 300,
	    "alignItems": "center"
	  }
	}

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _exampleList = __webpack_require__(135);

	var _exampleList2 = _interopRequireDefault(_exampleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ExampleList: _exampleList2.default },
	    data: function data() {
	        return {
	            root: '初始化',
	            items: [{
	                name: 'pages/info-window',
	                title: '信息窗体',
	                imgsrc: 'http://img1.vued.vanthink.cn/vuedd739d1f8d17c13e85ebc72a7063f3465.png',
	                keyword: 'InfoWindow',
	                desc: '在地图上显示自定义的信息窗体'
	            }, {
	                name: 'pages/circle',
	                title: '设置圆形',
	                imgsrc: 'http://img1.vued.vanthink.cn/vued2cd00418adaf48c2f0c678cac4c48d9b.png',
	                keyword: 'Circle',
	                desc: '在地图上显示圆形覆盖物'
	            }, {
	                name: 'pages/polyline',
	                title: '设置折线',
	                imgsrc: 'http://img1.vued.vanthink.cn/vued759efae4808fd98635461c4a7d6c520c.png',
	                keyword: 'Polyline',
	                desc: '在地图上显示折线'
	            }, {
	                name: 'pages/polygon',
	                title: '设置多边形',
	                imgsrc: 'http://img1.vued.vanthink.cn/vuededa66db12403e0ccbba4d25865cb8eab.png',
	                keyword: 'Polygon',
	                desc: '在地图上显示多边形'
	            }, {
	                name: 'pages/polygon-contains-marker',
	                title: '多边形判断',
	                imgsrc: 'http://img1.vued.vanthink.cn/vuede1b5292b15e88ff6cff05c2f89f11956.png',
	                keyword: 'Polygon Contains',
	                desc: '判断多边形是否包含某个点'
	            }, {
	                name: 'pages/get-distance',
	                title: '计算距离',
	                imgsrc: 'http://img1.vued.vanthink.cn/vuede1b5292b15e88ff6cff05c2f89f11956.png',
	                keyword: 'Distance',
	                desc: '计算两个标记点的距离'
	            }, {
	                name: 'pages/pressure-test',
	                title: '压力测试',
	                imgsrc: 'http://img1.vued.vanthink.cn/vued76db1e0e8f6ee379797ffd35561aa849.png',
	                keyword: 'test',
	                desc: '使用地图进行用户的定位'
	            }]
	        };
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(84)
	)

	/* script */
	__vue_exports__ = __webpack_require__(85)

	/* template */
	var __vue_template__ = __webpack_require__(90)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\include\\example-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ce08233"
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

/***/ 136:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_vm._m(0), _vm._m(1), _c('example-list', {
	    attrs: {
	      "items": _vm.items
	    }
	  })], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bg"]
	  }, [_c('image', {
	    staticClass: ["map-bg"],
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued606f6ce9ac598cf0c23e0653f4cd7d54.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["map"]
	  }, [_c('image', {
	    staticClass: ["logo"],
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vuedf325648b3361db3cf5fdfc55510167f3.png"
	    }
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("WEEX-AMAP DEMOS")])])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });