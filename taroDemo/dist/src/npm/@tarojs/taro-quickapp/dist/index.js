'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var taro = require("../../taro/index.js");
var fetch = _interopDefault(require('@system.fetch'));
var quickRequest = _interopDefault(require('@system.request'));
var storage = _interopDefault(require('@system.storage'));
var router = _interopDefault(require('@system.router'));
var prompt = _interopDefault(require('@system.prompt'));
var barcode = _interopDefault(require('@system.barcode'));
var vibrator = _interopDefault(require('@system.vibrator'));
var clipboard = _interopDefault(require('@system.clipboard'));
var sensor = _interopDefault(require('@system.sensor'));
var geolocation = _interopDefault(require('@system.geolocation'));
var share = _interopDefault(require('@system.share'));
var notification = _interopDefault(require('@system.notification'));
var device$1 = _interopDefault(require('@system.device'));
var webview = _interopDefault(require('@system.webview'));
var audio = _interopDefault(require('@system.audio'));
var record = _interopDefault(require('@system.record'));
var contact = _interopDefault(require('@system.contact'));
var sms = _interopDefault(require('@system.sms'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/* eslint-disable */
var objectIs = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap = /*#__PURE__*/function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    this.cache = [];
    this.size = 0;
  }

  _createClass(SimpleMap, [{
    key: "set",
    value: function set(k, v) {
      var len = this.cache.length;

      if (!len) {
        this.cache.push({
          k: k,
          v: v
        });
        this.size += 1;
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          item.v = v;
          return;
        }
      }

      this.cache.push({
        k: k,
        v: v
      });
      this.size += 1;
    }
  }, {
    key: "get",
    value: function get(k) {
      var len = this.cache.length;

      if (!len) {
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return item.v;
        }
      }
    }
  }, {
    key: "has",
    value: function has(k) {
      var len = this.cache.length;

      if (!len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      var len = this.cache.length;

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          this.cache.splice(i, 1);
          this.size -= 1;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      var len = this.cache.length;
      this.size = 0;

      if (!len) {
        return;
      }

      while (len) {
        this.cache.pop();
        len--;
      }
    }
  }]);

  return SimpleMap;
}();

var nextTick = function nextTick(fn) {
  var _fn;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn = typeof fn === 'function' ? (_fn = fn).bind.apply(_fn, [null].concat(args)) : fn;
  var timerFunc = setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;

function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};

var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};

var isElement = function isElement(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};

var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};

var isFragment = function isFragment(a) {
  return z(a) === e;
};

var isLazy = function isLazy(a) {
  return z(a) === t;
};

var isMemo = function isMemo(a) {
  return z(a) === r;
};

var isPortal = function isPortal(a) {
  return z(a) === d;
};

var isProfiler = function isProfiler(a) {
  return z(a) === g;
};

var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};

var isSuspense = function isSuspense(a) {
  return z(a) === p;
};

var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
  {
    (function () {
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */

checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

{
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || { Function: Function, Boolean: Boolean, Object: Object, Number: Number, Array: Array, Date: Date, String: String, Symbol: Symbol, Error: Error, TypeError: TypeError, Map: Map, Set: Set, WeakMap: WeakMap, WeakSet: WeakSet, ArrayBuffer: ArrayBuffer, Math: Math, Promise: Promise, RegExp: RegExp, DataView: DataView, isFinite: isFinite, parseInt: parseInt, parseFloat: parseFloat, Float32Array: Float32Array, Float64Array: Float64Array, Int8Array: Int8Array, Int16Array: Int16Array, Int32Array: Int32Array, Uint8Array: Uint8Array, Uint16Array: Uint16Array, Uint32Array: Uint32Array, Uint8ClampedArray: Uint8ClampedArray, setTimeout: setTimeout, clearTimeout: clearTimeout, setInterval: setInterval, clearInterval: clearInterval };
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */

var INFINITY = Infinity;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */

function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
    rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */

function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = "\\ud800-\\udfff",
    rsComboMarksRange$1 = "\\u0300-\\u036f",
    reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$1 = "\\u20d0-\\u20ff",
    rsComboRange$1 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
    rsVarRange$1 = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsAstral = "[\\ud800-\\udfff]",
    rsCombo = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])",
    rsNonAstral = "[^\\ud800-\\udfff]",
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ$1 = "\\u200d";
/** Used to compose unicode regexes. */

var reOptMod = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    rsOptVar = "[\\ufe0e\\ufe0f]?",
    rsOptJoin = "(?:\\u200d(?:" + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" + rsOptJoin,
    rsSymbol = '(?:' + ["[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?", rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

var reUnicode = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + rsSymbol + rsSeq, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function stringToArray(string) {
  return _hasUnicode(string) ? _unicodeToArray(string) : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */

function createCaseFirst(methodName) {
  return function (string) {
    string = toString_1(string);
    var strSymbols = _hasUnicode(string) ? _stringToArray(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? _castSlice(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */

var upperFirst = _createCaseFirst('toUpperCase');
var upperFirst_1 = upperFirst;

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */

function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */

var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',
  '\xc1': 'A',
  '\xc2': 'A',
  '\xc3': 'A',
  '\xc4': 'A',
  '\xc5': 'A',
  '\xe0': 'a',
  '\xe1': 'a',
  '\xe2': 'a',
  '\xe3': 'a',
  '\xe4': 'a',
  '\xe5': 'a',
  '\xc7': 'C',
  '\xe7': 'c',
  '\xd0': 'D',
  '\xf0': 'd',
  '\xc8': 'E',
  '\xc9': 'E',
  '\xca': 'E',
  '\xcb': 'E',
  '\xe8': 'e',
  '\xe9': 'e',
  '\xea': 'e',
  '\xeb': 'e',
  '\xcc': 'I',
  '\xcd': 'I',
  '\xce': 'I',
  '\xcf': 'I',
  '\xec': 'i',
  '\xed': 'i',
  '\xee': 'i',
  '\xef': 'i',
  '\xd1': 'N',
  '\xf1': 'n',
  '\xd2': 'O',
  '\xd3': 'O',
  '\xd4': 'O',
  '\xd5': 'O',
  '\xd6': 'O',
  '\xd8': 'O',
  '\xf2': 'o',
  '\xf3': 'o',
  '\xf4': 'o',
  '\xf5': 'o',
  '\xf6': 'o',
  '\xf8': 'o',
  '\xd9': 'U',
  '\xda': 'U',
  '\xdb': 'U',
  '\xdc': 'U',
  '\xf9': 'u',
  '\xfa': 'u',
  '\xfb': 'u',
  '\xfc': 'u',
  '\xdd': 'Y',
  '\xfd': 'y',
  '\xff': 'y',
  '\xc6': 'Ae',
  '\xe6': 'ae',
  '\xde': 'Th',
  '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  "\u0100": 'A',
  "\u0102": 'A',
  "\u0104": 'A',
  "\u0101": 'a',
  "\u0103": 'a',
  "\u0105": 'a',
  "\u0106": 'C',
  "\u0108": 'C',
  "\u010A": 'C',
  "\u010C": 'C',
  "\u0107": 'c',
  "\u0109": 'c',
  "\u010B": 'c',
  "\u010D": 'c',
  "\u010E": 'D',
  "\u0110": 'D',
  "\u010F": 'd',
  "\u0111": 'd',
  "\u0112": 'E',
  "\u0114": 'E',
  "\u0116": 'E',
  "\u0118": 'E',
  "\u011A": 'E',
  "\u0113": 'e',
  "\u0115": 'e',
  "\u0117": 'e',
  "\u0119": 'e',
  "\u011B": 'e',
  "\u011C": 'G',
  "\u011E": 'G',
  "\u0120": 'G',
  "\u0122": 'G',
  "\u011D": 'g',
  "\u011F": 'g',
  "\u0121": 'g',
  "\u0123": 'g',
  "\u0124": 'H',
  "\u0126": 'H',
  "\u0125": 'h',
  "\u0127": 'h',
  "\u0128": 'I',
  "\u012A": 'I',
  "\u012C": 'I',
  "\u012E": 'I',
  "\u0130": 'I',
  "\u0129": 'i',
  "\u012B": 'i',
  "\u012D": 'i',
  "\u012F": 'i',
  "\u0131": 'i',
  "\u0134": 'J',
  "\u0135": 'j',
  "\u0136": 'K',
  "\u0137": 'k',
  "\u0138": 'k',
  "\u0139": 'L',
  "\u013B": 'L',
  "\u013D": 'L',
  "\u013F": 'L',
  "\u0141": 'L',
  "\u013A": 'l',
  "\u013C": 'l',
  "\u013E": 'l',
  "\u0140": 'l',
  "\u0142": 'l',
  "\u0143": 'N',
  "\u0145": 'N',
  "\u0147": 'N',
  "\u014A": 'N',
  "\u0144": 'n',
  "\u0146": 'n',
  "\u0148": 'n',
  "\u014B": 'n',
  "\u014C": 'O',
  "\u014E": 'O',
  "\u0150": 'O',
  "\u014D": 'o',
  "\u014F": 'o',
  "\u0151": 'o',
  "\u0154": 'R',
  "\u0156": 'R',
  "\u0158": 'R',
  "\u0155": 'r',
  "\u0157": 'r',
  "\u0159": 'r',
  "\u015A": 'S',
  "\u015C": 'S',
  "\u015E": 'S',
  "\u0160": 'S',
  "\u015B": 's',
  "\u015D": 's',
  "\u015F": 's',
  "\u0161": 's',
  "\u0162": 'T',
  "\u0164": 'T',
  "\u0166": 'T',
  "\u0163": 't',
  "\u0165": 't',
  "\u0167": 't',
  "\u0168": 'U',
  "\u016A": 'U',
  "\u016C": 'U',
  "\u016E": 'U',
  "\u0170": 'U',
  "\u0172": 'U',
  "\u0169": 'u',
  "\u016B": 'u',
  "\u016D": 'u',
  "\u016F": 'u',
  "\u0171": 'u',
  "\u0173": 'u',
  "\u0174": 'W',
  "\u0175": 'w',
  "\u0176": 'Y',
  "\u0177": 'y',
  "\u0178": 'Y',
  "\u0179": 'Z',
  "\u017B": 'Z',
  "\u017D": 'Z',
  "\u017A": 'z',
  "\u017C": 'z',
  "\u017E": 'z',
  "\u0132": 'IJ',
  "\u0133": 'ij',
  "\u0152": 'Oe',
  "\u0153": 'oe',
  "\u0149": "'n",
  "\u017F": 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */

var deburrLetter = _basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter;

/** Used to match Latin Unicode letters (excluding mathematical operators). */

var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */

var rsComboMarksRange$2 = "\\u0300-\\u036f",
    reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$2 = "\\u20d0-\\u20ff",
    rsComboRange$2 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
/** Used to compose unicode capture groups. */

var rsCombo$1 = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */

var reComboMark = RegExp(rsCombo$1, 'g');
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */

function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */

function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = "\\ud800-\\udfff",
    rsComboMarksRange$3 = "\\u0300-\\u036f",
    reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$3 = "\\u20d0-\\u20ff",
    rsComboRange$3 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
    rsDingbatRange = "\\u2700-\\u27bf",
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = "\\u2000-\\u206f",
    rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange$2 = "\\ufe0e\\ufe0f",
    rsBreakRange = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
/** Used to compose unicode capture groups. */

var rsApos = "['\u2019]",
    rsBreak = "[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]",
    rsCombo$2 = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    rsDigits = '\\d+',
    rsDingbat = "[\\u2700-\\u27bf]",
    rsLower = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
    rsMisc = "[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
    rsFitz$1 = "\\ud83c[\\udffb-\\udfff]",
    rsModifier$1 = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])",
    rsNonAstral$1 = "[^\\ud800-\\udfff]",
    rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsUpper = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
    rsZWJ$2 = "\\u200d";
/** Used to compose unicode regexes. */

var rsMiscLower = "(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])",
    rsMiscUpper = "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])",
    rsOptContrLower = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
    rsOptContrUpper = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
    reOptMod$1 = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    rsOptVar$1 = "[\\ufe0e\\ufe0f]?",
    rsOptJoin$1 = "(?:\\u200d(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq$1 = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" + rsOptJoin$1,
    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;
/** Used to match complex or compound words. */

var reUnicodeWord = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=" + [rsBreak, rsUpper, '$'].join('|') + ')', "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=" + [rsBreak, "[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])", '$'].join('|') + ')', "[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?", "[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */

function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }

  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */

var rsApos$1 = "['\u2019]";
/** Used to match apostrophes. */

var reApos = RegExp(rsApos$1, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */

function createCompounder(callback) {
  return function (string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */

var camelCase = _createCompounder(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize_1(word) : word);
});
var camelCase_1 = camelCase;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function addLeadingSlash$1(str) {
  return str[0] === '/' ? str : "/".concat(str);
}
function isEmptyObject(obj) {
  if (!obj || !isPlainObject_1(obj)) {
    return false;
  }

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false;
    }
  }

  return true;
}
function isUndefined(o) {
  return o === undefined;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isArray$1(arg) {
  return Array.isArray(arg);
}
function shakeFnFromObject(obj) {
  var newObj;

  if (isArray$1(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(shakeFnFromObject(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      if (isFunction(obj[key])) {
        continue;
      }

      var ret = shakeFnFromObject(obj[key]);
      newObj[key] = ret;
    }
  } else {
    return obj;
  }

  return newObj;
}

var _loadTime = new Date().getTime().toString();

var _i = 1;
function getUniqueKey() {
  return _loadTime + _i++;
}
var id$1 = 0;

function genId() {
  return String(id$1++);
}

var compIdsMapper;

try {
  compIdsMapper = new Map();
} catch (error) {
  compIdsMapper = new SimpleMap();
}

function genCompid(key, isNeedCreate) {
  if (!taro.Current || !taro.Current.current || !taro.Current.current.$scope) return [];
  var prevId = compIdsMapper.get(key);

  if (isNeedCreate) {
    var _id = genId();

    compIdsMapper.set(key, _id);
    return [prevId, _id];
  } else {
    var _id2 = prevId || genId();

    !prevId && compIdsMapper.set(key, _id2);
    return [null, _id2];
  }
}
var prefix = 0;
function genCompPrefix() {
  return String(prefix++);
}

var appGlobal = global || {};
var globalRef = Object.getPrototypeOf(appGlobal) || appGlobal;

globalRef.cacheData = globalRef.cacheData || {};
function cacheDataSet(key, val) {
  globalRef.cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = globalRef.cacheData[key];
  delelteAfterGet && delete globalRef.cacheData[key];
  return temp;
}
function cacheDataHas(key) {
  return key in globalRef.cacheData;
}

var Manager = /*#__PURE__*/function () {
  function Manager() {
    _classCallCheck(this, Manager);

    _defineProperty(this, "map", {});

    _defineProperty(this, "observers", {});
  }

  _createClass(Manager, [{
    key: "set",
    value: function set() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var compid = arguments.length > 1 ? arguments[1] : undefined;
      var previd = arguments.length > 2 ? arguments[2] : undefined;
      if (!compid) return;

      if (previd) {
        this.observers[compid] = this.observers[previd];
        this["delete"](previd);
      }

      var observers = this.observers;

      if (!this.map[compid]) {
        Object.defineProperty(this.map, compid, {
          configurable: true,
          get: function get() {
            return this["__".concat(compid)];
          },
          set: function set(props) {
            this["__".concat(compid)] = props;
            var component = observers[compid] && observers[compid].component;
            var ComponentClass = observers[compid] && observers[compid].ComponentClass;
            if (!component || !ComponentClass || !component.__isReady) return;
            var nextProps = filterProps(ComponentClass.defaultProps, props, component.props);
            component.props = nextProps;
            nextTick(function () {
              component._unsafeCallUpdate = true;
              updateComponent(component);
              component._unsafeCallUpdate = false;
            });
          }
        });
      }

      this.map[compid] = props;
    }
  }, {
    key: "delete",
    value: function _delete(compid) {
      delete this.map[compid];
      delete this.map["__".concat(compid)];
      delete this.observers[compid];
    }
  }]);

  return Manager;
}();

var propsManager = new Manager();

var anonymousFnNamePreffix = 'funPrivate';
var routerParamsPrivateKey = '__key_';
var preloadPrivateKey = 'quick$PriPreload';
var PRELOAD_DATA_KEY = 'preload';
var COMP_ID = 'compid';
var preloadInitedComponent = 'quick$PriPreloadComponent';
var pageExtraFns = ['onBackPress', 'onMenuPress', 'onRefresh'];

function bindProperties(componentConf, ComponentClass, isPage) {
  componentConf.properties = ComponentClass.properties || {};
  var defaultProps = ComponentClass.defaultProps || {};

  for (var key in defaultProps) {
    if (defaultProps.hasOwnProperty(key)) {
      componentConf.properties[key] = {
        type: null,
        value: defaultProps[key]
      };
    }
  }

  if (isPage) {
    componentConf.properties[routerParamsPrivateKey] = {
      type: null,
      value: null
    };
    componentConf.properties[preloadPrivateKey] = {
      type: null,
      value: null
    };
    var defaultParams = ComponentClass.defaultParams || {};

    for (var _key in defaultParams) {
      if (defaultParams.hasOwnProperty(_key)) {
        componentConf.properties[_key] = {
          type: null,
          value: null
        };
      }
    }
  }

  componentConf.props = [];
  Object.keys(componentConf.properties).forEach(function (item) {
    componentConf.props.push(item.toLocaleLowerCase());
  });
  componentConf.props.push(COMP_ID);

  componentConf.onCompidChange = function () {
    initComponent.apply(this, [ComponentClass, isPage]);
  };
}

function filterProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsFromPropsManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var curAllProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var extraProps = arguments.length > 3 ? arguments[3] : undefined;
  var newProps = Object.assign({}, curAllProps, propsFromPropsManager);

  if (!isEmptyObject(defaultProps)) {
    for (var propName in defaultProps) {
      if (newProps[propName] === undefined) {
        newProps[propName] = defaultProps[propName];
      }
    }
  }

  if (extraProps) {
    newProps = Object.assign({}, newProps, extraProps);
  }

  Object.keys(newProps).forEach(function (propName) {
    var camelizePropName = camelCase_1(propName);

    if (camelizePropName !== propName) {
      Object.defineProperty(newProps, camelizePropName, {
        get: function get() {
          return newProps[propName];
        }
      });
    }
  });
  return newProps;
}

function processEvent(eventHandlerName, obj) {
  if (obj[eventHandlerName]) return;

  obj[eventHandlerName] = function (event) {
    if (event) {
      var _currentTarget = event.currentTarget;
      var target = event.target;
      Object.defineProperties(event, {
        target: {
          configurable: true,
          get: function get() {
            return Object.assign(target || {}, event.detail);
          }
        },
        currentTarget: {
          configurable: true,
          get: function get() {
            return Object.assign(_currentTarget || target || {}, event.detail);
          }
        },
        stopPropagation: {
          value: function value() {}
        },
        preventDefault: {
          value: function value() {}
        }
      });
    }

    var scope = this.$component;
    var callScope = scope;
    var isAnonymousFn = eventHandlerName.indexOf(anonymousFnNamePreffix) > -1;
    var realArgs = [];
    var detailArgs = [];
    var datasetArgs = [];
    var isScopeBinded = false; // 解析从dataset中传过来的参数

    var dataset = {};
    var currentTarget = event.currentTarget;
    var vm = currentTarget._vm || (currentTarget._target ? currentTarget._target._vm : null);
    var attr = vm ? vm._externalBinding.template.attr : currentTarget._attr || currentTarget.attr;

    if (attr) {
      Object.keys(attr).forEach(function (key) {
        if (/^data/.test(key)) {
          var item = attr[key];
          dataset[key.replace(/^data/, '')] = typeof item === 'function' ? item() : item;
        }
      });
    }

    var bindArgs = {};
    var eventType = "on".concat(event.type).toLocaleLowerCase();
    if (event.detail && event.detail.__detail) Object.assign(dataset, event.detail.__detail);
    Object.keys(dataset).forEach(function (key) {
      var keyLower = key.toLocaleLowerCase();

      if (/^e/.test(keyLower)) {
        // 小程序属性里中划线后跟一个下划线会解析成不同的结果
        keyLower = keyLower.replace(/^e/, '');

        if (keyLower.indexOf(eventType) >= 0) {
          var argName = keyLower.replace(eventType, '');

          if (/^(a[a-z]|so)$/.test(argName)) {
            bindArgs[argName] = dataset[key];
          }
        }
      }
    }); // 如果是通过triggerEvent触发,并且带有参数

    if (event.detail && event.detail.__arguments && event.detail.__arguments.length > 0) {
      detailArgs = event.detail.__arguments;
    } // 普通的事件（非匿名函数），会直接call


    if (!isAnonymousFn) {
      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          callScope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    } else {
      // 匿名函数，会将scope作为第一个参数
      var _scope = null;

      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          _scope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [_scope].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    }

    return scope[eventHandlerName].apply(callScope, realArgs);
  };
}

function bindEvents(componentConf, events) {
  events.forEach(function (name) {
    processEvent(name, componentConf);
  });
}

function bindStaticFns(componentConf, ComponentClass) {
  for (var key in ComponentClass) {
    typeof ComponentClass[key] === 'function' && (componentConf[key] = ComponentClass[key]);
  } // 低版本 IOS 下部分属性不能直接访问


  Object.getOwnPropertyNames(ComponentClass).forEach(function (key) {
    var excludes = ['arguments', 'caller', 'length', 'name', 'prototype'];

    if (excludes.indexOf(key) < 0) {
      typeof ComponentClass[key] === 'function' && (componentConf[key] = ComponentClass[key]);
    }
  });
}

function getPageUrlParams(url) {
  var taroRouterParamsCache = globalRef.taroRouterParamsCache;
  var params = {};

  if (taroRouterParamsCache && url) {
    url = addLeadingSlash$1(url);
    params = taroRouterParamsCache[url] || {};
    delete taroRouterParamsCache[url];
  }

  return params;
}

var hasPageInited = false;

function initComponent(ComponentClass, isPage) {
  if (!this.$component || this.$component.__isReady) return;
  this.$component.__isReady = true;

  if (isPage && !hasPageInited) {
    hasPageInited = true;
  }

  if (hasPageInited && !isPage) {
    var compid = this.compid;

    if (compid) {
      propsManager.observers[compid] = {
        component: this.$component,
        ComponentClass: ComponentClass
      };
    }

    var nextProps = filterProps(ComponentClass.defaultProps, propsManager.map[compid], this.$component.props);
    this.$component.props = nextProps;
  }

  if (hasPageInited || isPage) {
    mountComponent(this.$component);
  }
}

function componentTrigger(component, key, args) {
  args = args || [];

  if (key === 'componentDidMount') {
    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }
  }

  if (key === 'componentWillUnmount') {
    var compid = component.$scope.compid;
    if (compid) propsManager["delete"](compid);
  }

  component[key] && typeof component[key] === 'function' && component[key].apply(component, _toConsumableArray(args));

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }

  if (key === 'componentWillUnmount') {
    component._dirty = true;
    component._disable = true;
    component.$router = {
      params: {},
      path: ''
    };
    component._pendingStates = [];
    component._pendingCallbacks = [];
  }
}
function createComponent(ComponentClass, isPage) {
  var initData = {};
  var componentProps = filterProps(ComponentClass.defaultProps);
  var componentInstance = new ComponentClass(componentProps);
  componentInstance._constructor && componentInstance._constructor(componentProps);

  try {
    taro.Current.current = componentInstance;
    taro.Current.index = 0;
    componentInstance.state = componentInstance._createData() || componentInstance.state;
  } catch (err) {
    if (isPage) {
      console.warn("[Taro warn] \u8BF7\u7ED9\u9875\u9762\u63D0\u4F9B\u521D\u59CB `state` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01");
    } else {
      console.warn("[Taro warn] \u8BF7\u7ED9\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A `defaultProps` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01");
    }

    console.warn(err);
  }

  initData = Object.assign({}, initData, componentInstance.props, componentInstance.state);
  var componentConf = {
    data: initData,
    onInit: function onInit() {
      isPage && (hasPageInited = false);

      if (isPage && cacheDataHas(preloadInitedComponent)) {
        this.$component = cacheDataGet(preloadInitedComponent, true);
      } else {
        this.$component = new ComponentClass({}, isPage);
      }

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      this.$component.__propTypes = ComponentClass.propTypes;

      if (isPage) {
        this.$component.$componentType = 'PAGE';

        if (cacheDataHas(PRELOAD_DATA_KEY)) {
          var data = cacheDataGet(PRELOAD_DATA_KEY, true);
          this.$component.$router.preload = data;
        }

        var options = getPageUrlParams(isPage);
        Object.assign(this.$component.$router.params, options);
        this.$app.pageInstaceMap = this.$app.pageInstaceMap || {};
        this.$app.pageInstaceMap[isPage] = this.$component;

        if (cacheDataHas(options[preloadPrivateKey])) {
          this.$component.$preloadData = cacheDataGet(options[preloadPrivateKey], true);
        } else {
          this.$component.$preloadData = {};
        } // this.$component.$router.path = getCurrentPageUrl()


        initComponent.apply(this, [ComponentClass, isPage]);
      } // 监听数据变化


      this.$watch(COMP_ID, 'onCompidChange');
    },
    onReady: function onReady() {
      if (!isPage) {
        initComponent.apply(this, [ComponentClass, isPage]);
      }

      var component = this.$component;

      if (!component.__mounted) {
        component.__mounted = true;
        componentTrigger(component, 'componentDidMount');
      }
    },
    onDestroy: function onDestroy() {
      componentTrigger(this.$component, 'componentWillUnmount');
      var component = this.$component;
      component.hooks.forEach(function (hook) {
        if (isFunction(hook.cleanup)) {
          hook.cleanup();
        }
      });
      var events = component.$$renderPropsEvents;

      if (isArray$1(events)) {
        events.forEach(function (e) {
          return taro.eventCenter.off(e);
        });
      }
    }
  };

  if (isPage) {
    componentConf['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    componentConf['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        componentConf[fn] = function () {
          var component = this.$component;

          if (component[fn] && typeof component[fn] === 'function') {
            return component[fn].apply(component, arguments);
          }
        };
      }
    });
    globalRef.componentPath = isPage;
    addLeadingSlash$1(isPage) && cacheDataSet(addLeadingSlash$1(isPage), ComponentClass);
  }

  bindStaticFns(componentConf, ComponentClass);
  bindProperties(componentConf, ComponentClass, isPage);
  ComponentClass['privateTaroEvent'] && bindEvents(componentConf, ComponentClass['privateTaroEvent']);
  return componentConf;
}

var isDEV = typeof process === 'undefined' || !process.env || true;

function hasNewLifecycle(component) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps,
      getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  return isFunction(getDerivedStateFromProps) || isFunction(getSnapshotBeforeUpdate);
}

function callGetDerivedStateFromProps(component, props, state) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps;
  var newState;

  if (isFunction(getDerivedStateFromProps)) {
    var partialState = getDerivedStateFromProps(props, state);

    if (!isUndefined(partialState)) {
      newState = Object.assign({}, state, partialState);
    } else {
      console.warn('getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。');
    }
  }

  return newState;
}

function callGetSnapshotBeforeUpdate(component, props, state) {
  var getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  var snapshot;

  if (isFunction(getSnapshotBeforeUpdate)) {
    snapshot = getSnapshotBeforeUpdate.call(component, props, state);
  }

  return snapshot;
}

function mountComponent(component) {
  var props = component.props; // 在willMount前执行构造函数的副本

  if (!component.__componentWillMountTriggered) {
    component._constructor && component._constructor(props);
  }

  var newState = callGetDerivedStateFromProps(component, props, component.state);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  component._dirty = false;
  component._disable = false;
  component._isForceUpdate = false;

  if (!component.__componentWillMountTriggered) {
    component.__componentWillMountTriggered = true;

    if (!hasNewLifecycle(component)) {
      componentTrigger(component, 'componentWillMount');
    }
  }

  doUpdate(component, props, component.state);
  component.prevProps = component.props;
  component.prevState = component.state;
}
function updateComponent(component) {
  var props = component.props,
      __propTypes = component.__propTypes;

  if (isDEV && __propTypes) {
    var componentName = component.constructor.name;

    if (isUndefined(componentName)) {
      var names = component.constructor.toString().match(/^function\s*([^\s(]+)/);
      componentName = isArray$1(names) ? names[0] : 'Component';
    }

    propTypes.checkPropTypes(__propTypes, props, 'prop', componentName);
  }

  var prevProps = component.prevProps || props;
  component.props = prevProps;

  if (component.__mounted && component._unsafeCallUpdate === true && !hasNewLifecycle(component) && component.componentWillReceiveProps) {
    component._disable = true;
    component.componentWillReceiveProps(props);
    component._disable = false;
  } // 在willMount前执行构造函数的副本


  var state = component.getState();
  var prevState = component.prevState || state;
  var stateFromProps = callGetDerivedStateFromProps(component, props, state);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  var skip = false;

  if (component.__mounted) {
    if (isFunction(component.shouldComponentUpdate) && !component._isForceUpdate && component.shouldComponentUpdate(props, state) === false) {
      skip = true;
    } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
      component.componentWillUpdate(props, state);
    }
  }

  component.props = props;
  component.state = state;
  component._dirty = false;
  component._isForceUpdate = false;

  if (!skip) {
    doUpdate(component, prevProps, prevState);
  }

  component.prevProps = component.props;
  component.prevState = component.state;
}

function injectContextType(component) {
  var ctxType = component.constructor.contextType;

  if (ctxType) {
    var context = ctxType.context;
    var emitter = context.emitter;

    if (emitter === null) {
      component.context = context._defaultValue;
      return;
    }

    if (!component._hasContext) {
      component._hasContext = true;
      emitter.on(function (_) {
        return enqueueRender(component);
      });
    }

    component.context = emitter.value;
  }
}

function doUpdate(component, prevProps, prevState) {
  var state = component.state,
      _component$props = component.props,
      props = _component$props === undefined ? {} : _component$props;
  var data = state || {};

  if (component._createData) {
    // 返回null或undefined则保持不变
    if (component.__isReady) {
      injectContextType(component);
      taro.Current.current = component;
      taro.Current.index = 0;
      taro.invokeEffects(component, true);
    }

    data = component._createData(state, props) || data;

    if (component.__isReady) {
      taro.Current.current = null;
    }
  }

  data = Object.assign({}, props, data);

  if (component.$usedState && component.$usedState.length) {
    var _data = {};
    component.$usedState.forEach(function (key) {
      var val = taro.internal_safe_get(data, key);

      if (typeof val === 'undefined') {
        return;
      }

      if (_typeof(val) === 'object') {
        if (isEmptyObject(val)) return taro.internal_safe_set(_data, key, val);
        val = shakeFnFromObject(val); // 避免筛选完 Fn 后产生了空对象还去渲染

        if (!isEmptyObject(val)) taro.internal_safe_set(_data, key, val);
      } else {
        taro.internal_safe_set(_data, key, val);
      }
    });
    data = _data;
  }

  data['priTaroCompReady'] = true;
  var __mounted = component.__mounted;
  var snapshot;

  if (__mounted) {
    snapshot = callGetSnapshotBeforeUpdate(component, prevProps, prevState);
  } // 每次 setData 都独立生成一个 callback 数组


  var cbs = [];

  if (component._pendingCallbacks && component._pendingCallbacks.length) {
    cbs = component._pendingCallbacks;
    component._pendingCallbacks = [];
  }

  Object.keys(data).map(function (item) {
    if (!(item in component.$scope)) {
      component.$scope.$set(item, data[item]);
    } else {
      component.$scope[item] = data[item];
    }
  });

  if (__mounted) {
    taro.invokeEffects(component);

    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }

    if (isFunction(component.componentDidUpdate)) {
      component.componentDidUpdate(prevProps, prevState, snapshot);
    }
  }

  if (cbs.length) {
    var i = cbs.length;

    while (--i >= 0) {
      isFunction(cbs[i]) && cbs[i].call(component);
    }
  }
}

var items = [];
function enqueueRender(component) {
  var isForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // tslint:disable-next-line:no-conditional-assignment
  component._isForceUpdate = isForceUpdate;

  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(function () {
      rerender();
    });
  }
}
function rerender() {
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, true);
    }
  }
}

var PRELOAD_DATA_KEY$1 = 'preload';

var BaseComponent = /*#__PURE__*/function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  function BaseComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPage = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseComponent);

    _defineProperty(this, "__computed", {});

    _defineProperty(this, "__props", {});

    _defineProperty(this, "__isReady", false);

    _defineProperty(this, "__mounted", false);

    _defineProperty(this, "nextProps", {});

    _defineProperty(this, "context", {});

    _defineProperty(this, "_dirty", true);

    _defineProperty(this, "_disable", true);

    _defineProperty(this, "_isForceUpdate", false);

    _defineProperty(this, "_pendingStates", []);

    _defineProperty(this, "_pendingCallbacks", []);

    _defineProperty(this, "$componentType", '');

    _defineProperty(this, "$router", {
      params: {},
      path: ''
    });

    _defineProperty(this, "_afterScheduleEffect", false);

    _defineProperty(this, "_disableEffect", false);

    _defineProperty(this, "hooks", []);

    _defineProperty(this, "effects", []);

    _defineProperty(this, "layoutEffects", []);

    this.state = {};
    this.props = props || {};
    this.$componentType = isPage ? 'PAGE' : 'COMPONENT';
    this.$prefix = genCompPrefix();
    this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      this.props = props || {};
    }
  }, {
    key: "_init",
    value: function _init(scope) {
      this.$scope = scope;
    }
  }, {
    key: "setState",
    value: function setState(state, callback) {
      if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
      }

      if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      if (!this._disable) {
        enqueueRender(this, taro.internal_force_update === callback);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this = this;

      var _pendingStates = this._pendingStates,
          state = this.state,
          props = this.props;
      var stateClone = Object.assign({}, state);
      delete stateClone.__data;

      if (!_pendingStates.length) {
        return stateClone;
      }

      var queue = _pendingStates.concat();

      this._pendingStates.length = 0;
      queue.forEach(function (nextState) {
        if (typeof nextState === 'function') {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (typeof callback === 'function') {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      this._isForceUpdate = true;
      updateComponent(this);
    }
  }, {
    key: "$preload",
    value: function $preload(key, value) {
      var preloadData = cacheDataGet(PRELOAD_DATA_KEY$1) || {};

      if (_typeof(key) === 'object') {
        for (var k in key) {
          preloadData[k] = key[k];
        }
      } else {
        preloadData[key] = value;
      }

      cacheDataSet(PRELOAD_DATA_KEY$1, preloadData);
    } // 会被匿名函数调用

  }, {
    key: "__triggerPropsFn",
    value: function __triggerPropsFn(key, args) {
      var keyChain = key.split('.');
      var reduxFnPrefix = '__event_';
      var reduxFnName = reduxFnPrefix + keyChain.shift(); // redux标识过的方法，直接调用

      if (reduxFnName in this) {
        var scope = args.shift();
        var fn;

        if (keyChain.length > 0) {
          fn = taro.internal_safe_get(this[reduxFnName], keyChain.join('.'));
        } else {
          fn = this[reduxFnName];
        }

        fn.apply(scope, args);
      } else {
        // 普通的
        var keyLower = key.toLocaleLowerCase();
        var payload = {
          __isCustomEvt: true,
          __arguments: args
        };
        var detail = {};
        var externalBinding = this.$scope._externalBinding;
        var attr = this.$scope._attr || this.$scope.attr || externalBinding && externalBinding.template.attr;

        if (attr) {
          Object.keys(attr).forEach(function (item) {
            if (/^data/.test(item)) {
              detail[item.replace(/_/g, '').replace(/^data/, '')] = typeof attr[item] === 'function' ? attr[item]() : attr[item];
            }
          });
        }

        if (Object.keys(detail).length) {
          payload.__detail = detail;
        }

        this.$scope.$emit(keyLower.replace(/^on/, ''), payload);
      }
    }
  }]);

  return BaseComponent;
}();

var PureComponent = /*#__PURE__*/function (_Component) {
  _inherits(PureComponent, _Component);

  var _super = _createSuper(PureComponent);

  function PureComponent() {
    var _this;

    _classCallCheck(this, PureComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "isPureComponent", true);

    return _this;
  }

  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }]);

  return PureComponent;
}(BaseComponent);

function createApp(AppClass) {
  var app = new AppClass();
  var appConf = {
    onCreate: function onCreate(options) {
      globalRef.$app = this;
      app.$app = this;
      app.$app.$router = app.$router = {
        params: options
      };

      if (app.componentWillMount) {
        app.componentWillMount();
      }

      if (app.componentDidMount) {
        app.componentDidMount();
      }
    },
    onDestroy: function onDestroy() {
      if (app.componentWillUnmount) {
        app.componentWillUnmount();
      }
    }
  };
  return Object.assign(appConf, app);
}

function request() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    if (typeof options === 'string') {
      options = {
        url: options
      };
    }

    var _options = options,
        _options$url = _options.url,
        url = _options$url === undefined ? '' : _options$url,
        method = _options.method,
        _options$dataType = _options.dataType,
        dataType = _options$dataType === undefined ? 'json' : _options$dataType,
        _success = _options.success,
        _fail = _options.fail,
        complete = _options.complete;
    var _options2 = options,
        header = _options2.header,
        _options2$data = _options2.data,
        data = _options2$data === undefined ? '' : _options2$data; // headers

    if (_typeof(header) !== 'object') header = {};

    if (!header['content-type'] && !header['Content-Type']) {
      header['Content-Type'] = 'application/json';
    } // method


    var methodUpper = typeof method === 'string' ? method.toUpperCase() : 'GET'; // data

    if (methodUpper === 'POST' && _typeof(data) === 'object') {
      var contentType = header && (header['Content-Type'] || header['content-type']);

      if (contentType === 'application/json') {
        data = JSON.stringify(data);
      }
    } // params


    var obj = {
      url: url,
      data: data,
      header: header,
      method: methodUpper,
      success: function success(res) {
        var data = res.data;
        if (dataType === 'json') data = JSON.parse(res.data);
        var reponse = {
          data: data,
          statusCode: res.code,
          header: res.headers
        };
        typeof _success === 'function' && _success(reponse);
        typeof complete === 'function' && complete(reponse);
        resolve(reponse);
      },
      fail: function fail(err, code) {
        var reason = {
          err: err,
          code: code
        };
        typeof _fail === 'function' && _fail(reason);
        typeof complete === 'function' && complete(reason);
        reject(reason);
      }
    };
    fetch.fetch(obj);
  });
}
function uploadFile() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var _options$url2 = options.url,
        url = _options$url2 === undefined ? '' : _options$url2,
        filePath = options.filePath,
        _options$name = options.name,
        name = _options$name === undefined ? 'file' : _options$name,
        _options$formData = options.formData,
        formData = _options$formData === undefined ? {} : _options$formData,
        _success2 = options.success,
        _fail2 = options.fail,
        complete = options.complete;
    var header = options.header,
        _options$method = options.method,
        method = _options$method === undefined ? 'POST' : _options$method,
        _options$files = options.files,
        files = _options$files === undefined ? [] : _options$files,
        _options$data = options.data,
        data = _options$data === undefined ? [] : _options$data;
    if (_typeof(header) !== 'object') header = {};

    if (files.length === 0) {
      files.push({
        name: name,
        uri: filePath
      });
    }

    if (data.length === 0) {
      data.push(formData);
    }

    var methodUpper = typeof method === 'string' ? method.toUpperCase() : 'POST';
    var obj = {
      url: url,
      header: header,
      method: methodUpper,
      files: files,
      data: data,
      success: function success(res) {
        var data = res.data;
        if (dataType === 'json') data = JSON.parse(res.data);
        var reponse = {
          data: data,
          statusCode: res.code,
          header: res.headers
        };
        typeof _success2 === 'function' && _success2(reponse);
        typeof complete === 'function' && complete(reponse);
        resolve(reponse);
      },
      fail: function fail(err, code) {
        var reason = {
          err: err,
          code: code
        };
        typeof _fail2 === 'function' && _fail2(reason);
        typeof complete === 'function' && complete(reason);
        reject(reason);
      }
    };
    quickRequest.upload(obj);
  });
}
function downloadFile() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var _options$url3 = options.url,
        url = _options$url3 === undefined ? '' : _options$url3,
        _options$description = options.description,
        description = _options$description === undefined ? '' : _options$description,
        filename = options.filename,
        _success3 = options.success,
        _fail3 = options.fail,
        complete = options.complete;
    var header = options.header;
    if (_typeof(header) !== 'object') header = {};
    var obj = {
      url: url,
      header: header,
      description: description,
      data: data,
      success: function success(res) {
        var data = res.data;
        if (dataType === 'json') data = JSON.parse(res.data);
        var reponse = {
          data: data,
          statusCode: res.code,
          header: res.headers
        };
        typeof _success3 === 'function' && _success3(reponse);
        typeof complete === 'function' && complete(reponse);
        resolve(reponse);
      },
      fail: function fail(err, code) {
        var reason = {
          err: err,
          code: code
        };
        typeof _fail3 === 'function' && _fail3(reason);
        typeof complete === 'function' && complete(reason);
        reject(reason);
      }
    };
    if (filename) obj.filename = filename;
    quickRequest.download(obj);
  });
}

function generateUnSupportApi(errText, fnNames) {
  var res = {};
  fnNames.forEach(function (fnName) {
    res[fnName] = function () {
      throw new Error(errText);
    };
  });
  return res;
}
function makeSyncPromise(fnName, process) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: "".concat(fnName, ":ok")
  };
  return new Promise(function (resolve, reject) {
    try {
      process && process();
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = "".concat(fnName, ":error");
      res.data = data;
      fail && fail(res);
      complete && complete(res);
      reject(res);
    }
  });
}

function setStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      data = opts.data,
      _success = opts.success,
      _fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'setStorage:ok'
  };
  return new Promise(function (resolve, reject) {
    storage.set({
      key: key,
      value: JSON.stringify(data),
      success: function success() {
        _success && _success(res);
        complete && complete(res);
        resolve(res);
      },
      fail: function fail(message, code) {
        res.errMsg = message;
        res.code = code;
        _fail && _fail(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      _success2 = opts.success,
      _fail2 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'getStorage:ok'
  };
  return new Promise(function (resolve, reject) {
    storage.get({
      key: key,
      success: function success(data) {
        res.data = data ? JSON.parse(data) : data;
        _success2 && _success2(res);
        complete && complete(res);
        resolve(res);
      },
      fail: function fail(message, code) {
        res.errMsg = message;
        res.code = code;
        _fail2 && _fail2(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getStorageInfo() {
  console.log('快应用暂不支持getStorageInfo api');
}
function removeStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      _success3 = opts.success,
      _fail3 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'removeStorage:ok'
  };
  return new Promise(function (resolve, reject) {
    storage["delete"]({
      key: key,
      success: function success() {
        _success3 && _success3(res);
        complete && complete(res);
        resolve(res);
      },
      fail: function fail(message, code) {
        res.errMsg = message;
        res.code = code;
        _fail3 && _fail3(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function clearStorage() {
  return storage.clear();
}
var unSupportApis = ['setStorageSync', 'getStorageSync', 'getStorageInfoSync', 'removeStorageSync', 'clearStorageSync'];
unSupportApis = generateUnSupportApi('快应用暂不支持storage的同步存取', unSupportApis);
var qStorage = {
  setStorage: setStorage,
  getStorage: getStorage,
  getStorageInfo: getStorageInfo,
  removeStorage: removeStorage,
  clearStorage: clearStorage
};
Object.assign(qStorage, unSupportApis);

var preloadPrivateKey$1 = 'quick$PriPreload';
var preloadInitedComponent$1 = 'quick$PriPreloadComponent';
function navigateTo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return qappNavigate(options);
}
function redirectTo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return qappNavigate(options, 'replace');
}
function navigateBack() {
  router.back();
}
function switchTab() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  router.clear();
  return qappNavigate(options, 'replace');
}
function getCurrentPages$1() {
  return router.getLength();
}
function reLaunch() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  router.clear();
  return qappNavigate(options, 'replace');
}

function qappNavigate() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';
  var _options$url = options.url,
      url = _options$url === undefined ? '' : _options$url,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'ok'
  };
  return new Promise(function (resolve, reject) {
    var params = {};

    if (!url) {
      res.errMsg = 'url不能为空';
      fail && fail(res);
      reject(res);
      return;
    }

    params = getUrlParams(url);
    var markIndex = url.indexOf('?');
    var componentPath = globalRef.componentPath || '';
    var parseUrl = url.substr(0, markIndex >= 0 ? markIndex : url.length);
    var RelativeReg = /\.\.\//g;

    if (componentPath && RelativeReg.test(parseUrl)) {
      //当前页面路径最后一级是文件，在计算路径时去除
      var componentRootDir = componentPath.substr(0, componentPath.lastIndexOf('/'));
      var pathArr = parseUrl.split('/'); //计算..出现的次数，每出现一次就往上一层

      var _iterator = _createForOfIteratorHelper(pathArr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var path = _step.value;

          if (path === '..') {
            componentRootDir = componentRootDir.substr(0, componentRootDir.lastIndexOf('/'));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      parseUrl = componentRootDir + '/' + parseUrl.replace(RelativeReg, '');
    }

    parseUrl = addLeadingSlash$1(parseUrl);
    globalRef.taroRouterParamsCache = globalRef.taroRouterParamsCache || {};
    globalRef.taroRouterParamsCache[parseUrl] = params;

    if (method === 'push' || method === 'replace') {
      var Component = cacheDataGet(parseUrl);

      if (Component) {
        var component = new Component();

        if (component.componentWillPreload) {
          var cacheKey = getUniqueKey();
          cacheDataSet(cacheKey, component.componentWillPreload(Object.assign({}, params)));
          cacheDataSet(preloadInitedComponent$1, component);
          params[preloadPrivateKey$1] = cacheKey;
        }
      }
    }

    try {
      router[method]({
        uri: parseUrl.substr(0, parseUrl.lastIndexOf('/')),
        params: params
      });
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = 'error';
      res.data = data;
      fail && fail(res);
      reject(res);
    }
  });
}

function getUrlParams() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var params = {};
  url = url.replace(/#.*$/, '');
  var queryArray = url.split(/[?&]/).slice(1);
  queryArray.forEach(function (item) {
    var match = item.match(/([^=]+)=([^=]+)/);

    if (match != null) {
      params[match[1]] = decodeURIComponent(match[2]);
    }
  });
  return params;
}

function showToast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$title = options.title,
      title = _options$title === undefined ? '' : _options$title,
      _options$duration = options.duration,
      duration = _options$duration === undefined ? 1500 : _options$duration,
      success = options.success,
      complete = options.complete,
      fail = options.fail;
  var res = {
    errMsg: 'showToast:ok'
  };
  return new Promise(function (resolve, reject) {
    try {
      prompt.showToast({
        message: title,
        duration: duration
      });
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = 'showToast: error';
      res.data = data;
      fail && fail(res);
      reject(res);
    }
  });
}
function showModal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$title2 = options.title,
      title = _options$title2 === undefined ? '' : _options$title2,
      _options$content = options.content,
      content = _options$content === undefined ? '' : _options$content,
      _options$showCancel = options.showCancel,
      showCancel = _options$showCancel === undefined ? true : _options$showCancel,
      _options$cancelText = options.cancelText,
      cancelText = _options$cancelText === undefined ? '取消' : _options$cancelText,
      _options$cancelColor = options.cancelColor,
      cancelColor = _options$cancelColor === undefined ? '#000000' : _options$cancelColor,
      _options$confirmText = options.confirmText,
      confirmText = _options$confirmText === undefined ? '确定' : _options$confirmText,
      _options$confirmColor = options.confirmColor,
      confirmColor = _options$confirmColor === undefined ? '#3CC51F' : _options$confirmColor,
      _success = options.success,
      _fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'showModel:ok',
    confirm: false,
    cancel: false
  };
  var btnList = [{
    text: confirmText,
    color: confirmColor
  }];
  showCancel && btnList.push({
    text: cancelText,
    color: cancelColor
  });
  return new Promise(function (resolve, reject) {
    prompt.showDialog({
      title: title,
      message: content,
      buttons: btnList,
      success: function success(data) {
        if (showCancel) {
          res.confirm = data.index === 0;
          res.cancel = data.index === 1;
        } else {
          res.confirm = true;
        }

        _success && _success(res);
        complete && complete(res);
        resolve(res);
      },
      cancel: function cancel() {
        _success && _success(res);
        complete && complete(res);
        res.cancel = true;
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail && _fail(res);
        reject(res);
        console.log("handling fail, code = ".concat(code), data);
      }
    });
  });
}
function showActionSheet() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var itemList = options.itemList,
      _options$itemColor = options.itemColor,
      itemColor = _options$itemColor === undefined ? '#000000' : _options$itemColor,
      _success2 = options.success,
      _fail2 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'showActionSheet:ok'
  };
  return new Promise(function (resolve, reject) {
    if (!itemList) {
      console.warn('itemList必传');
      res.errMsg = 'itemList必传';
      reject(res);
      return;
    }

    prompt.showContextMenu({
      itemList: itemList,
      itemColor: itemColor,
      success: function success(data) {
        res.tapIndex = data.index;
        _success2 && _success2(res);
        complete && complete(res);
        resolve(res);
      },
      cancel: function cancel() {
        res.errMsg = 'cancelActionSheet: success';
        _success2 && _success2(res);
        complete && complete(res);
        res.tapIndex = -1;
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        complete && complete(res);
        _fail2 && _fail2(res);
        reject(res);
        console.log("handling fail, code = ".concat(code), data);
      }
    });
  });
}

function setNavigationBar(params, fnName) {
  var success = params.success,
      complete = params.complete,
      fail = params.fail;
  var res = {
    errMsg: "".concat(fnName, ": ok")
  };
  return new Promise(function (resolve, reject) {
    try {
      taro.eventCenter.trigger('TaroEvent:setNavigationBar', params);
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = "".concat(fnName, ": error");
      res.data = data;
      fail && fail(res);
      reject(res);
    }
  });
}

function setNavigationBarTitle(params) {
  setNavigationBar(params, 'setNavigationBarTitle');
}
function setNavigationBarColor(params) {
  setNavigationBar(params, 'setNavigationBarColor');
}
function startPullDownRefresh() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = options.success,
      complete = options.complete,
      fail = options.fail;
  var res = {
    errMsg: "startPullDownRefresh: ok"
  };
  return new Promise(function (resolve, reject) {
    try {
      taro.eventCenter.trigger('TaroPage:startPullDownRefresh');
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = 'startPullDownRefresh: error';
      res.data = data;
      fail && fail(res);
      reject(res);
    }
  });
}
function stopPullDownRefresh() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = options.success,
      complete = options.complete,
      fail = options.fail;
  var res = {
    errMsg: "stopPullDownRefresh: ok"
  };
  return new Promise(function (resolve, reject) {
    try {
      taro.eventCenter.trigger('TaroPage:stopPullDownRefresh');
      success && success(res);
      complete && complete(res);
      resolve(res);
    } catch (data) {
      res.errMsg = 'stopPullDownRefresh: error';
      res.data = data;
      fail && fail(res);
      reject(res);
    }
  });
}

function scanCode() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success = options.success,
      _fail = options.fail,
      _complete = options.complete;
  var res = {
    errMsg: 'scanCode:ok'
  };
  return new Promise(function (resolve, reject) {
    barcode.scan({
      success: function success(data) {
        res.result = data.result;
        _success && _success(res);
        _complete && _complete(res);
        resolve(res);
      },
      cancel: function cancel() {
        res.errMsg = 'cancelScanCode: success';
        _success && _success(res);
        _complete && _complete(res);
        res.result = '';
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _complete && _complete(res);
        _fail && _fail(res);
        reject(res);
        console.log("scanCode fail, code = ".concat(code), data);
      },
      complete: function complete() {
        _complete && _complete(res);
      }
    });
  });
}
function vibrateShort() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('vibrateShort', function () {
    vibrator.vibrate({
      mode: 'short'
    });
  }, options);
}
function vibrateLong() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('vibrateLong', function () {
    vibrator.vibrate({
      mode: 'long'
    });
  }, options);
}
function setClipboardData() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = options.data,
      _success2 = options.success,
      _fail2 = options.fail,
      _complete2 = options.complete;
  var res = {
    errMsg: 'setClipboardData:ok'
  };
  return new Promise(function (resolve, reject) {
    clipboard.set({
      text: data,
      success: function success(data) {
        res.result = data.result;
        _success2 && _success2(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail2 && _fail2(res);
        reject(res);
      },
      complete: function complete() {
        _complete2 && _complete2(res);
      }
    });
  });
}
function getClipboardData() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success3 = options.success,
      _fail3 = options.fail,
      _complete3 = options.complete;
  var res = {
    errMsg: 'getClipboardData:ok'
  };
  return new Promise(function (resolve, reject) {
    clipboard.get({
      success: function success(data) {
        res.data = data.text;
        _success3 && _success3(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail3 && _fail3(res);
        reject(res);
      },
      complete: function complete() {
        _complete3 && _complete3(res);
      }
    });
  });
}
function startAccelerometer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('startAccelerometer', null, options);
}
function stopAccelerometer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('stopAccelerometer', function () {
    sensor.unsubscribeAccelerometer();
  }, options);
}
function onAccelerometerChange(callback) {
  if (callback) {
    sensor.subscribeAccelerometer({
      callback: callback
    });
  }
}
function startCompass() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('startCompass', null, options);
}
function stopCompass() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeSyncPromise('stopCompass', function () {
    sensor.unsubscribeCompass();
  }, options);
}
function onCompassChange(callback) {
  if (callback) {
    sensor.subscribeCompass({
      callback: callback
    });
  }
}
function getLocation() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success4 = options.success,
      _fail4 = options.fail,
      _complete4 = options.complete;
  var res = {
    errMsg: 'getLocation:ok'
  };
  return new Promise(function (resolve, reject) {
    geolocation.getLocation({
      success: function success(data) {
        res.latitude = data.latitude;
        res.longitude = data.longitude;
        res.accuracy = data.accuracy;
        _success4 && _success4(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail4 && _fail4(res);
        reject(res);
      },
      complete: function complete() {
        _complete4 && _complete4(res);
      }
    });
  });
}

function showShareMenu() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = opts.type,
      data = opts.data,
      _success = opts.success,
      _fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'showShareMenu:ok'
  };
  return new Promise(function (resolve, reject) {
    share.share({
      type: type,
      data: data,
      success: function success() {
        _success && _success(res);
        complete && complete(res);
        resolve(res);
      },
      fail: function fail(message, code) {
        res.errMsg = message;
        res.code = code;
        _fail && _fail(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}

function showNotification() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var contentTitle = opts.contentTitle,
      contentText = opts.contentText,
      clickAction = opts.clickAction;

  if (clickAction) {
    var uri = clickAction.uri;
    clickAction.uri = uri.substr(0, url.lastIndexOf('/'));
  }

  notification.show({
    contentTitle: contentTitle || undefined,
    contentText: contentText || undefined,
    clickAction: contentText || undefined
  });
}

function getSystemInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success = options.success,
      _fail = options.fail,
      _complete = options.complete;
  var res = {
    errMsg: 'getSystemInfo:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getInfo({
      success: function success(data) {
        res.result = data.result;
        _success && _success(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail && _fail(res);
        reject(res);
      },
      complete: function complete() {
        _complete && _complete(res);
      }
    });
  });
}
function getSystemId() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success2 = options.success,
      _fail2 = options.fail,
      _complete2 = options.complete,
      type = options.type;
  var res = {
    errMsg: 'getSystemId:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getId({
      type: type,
      success: function success(data) {
        res.result = data.result;
        _success2 && _success2(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail2 && _fail2(res);
        reject(res);
      },
      complete: function complete() {
        _complete2 && _complete2(res);
      }
    });
  });
}
function getSystemDeviceId() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success3 = options.success,
      _fail3 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemDeviceId:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getDeviceId({
      success: function success(data) {
        res.result = data.result;
        _success3 && _success3(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail3 && _fail3(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemUserId() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success4 = options.success,
      _fail4 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemUserId:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getDeviceId({
      success: function success(data) {
        res.result = data.result;
        _success4 && _success4(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail4 && _fail4(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemAdvertisingId() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success5 = options.success,
      _fail5 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemAdvertisingId:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getAdvertisingId({
      success: function success(data) {
        res.result = data.result;
        _success5 && _success5(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail5 && _fail5(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemSerial() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success6 = options.success,
      _fail6 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemSerial:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getSerial({
      success: function success(data) {
        res.result = data.result;
        _success6 && _success6(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail6 && _fail6(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemTotalStorage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success7 = options.success,
      _fail7 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemTotalStorage:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getTotalStorage({
      success: function success(data) {
        res.result = data.result;
        _success7 && _success7(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail7 && _fail7(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemAvailableStorage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success8 = options.success,
      _fail8 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemAvailableStorage:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getAvailableStorage({
      success: function success(data) {
        res.result = data.result;
        _success8 && _success8(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail8 && _fail8(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemCpuInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success9 = options.success,
      _fail9 = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getSystemCpuInfo:ok'
  };
  return new Promise(function (resolve, reject) {
    device$1.getCpuInfo({
      success: function success(data) {
        res.result = data.result;
        _success9 && _success9(res);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail9 && _fail9(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getSystemPlatform() {
  return device$1.platform;
}
var unSupportApis$1 = ['getSystemInfoSync'];
unSupportApis$1 = generateUnSupportApi('快应用暂不支持SystemInfo的同步接口', unSupportApis$1);
var qSystem = {
  getSystemInfo: getSystemInfo,
  getSystemId: getSystemId,
  getSystemDeviceId: getSystemDeviceId,
  getSystemUserId: getSystemUserId,
  getSystemAdvertisingId: getSystemAdvertisingId,
  getSystemSerial: getSystemSerial,
  getSystemTotalStorage: getSystemTotalStorage,
  getSystemAvailableStorage: getSystemAvailableStorage,
  getSystemCpuInfo: getSystemCpuInfo,
  getSystemPlatform: getSystemPlatform
};
Object.assign(qSystem, unSupportApis$1);

function webviewLoadUrl() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return webview.loadUrl(opts);
}

function createInnerAudioContext() {
  return audio;
}
function getPlayState() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success = opts.success,
      _fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'getPlayState:ok'
  };
  return new Promise(function (resolve, reject) {
    device.getCpuInfo({
      success: function success(data) {
        res.result = data;
        _success && _success(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail && _fail(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function startRecord() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var duration = opts.duration,
      sampleRate = opts.sampleRate,
      numberOfChannels = opts.numberOfChannels,
      encodeBitRate = opts.encodeBitRate,
      format = opts.format,
      _success2 = opts.success,
      _fail2 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'startRecord:ok'
  };
  return new Promise(function (resolve, reject) {
    record.start({
      duration: duration,
      sampleRate: sampleRate,
      numberOfChannels: numberOfChannels,
      encodeBitRate: encodeBitRate,
      format: format,
      success: function success(data) {
        res.result = data;
        _success2 && _success2(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail2 && _fail2(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function stopRecord() {
  return record.stop();
}

function getContactPick() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success = opts.success,
      _fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'getContactPick:ok'
  };
  return new Promise(function (resolve, reject) {
    contact.pick({
      success: function success(data) {
        res.result = data;
        _success && _success(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail && _fail(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function getContactList() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _success2 = opts.success,
      _fail2 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'getContactList:ok'
  };
  return new Promise(function (resolve, reject) {
    contact.list({
      success: function success(data) {
        res.result = data;
        _success2 && _success2(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail2 && _fail2(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function sendSms() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var address = opts.address,
      content = opts.content,
      _success3 = opts.success,
      _fail3 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'sendSms:ok'
  };
  return new Promise(function (resolve, reject) {
    sms.send({
      address: address,
      content: content,
      success: function success(data) {
        res.result = data;
        _success3 && _success3(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail3 && _fail3(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
function readSmsSafely() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var timeout = opts.timeout,
      _success4 = opts.success,
      _fail4 = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: 'sendSms:ok'
  };
  return new Promise(function (resolve, reject) {
    sms.readSafely({
      timeout: timeout,
      success: function success(data) {
        res.result = data;
        _success4 && _success4(data);
        resolve(res);
      },
      fail: function fail(data, code) {
        res.errMsg = data;
        res.code = code;
        _fail4 && _fail4(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}

// 未实现

var supportApi = /*#__PURE__*/Object.freeze({
  request: request,
  uploadFile: uploadFile,
  downloadFile: downloadFile,
  setStorage: setStorage,
  getStorage: getStorage,
  getStorageInfo: getStorageInfo,
  removeStorage: removeStorage,
  clearStorage: clearStorage,
  navigateTo: navigateTo,
  redirectTo: redirectTo,
  navigateBack: navigateBack,
  switchTab: switchTab,
  getCurrentPages: getCurrentPages$1,
  reLaunch: reLaunch,
  showToast: showToast,
  showModal: showModal,
  showActionSheet: showActionSheet,
  setNavigationBarTitle: setNavigationBarTitle,
  setNavigationBarColor: setNavigationBarColor,
  startPullDownRefresh: startPullDownRefresh,
  stopPullDownRefresh: stopPullDownRefresh,
  scanCode: scanCode,
  vibrateShort: vibrateShort,
  vibrateLong: vibrateLong,
  setClipboardData: setClipboardData,
  getClipboardData: getClipboardData,
  startAccelerometer: startAccelerometer,
  stopAccelerometer: stopAccelerometer,
  onAccelerometerChange: onAccelerometerChange,
  startCompass: startCompass,
  stopCompass: stopCompass,
  onCompassChange: onCompassChange,
  getLocation: getLocation,
  showShareMenu: showShareMenu,
  showNotification: showNotification,
  getSystemInfo: getSystemInfo,
  getSystemId: getSystemId,
  getSystemDeviceId: getSystemDeviceId,
  getSystemUserId: getSystemUserId,
  getSystemAdvertisingId: getSystemAdvertisingId,
  getSystemSerial: getSystemSerial,
  getSystemTotalStorage: getSystemTotalStorage,
  getSystemAvailableStorage: getSystemAvailableStorage,
  getSystemCpuInfo: getSystemCpuInfo,
  getSystemPlatform: getSystemPlatform,
  webviewLoadUrl: webviewLoadUrl,
  createInnerAudioContext: createInnerAudioContext,
  getPlayState: getPlayState,
  startRecord: startRecord,
  stopRecord: stopRecord,
  getContactPick: getContactPick,
  getContactList: getContactList,
  sendSms: sendSms,
  readSmsSafely: readSmsSafely
});

function processApis(taro$$1) {
  var weApis = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis);
  Object.keys(weApis).forEach(function (key) {
    taro$$1[key] = function () {
      console.log("\u6682\u65F6\u4E0D\u652F\u6301 ".concat(key));
    };
  });
}

function canIUseWebp() {
  return true;
}

function pxTransform(size) {
  return size + 'px';
}

function getApp() {
  return globalRef.$app || {};
}

function initNativeApi(taro$$1) {
  processApis(taro$$1);
  taro$$1.canIUseWebp = canIUseWebp;
  taro$$1.initPxTransform = taro.initPxTransform.bind(taro$$1);
  taro$$1.pxTransform = pxTransform.bind(taro$$1);
  taro$$1.getApp = getApp;
  Object.assign(taro$$1, supportApi);
}

/* eslint-disable camelcase */
var Taro = {
  Component: BaseComponent,
  PureComponent: PureComponent,
  createApp: createApp,
  initNativeApi: initNativeApi,
  Events: taro.Events,
  eventCenter: taro.eventCenter,
  getEnv: taro.getEnv,
  render: taro.render,
  ENV_TYPE: taro.ENV_TYPE,
  internal_safe_get: taro.internal_safe_get,
  internal_safe_set: taro.internal_safe_set,
  internal_inline_style: taro.internal_inline_style,
  createComponent: createComponent,
  internal_get_original: taro.internal_get_original,
  interceptors: taro.interceptors,
  propsManager: propsManager,
  genCompid: genCompid,
  useEffect: taro.useEffect,
  useLayoutEffect: taro.useLayoutEffect,
  useReducer: taro.useReducer,
  useState: taro.useState,
  useDidShow: taro.useDidShow,
  useDidHide: taro.useDidHide,
  usePullDownRefresh: taro.usePullDownRefresh,
  useReachBottom: taro.useReachBottom,
  usePageScroll: taro.usePageScroll,
  useRouter: taro.useRouter,
  useScope: taro.useScope,
  useRef: taro.useRef,
  useCallback: taro.useCallback,
  useMemo: taro.useMemo,
  useImperativeHandle: taro.useImperativeHandle,
  useContext: taro.useContext,
  createContext: taro.createContext,
  memo: taro.memo,
  shallowEqual: shallowEqual
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map