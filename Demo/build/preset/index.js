(function(){
    
    var createPageHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/preset/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/preset/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib?cwd=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo/babel.config.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/preset/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _default = {\n  \"private\": {\n    text: '欢迎打开详情页',\n    presetProperties: {}\n  },\n  onShow: function onShow() {},\n  onMenuPress: function onMenuPress() {\n    this.$app.$def.showMenu();\n  },\n  getPresetProperties: function getPresetProperties() {\n    console.log(22222);\n    this.presetProperties = this.$app.AnalysysAgent.getPresetProperties();\n  }\n};\nexports[\"default\"] = _default;\nvar moduleOwn = exports[\"default\"] || module.exports;\nvar accessors = ['public', 'protected', 'private'];\n\nif (moduleOwn.data && accessors.some(function (acc) {\n  return moduleOwn[acc];\n})) {\n  throw new Error('页面VM对象中的属性data不可与\"' + accessors.join(',') + '\"同时存在，请使用private替换data名称');\n} else if (!moduleOwn.data) {\n  moduleOwn.data = {};\n  moduleOwn._descriptor = {};\n  accessors.forEach(function (acc) {\n    var accType = _typeof(moduleOwn[acc]);\n\n    if (accType === 'object') {\n      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);\n\n      for (var name in moduleOwn[acc]) {\n        moduleOwn._descriptor[name] = {\n          access: acc\n        };\n      }\n    } else if (accType === 'function') {\n      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');\n    }\n  });\n}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPS9Vc2Vycy93YW5nbWluZ2ppYS9hbmFseXN5cy9vcGVuU291cmNlLVF1aWNrQXBwL3F1aWNrYXBwRGVtbyZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2JhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT0vVXNlcnMvd2FuZ21pbmdqaWEvYW5hbHlzeXMvb3BlblNvdXJjZS1RdWlja0FwcC9xdWlja2FwcERlbW8vYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2FjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9zcmMvcHJlc2V0L2luZGV4LnV4P3V4VHlwZT1wYWdlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1VzZXJzL3dhbmdtaW5namlhL2FuYWx5c3lzL29wZW5Tb3VyY2UtUXVpY2tBcHAvcXVpY2thcHBEZW1vL3NyYy9wcmVzZXQvaW5kZXgudXg/MzUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gdGVtcGxhdGXph4zlj6rog73mnInkuIDkuKrmoLnoioLngrkgLS0+XG4gIDxkaXYgY2xhc3M9XCJkZW1vLXBhZ2VcIj5cbiAgICAgPGlucHV0IGNsYXNzPVwiYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiZ2V0UHJlc2V0UHJvcGVydGllcyAtIFxi6I635Y+W6aKE5Yi25bGe5oCnXCIgb25jbGljaz1cImdldFByZXNldFByb3BlcnRpZXNcIiAvPlxuICAgIDx0ZXh0PumihOe9ruWxnuaAp+S4ujp7e0pTT04uc3RyaW5naWZ5KHByZXNldFByb3BlcnRpZXMsbnVsbCwyKX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICB0ZXh0OiAn5qyi6L+O5omT5byA6K+m5oOF6aG1JyxcbiAgICBwcmVzZXRQcm9wZXJ0aWVzOnt9XG4gIH0sXG4gIC8qKlxuICAgKiDlvZPnlKjmiLfngrnlh7voj5zljZXmjInpkq7ml7bop6blj5HvvIzosIPnlKhhcHDkuK3lrprkuYnnmoTmlrnms5VzaG93TWVudVxuICAgKiDms6jmhI/vvJrkvb/nlKjliqDovb3lmajmtYvor5Vg5Yib5bu65qGM6Z2i5b+r5o235pa55byPYOWKn+iDveaXtu+8jOivt+WFiOWcqGDns7vnu5/orr7nva5g5Lit5omT5byAYOW6lOeUqOWKoOi9veWZqGDnmoRg5qGM6Z2i5b+r5o235pa55byPYOadg+mZkFxuICAgKi9cbiAgb25TaG93KCl7XG4gIH0sXG4gIG9uTWVudVByZXNzKCkge1xuICAgIHRoaXMuJGFwcC4kZGVmLnNob3dNZW51KClcbiAgfSxcbiAgZ2V0UHJlc2V0UHJvcGVydGllcygpe1xuICAgIGNvbnNvbGUubG9nKDIyMjIyKVxuICAgIHRoaXMucHJlc2V0UHJvcGVydGllcyA9IHRoaXMuJGFwcC5BbmFseXN5c0FnZW50LmdldFByZXNldFByb3BlcnRpZXMoKVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuZGVtby1wYWdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIC5idG4ge1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBoZWlnaHQ6IDg2cHg7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOWJhMDc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/preset/index.ux?uxType=page\n");

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/preset/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/preset/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \".demo-page\": {\n    \"flexDirection\": \"column\",\n    \"justifyContent\": \"center\",\n    \"alignItems\": \"center\"\n  },\n  \".title\": {\n    \"fontSize\": \"40px\",\n    \"textAlign\": \"center\"\n  },\n  \".btn\": {\n    \"width\": \"550px\",\n    \"height\": \"86px\",\n    \"marginTop\": \"75px\",\n    \"borderRadius\": \"43px\",\n    \"backgroundColor\": \"#09ba07\",\n    \"fontSize\": \"30px\",\n    \"color\": \"#ffffff\"\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vc3JjL3ByZXNldC9pbmRleC51eD91eFR5cGU9cGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcmVzZXQvaW5kZXgudXg/Yzc0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZGVtby1wYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI1NTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODZweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNzVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzA5YmEwN1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/preset/index.ux?uxType=page\n");

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/preset/index.ux?uxType=page&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/preset/index.ux?uxType=page& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"type\": \"div\",\n  \"attr\": {},\n  \"classList\": [\n    \"demo-page\"\n  ],\n  \"children\": [\n    {\n      \"type\": \"input\",\n      \"attr\": {\n        \"type\": \"button\",\n        \"value\": \"getPresetProperties - \\b获取预制属性\"\n      },\n      \"classList\": [\n        \"btn\"\n      ],\n      \"events\": {\n        \"click\": \"getPresetProperties\"\n      }\n    },\n    {\n      \"type\": \"text\",\n      \"attr\": {\n        \"value\": function () {return '' + '预置属性为:' + (JSON.stringify(this.presetProperties,null,2))}\n      }\n    }\n  ]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9zcmMvcHJlc2V0L2luZGV4LnV4P3V4VHlwZT1wYWdlJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcmVzZXQvaW5kZXgudXg/YzNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiZGVtby1wYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZ2V0UHJlc2V0UHJvcGVydGllcyAtIFxcYuiOt+WPlumihOWItuWxnuaAp1wiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiZ2V0UHJlc2V0UHJvcGVydGllc1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAn6aKE572u5bGe5oCn5Li6OicgKyAoSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVzZXRQcm9wZXJ0aWVzLG51bGwsMikpfVxuICAgICAgfVxuICAgIH1cbiAgXVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/preset/index.ux?uxType=page&\n");

/***/ }),

/***/ "./src/preset/index.ux?uxType=page":
/*!*****************************************!*\
  !*** ./src/preset/index.ux?uxType=page ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar $app_style$ = __webpack_require__(/*! ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ \"../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/preset/index.ux?uxType=page\")\n\nvar $app_script$ = __webpack_require__(/*! ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib?cwd=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ \"../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/wangmingjia/analysys/openSource-QuickApp/quickappDemo/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/preset/index.ux?uxType=page\")\n\n$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {\n     $app_script$($app_module$, $app_exports$, $app_require$)\n         if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default\n        }\n     $app_module$.exports.template = __webpack_require__(/*! ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ \"../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/preset/index.ux?uxType=page&\")\n\n     $app_module$.exports.style = $app_style$\n})\n$app_bootstrap$('@app-component/index',{ packagerVersion: \"1.8.1-beta.1\" })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlc2V0L2luZGV4LnV4P3V4VHlwZT1wYWdlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldC9pbmRleC51eD9hMzc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9L1VzZXJzL3dhbmdtaW5namlhL2FuYWx5c3lzL29wZW5Tb3VyY2UtUXVpY2tBcHAvcXVpY2thcHBEZW1vJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPS9Vc2Vycy93YW5nbWluZ2ppYS9hbmFseXN5cy9vcGVuU291cmNlLVF1aWNrQXBwL3F1aWNrYXBwRGVtby9iYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZcIilcblxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/preset/index.ux?uxType=page\n");

/***/ })

/******/ });
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();