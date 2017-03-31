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
	__vue_styles__.push(__webpack_require__(106)
	)

	/* script */
	__vue_exports__ = __webpack_require__(107)

	/* template */
	var __vue_template__ = __webpack_require__(110)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\views\\StoriesView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3254c01c"
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

/***/ 78:
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

	exports.default = {
	  props: ['url'],
	  methods: {
	    open: function open() {
	      // get the environment variables
	      var env = weex.config.env || WXEnvironment;

	      // open a new window (tab) on the web
	      if (env.platform === 'Web') {
	        window.open(this.url);
	        return;
	      }

	      // change router path on native (Android & iOS)
	      this.jump('/article/' + this.url);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    on: {
	      "click": _vm.open
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 80:
/***/ function(module, exports) {

	module.exports = {
	  "cell-item": {
	    "position": "relative",
	    "paddingTop": 20,
	    "paddingBottom": 25,
	    "paddingLeft": 100,
	    "paddingRight": 40
	  },
	  "story-score": {
	    "position": "absolute",
	    "width": 100,
	    "textAlign": "center",
	    "left": 0,
	    "top": 20,
	    "fontSize": 32,
	    "fontWeight": "bold",
	    "color": "#FF6600"
	  },
	  "story-link": {
	    "marginBottom": 25,
	    "width": 610
	  },
	  "story-title": {
	    "fontSize": 33,
	    "color": "#404040"
	  },
	  "small-text": {
	    "color": "#BBBBBB",
	    "fontSize": 22,
	    "marginBottom": 0,
	    "fontFamily": "Verdana, Geneva, sans-serif"
	  },
	  "link-text": {
	    "textDecoration": "underline"
	  },
	  "text-group": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "text-cell": {
	    "flexGrow": 0
	  }
	}

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _externalLink = __webpack_require__(82);

	var _externalLink2 = _interopRequireDefault(_externalLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { ExternalLink: _externalLink2.default },
	  props: {
	    story: {
	      type: Object,
	      required: true
	    },
	    'no-comment': {
	      type: [String, Boolean],
	      default: false
	    }
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(78)

	/* template */
	var __vue_template__ = __webpack_require__(79)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\components\\external-link.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 83:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell-item"]
	  }, [_c('text', {
	    staticClass: ["story-score"]
	  }, [_vm._v(_vm._s(_vm.story.score))]), _c('external-link', {
	    staticClass: ["story-link"],
	    attrs: {
	      "url": _vm.story.url
	    }
	  }, [_c('text', {
	    staticClass: ["story-title"]
	  }, [_vm._v(_vm._s(_vm.story.title))]), (_vm.story.url) ? _c('text', {
	    staticClass: ["small-text"]
	  }, [_vm._v("(" + _vm._s(_vm._f("host")(_vm.story.url)) + ")")]) : _vm._e()]), _c('div', {
	    staticClass: ["text-group"]
	  }, [_c('text', {
	    staticClass: ["small-text", "text-cell"]
	  }, [_vm._v("by ")]), _c('div', {
	    staticClass: ["text-cell"],
	    on: {
	      "click": function($event) {
	        _vm.jump(("/user/" + (_vm.story.by)))
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["small-text", "link-text"]
	  }, [_vm._v(_vm._s(_vm.story.by))])]), _c('text', {
	    staticClass: ["small-text", "text-cell"]
	  }, [_vm._v(" | " + _vm._s(_vm._f("timeAgo")(_vm.story.time)) + " ago")]), (!_vm.noComment) ? _c('text', {
	    staticClass: ["small-text", "text-cell"]
	  }, [_vm._v(" | ")]) : _vm._e(), (!_vm.noComment) ? _c('div', {
	    staticClass: ["text-cell"],
	    on: {
	      "click": function($event) {
	        _vm.jump(("/item/" + (_vm.story.id)))
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["small-text", "link-text"]
	  }, [_vm._v(_vm._s(_vm.story.descendants) + " comments")])]) : _vm._e()])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 106:
/***/ function(module, exports) {

	module.exports = {
	  "stories-view": {
	    "height": 100
	  },
	  "story-cell": {
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD",
	    "backgroundColor": "#FFFFFF"
	  },
	  "loading": {
	    "width": 750,
	    "height": 120,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-text": {
	    "textAlign": "center",
	    "fontSize": 40,
	    "color": "#BBBBBB"
	  }
	}

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _appHeader = __webpack_require__(108);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	var _story = __webpack_require__(109);

	var _story2 = _interopRequireDefault(_story);

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

	exports.default = {
	  components: { AppHeader: _appHeader2.default, Story: _story2.default },
	  props: {
	    type: {
	      type: String,
	      required: true,
	      default: 'top'
	    }
	  },
	  data: function data() {
	    return {
	      loading: true
	    };
	  },


	  computed: {
	    stories: function stories() {
	      return this.$store.getters.activeItems;
	    }
	  },

	  methods: {
	    fetchListData: function fetchListData() {
	      var _this = this;

	      this.loading = true;
	      this.$store.dispatch('FETCH_LIST_DATA', {
	        type: this.type
	      }).then(function () {
	        _this.loading = false;
	      });
	    },
	    loadMoreStories: function loadMoreStories() {
	      var _this2 = this;

	      this.loading = true;
	      this.$store.dispatch('LOAD_MORE_ITEMS').then(function () {
	        _this2.loading = false;
	      });
	    }
	  },

	  created: function created() {
	    this.fetchListData();
	  }
	};
	module.exports = exports['default'];

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

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(80)
	)

	/* script */
	__vue_exports__ = __webpack_require__(81)

	/* template */
	var __vue_template__ = __webpack_require__(83)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\components\\story.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5f6cdf0d"
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

/***/ 110:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["stories-view"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('app-header'), _c('list', {
	    staticClass: ["story-list"],
	    attrs: {
	      "loadmoreoffset": "50"
	    },
	    on: {
	      "loadmore": _vm.loadMoreStories
	    }
	  }, _vm._l((_vm.stories), function(story) {
	    return _c('cell', {
	      key: story.id,
	      staticClass: ["story-cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('story', {
	      attrs: {
	        "story": story
	      }
	    })], 1)
	  })), (_vm.loading) ? _c('div', {
	    staticClass: ["loading"]
	  }, [_c('text', {
	    staticClass: ["loading-text"]
	  }, [_vm._v("loading ...")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });