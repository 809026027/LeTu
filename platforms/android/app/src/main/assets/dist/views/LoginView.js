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
	__vue_styles__.push(__webpack_require__(129)
	)

	/* script */
	__vue_exports__ = __webpack_require__(130)

	/* template */
	var __vue_template__ = __webpack_require__(131)
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
	__vue_options__.__file = "C:\\Users\\songfeng\\WeekDemo1\\src\\views\\LoginView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1d4ee432"
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

/***/ 129:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "top": 0,
	    "left": 0,
	    "alignItems": "center"
	  },
	  "backgroundimage": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "zIndex": -1,
	    "width": 100,
	    "height": 100
	  },
	  "logo": {
	    "marginTop": 20,
	    "width": 200,
	    "height": 100
	  },
	  "dialog_container": {
	    "top": 200,
	    "width": 800,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "title-input": {
	    "placeholderColor": "#fff",
	    "color": "#ffffff",
	    "backgroundColor": "rgba(0,0,0,0)",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#ffffff",
	    "marginTop": 20,
	    "height": 80,
	    "width": 500
	  },
	  "bottom": {
	    "width": 500,
	    "justifyContent": "space-between",
	    "marginTop": 30,
	    "flexDirection": "row"
	  },
	  "cancel": {
	    "textAlign": "center",
	    "padding": 15,
	    "borderRadius": 10,
	    "backgroundColor": "#DCDCDC",
	    "width": 200
	  },
	  "ok": {
	    "textAlign": "center",
	    "padding": 15,
	    "borderRadius": 10,
	    "backgroundColor": "#DC143C",
	    "width": 200
	  },
	  "text": {
	    "color": "#FFFFFF",
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 130:
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
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            user: {
	                name: '',
	                password: ''
	            },
	            list: [],
	            imgH: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750,
	            imgW: 750
	        };
	    },

	    methods: {
	        sub: function sub() {
	            // get the environment variables
	            var env = weex.config.env || WXEnvironment;
	            var self = this;
	            // open a new window (tab) on the web
	            if (env.platform === 'Web') {
	                var result = self.$store.dispatch('ACTION_DO', { name: 'userLogin.do', data: this.user });

	                result.then(function (value) {
	                    //success
	                    if (value.code == '1') {
	                        self.list = value.data.list;
	                    }
	                }, function (value) {
	                    // failure
	                });
	                return;
	            } else {
	                var modal = weex.requireModule('modal');
	                modal.alert({
	                    message: '登录成功！',
	                    okTitle: '确定'
	                }, function (e) {
	                    // TODO after the alert is complete.
	                    //change router path on native (Android & iOS)
	                    self.jump('/my/baidu');
	                });
	            }
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('image', {
	    staticClass: ["backgroundimage"],
	    style: {
	      height: _vm.imgH,
	      width: _vm.imgW
	    },
	    attrs: {
	      "src": "img/login.jpg"
	    }
	  }), _c('div', {
	    staticClass: ["dialog_container"]
	  }, [_c('image', {
	    staticClass: ["logo"],
	    attrs: {
	      "src": "https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_9765489_1444961475324.jpg"
	    }
	  }), _c('input', {
	    staticClass: ["title-input"],
	    attrs: {
	      "type": "text",
	      "autofocus": "true",
	      "placeholder": "用户名",
	      "value": (_vm.user.name)
	    },
	    on: {
	      "input": function($event) {
	        _vm.user.name = $event.target.attr.value
	      }
	    }
	  }), _c('input', {
	    staticClass: ["title-input"],
	    attrs: {
	      "type": "password",
	      "placeholder": "密码",
	      "value": (_vm.user.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.user.password = $event.target.attr.value
	      }
	    }
	  }), _c('div', {
	    staticClass: ["bottom"]
	  }, [_c('div', {
	    staticClass: ["ok"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": function($event) {
	        _vm.sub();
	      }
	    }
	  }, [_vm._v("登录")])]), _c('text', {
	    staticClass: ["cancel"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/top')
	      }
	    }
	  }, [_vm._v("注册")])]), _vm._l((_vm.list), function(item) {
	    return _c('div', [_c('span', [_vm._v(_vm._s(item.name + "--" + item.password))])], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });