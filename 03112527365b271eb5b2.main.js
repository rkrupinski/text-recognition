webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_root__ = __webpack_require__(125);







__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a.use();

render(__WEBPACK_IMPORTED_MODULE_4__components_root__["a" /* default */]);

if (false) {
  module.hot.accept('./components/root', function () {
    render(Root);
  });
}

function render(RootComponent) {
  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__["AppContainer"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RootComponent, null)
  ), document.querySelector('#app'));
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(render, 'render', '/Users/rkrupinski/www/text-recognition/src/index.jsx');
}();

;

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var addTrainingData = function addTrainingData(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ADD_TRAINING_DATA */],
    payload: { data: data }
  };
};

var _default = addTrainingData;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(addTrainingData, 'addTrainingData', '/Users/rkrupinski/www/text-recognition/src/actionCreators/addTrainingData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/addTrainingData.js');
}();

;

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var clearTrainingData = function clearTrainingData() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* CLEAR_TRAINING_DATA */]
  };
};

var _default = clearTrainingData;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clearTrainingData, 'clearTrainingData', '/Users/rkrupinski/www/text-recognition/src/actionCreators/clearTrainingData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/clearTrainingData.js');
}();

;

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var setInput = function setInput(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_INPUT */],
    payload: { data: data }
  };
};

var _default = setInput;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(setInput, 'setInput', '/Users/rkrupinski/www/text-recognition/src/actionCreators/setInput.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/setInput.js');
}();

;

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var toggleMode = function toggleMode(mode) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* TOGGLE_MODE */],
    payload: { mode: mode }
  };
};

var _default = toggleMode;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleMode, 'toggleMode', '/Users/rkrupinski/www/text-recognition/src/actionCreators/toggleMode.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/toggleMode.js');
}();

;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var trainingStart = function trainingStart() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* TRAINING_START */]
  };
};

var _default = trainingStart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(trainingStart, 'trainingStart', '/Users/rkrupinski/www/text-recognition/src/actionCreators/trainingStart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/trainingStart.js');
}();

;

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


var trainingStop = function trainingStop() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* TRAINING_STOP */]
  };
};

var _default = trainingStop;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(trainingStop, 'trainingStop', '/Users/rkrupinski/www/text-recognition/src/actionCreators/trainingStop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/actionCreators/trainingStop.js');
}();

;

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeSelector__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawingBoardLabel__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawingBoard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__debug__ = __webpack_require__(120);
var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  padding: 1em;\n'], ['\n  display: flex;\n  padding: 1em;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &:not(:first-child) {\n    margin-left: 2em;\n  }\n'], ['\n  &:not(:first-child) {\n    margin-left: 2em;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);

var Col = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2);

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Row,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Col,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__modeSelector__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__drawingBoardLabel__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__drawingBoard__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'View ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://github.com/rkrupinski/text-recognition' },
          'source'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Col,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__debug__["a" /* default */], null)
    )
  );
};

var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Row, 'Row', '/Users/rkrupinski/www/text-recognition/src/components/app.jsx');

  __REACT_HOT_LOADER__.register(Col, 'Col', '/Users/rkrupinski/www/text-recognition/src/components/app.jsx');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/rkrupinski/www/text-recognition/src/components/app.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/app.jsx');
}();

;

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n'], ['\n  margin: 0;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DebugOutlet = __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].pre(_templateObject);

var Debug = function (_Component) {
  _inherits(Debug, _Component);

  function Debug() {
    _classCallCheck(this, Debug);

    return _possibleConstructorReturn(this, (Debug.__proto__ || Object.getPrototypeOf(Debug)).apply(this, arguments));
  }

  _createClass(Debug, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var output = Debug.format(data);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        DebugOutlet,
        null,
        output
      );
    }
  }], [{
    key: 'format',
    value: function format(data) {
      return JSON.stringify(data, function replacer(key, val) {
        return this[key].output ? this[key].output.indexOf(1) : val;
      }, 2);
    }
  }]);

  return Debug;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(Debug, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      input: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number).isRequired,
      output: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number).isRequired
    })).isRequired
  }
});

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(function (_ref) {
  var trainingData = _ref.trainingData;
  return { data: trainingData };
})(Debug);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DebugOutlet, 'DebugOutlet', '/Users/rkrupinski/www/text-recognition/src/components/debug.jsx');

  __REACT_HOT_LOADER__.register(Debug, 'Debug', '/Users/rkrupinski/www/text-recognition/src/components/debug.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/debug.jsx');
}();

;

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_signature_canvas__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_signature_canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_signature_canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators_setInput__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(39);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DrawingBoard = function (_Component) {
  _inherits(DrawingBoard, _Component);

  function DrawingBoard(props) {
    _classCallCheck(this, DrawingBoard);

    var _this = _possibleConstructorReturn(this, (DrawingBoard.__proto__ || Object.getPrototypeOf(DrawingBoard)).call(this, props));

    _this.ok = _this.ok.bind(_this);
    _this.clear = _this.clear.bind(_this);
    return _this;
  }

  _createClass(DrawingBoard, [{
    key: 'ok',
    value: function ok() {
      var input = this.props.setInput;

      var imageData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* getImageData */])(this.sCanvas.getCanvas());

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* isValidImageData */])(imageData)) {
        input(imageData);
      }

      this.clear();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.sCanvas.clear();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var training = this.props.training;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_signature_canvas___default.a, {
          ref: function ref(el) {
            return _this2.sCanvas = el;
          },
          minWidth: 4,
          maxWidth: 4,
          dotSize: 4,
          canvasProps: {
            width: 200,
            height: 200,
            style: { border: '2px groove threedface' }
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            onClick: this.clear,
            disabled: training
          },
          'Clear'
        ),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            onClick: this.ok,
            disabled: training
          },
          'Go!'
        )
      );
    }
  }]);

  return DrawingBoard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(DrawingBoard, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    training: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    setInput: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(function (_ref) {
  var training = _ref.training;
  return { training: training };
}, { setInput: __WEBPACK_IMPORTED_MODULE_4__actionCreators_setInput__["a" /* default */] })(DrawingBoard);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DrawingBoard, 'DrawingBoard', '/Users/rkrupinski/www/text-recognition/src/components/drawingBoard.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/drawingBoard.jsx');
}();

;

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_compose__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_branch__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_branch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_branch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_renderComponent__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_renderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_renderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(39);









var DrawingBoardLabel = function DrawingBoardLabel() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    null,
    'Draw a digit:'
  );
};

var _default = __WEBPACK_IMPORTED_MODULE_1_recompose_compose___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(function (_ref) {
  var training = _ref.training;
  return { training: training };
}), __WEBPACK_IMPORTED_MODULE_2_recompose_branch___default()(function (_ref2) {
  var training = _ref2.training;
  return training;
}, __WEBPACK_IMPORTED_MODULE_3_recompose_renderComponent___default()(__WEBPACK_IMPORTED_MODULE_5__loader__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_6__utils__["c" /* identity */]))(DrawingBoardLabel);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DrawingBoardLabel, 'DrawingBoardLabel', '/Users/rkrupinski/www/text-recognition/src/components/drawingBoardLabel.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/drawingBoardLabel.jsx');
}();

;

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Loader = function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        currentFrame: 0
      }
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var interval = this.props.interval;


      this.timer = setInterval(this.update.bind(this), interval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'update',
    value: function update() {
      this.setState(function (prevState, _ref2) {
        var frames = _ref2.frames;
        return _extends({}, prevState, {
          currentFrame: prevState.currentFrame < frames.length - 1 ? prevState.currentFrame + 1 : 0
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var frames = this.props.frames;
      var currentFrame = this.state.currentFrame;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Please wait',
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { style: { fontFamily: 'monospace' } },
          frames[currentFrame]
        )
      );
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(Loader, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    interval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    frames: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string).isRequired
  }
});
Object.defineProperty(Loader, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    interval: 100,
    frames: ['|', '/', '-', '\\']
  }
});
var _default = Loader;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Loader, 'Loader', '/Users/rkrupinski/www/text-recognition/src/components/loader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/loader.jsx');
}();

;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators_toggleMode__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: .5em;\n  margin: 0;\n'], ['\n  display: inline-block;\n  padding: .5em;\n  margin: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: .25em;\n\n  &:not(:first-child) {\n    margin-left: 1em;\n  }\n'], ['\n  margin-right: .25em;\n\n  &:not(:first-child) {\n    margin-left: 1em;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].fieldset(_templateObject);

var Input = __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].input(_templateObject2);

var ModeSelector = function (_Component) {
  _inherits(ModeSelector, _Component);

  function ModeSelector(props) {
    _classCallCheck(this, ModeSelector);

    var _this = _possibleConstructorReturn(this, (ModeSelector.__proto__ || Object.getPrototypeOf(ModeSelector)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  } // eslint-disable-line


  _createClass(ModeSelector, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var toggle = this.props.toggleMode;


      toggle(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          mode = _props.mode,
          training = _props.training;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Container,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, {
          type: 'radio',
          name: 'mode',
          id: 'train',
          value: __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* TRAINING */],
          checked: mode === __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* TRAINING */],
          onChange: this.handleChange,
          disabled: training
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'train' },
          'Train'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, {
          type: 'radio',
          name: 'mode',
          id: 'test',
          value: __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* TESTING */],
          checked: mode === __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* TESTING */],
          onChange: this.handleChange,
          disabled: training
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'test' },
          'Test'
        )
      );
    }
  }]);

  return ModeSelector;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(ModeSelector, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    mode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    training: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    toggleMode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(function (_ref) {
  var mode = _ref.mode,
      training = _ref.training;
  return {
    mode: mode,
    training: training
  };
}, { toggleMode: __WEBPACK_IMPORTED_MODULE_4__actionCreators_toggleMode__["a" /* default */] })(ModeSelector);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Container, 'Container', '/Users/rkrupinski/www/text-recognition/src/components/modeSelector.jsx');

  __REACT_HOT_LOADER__.register(Input, 'Input', '/Users/rkrupinski/www/text-recognition/src/components/modeSelector.jsx');

  __REACT_HOT_LOADER__.register(ModeSelector, 'ModeSelector', '/Users/rkrupinski/www/text-recognition/src/components/modeSelector.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/modeSelector.jsx');
}();

;

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_app__ = __webpack_require__(119);






var Root = function Root() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
    { store: __WEBPACK_IMPORTED_MODULE_2_store__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_app__["a" /* default */], null)
  );
};

var _default = Root;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/rkrupinski/www/text-recognition/src/components/root.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/components/root.jsx');
}();

;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mode__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainingData__ = __webpack_require__(129);






var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
  mode: __WEBPACK_IMPORTED_MODULE_1__mode__["a" /* default */],
  training: __WEBPACK_IMPORTED_MODULE_2__training__["a" /* default */],
  trainingData: __WEBPACK_IMPORTED_MODULE_3__trainingData__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/reducers/index.js');
}();

;

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


function mode() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* TRAINING */];
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* TOGGLE_MODE */]:
      return payload.mode;

    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mode, 'mode', '/Users/rkrupinski/www/text-recognition/src/reducers/mode.js');
}();

;

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = training;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


function training() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];
  var type = action.type;


  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* TRAINING_START */]:
      return true;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* TRAINING_STOP */]:
      return false;

    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(training, 'training', '/Users/rkrupinski/www/text-recognition/src/reducers/training.js');
}();

;

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function trainingData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ADD_TRAINING_DATA */]:
      return [].concat(_toConsumableArray(state), [payload.data]);

    case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* CLEAR_TRAINING_DATA */]:
      return [];

    default:
      return state;
  }
}

var _default = trainingData;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(trainingData, 'trainingData', '/Users/rkrupinski/www/text-recognition/src/reducers/trainingData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/reducers/trainingData.js');
}();

;

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawingSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionCreators_addTrainingData__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nn__ = __webpack_require__(68);
var _marked = [testing, training, drawingSaga].map(regeneratorRuntime.mark);








function testing(input) {
  var result;
  return regeneratorRuntime.wrap(function testing$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_4__nn__["a" /* test */], input);

        case 2:
          result = _context.sent;


          alert('You drew ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["d" /* findMaxIndex */])(result) + '!'); // eslint-disable-line no-alert

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function training(input) {
  var value;
  return regeneratorRuntime.wrap(function training$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          value = prompt('What digit is it?'); // eslint-disable-line no-alert

          if (!(value === null)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt('return');

        case 3:
          _context2.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* isDigit */])(value) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actionCreators_addTrainingData__["a" /* default */])({ input: input, output: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* formatOutput */])(+value) })) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(training, input);

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function drawingSaga() {
  var _ref, data, _ref2, mode;

  return regeneratorRuntime.wrap(function drawingSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {
            _context3.next = 21;
            break;
          }

          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["c" /* take */])(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* SET_INPUT */]);

        case 3:
          _ref = _context3.sent;
          data = _ref.payload.data;
          _context3.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["e" /* select */])();

        case 7:
          _ref2 = _context3.sent;
          mode = _ref2.mode;
          _context3.t0 = mode;
          _context3.next = _context3.t0 === __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TRAINING */] ? 12 : _context3.t0 === __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* TESTING */] ? 15 : 18;
          break;

        case 12:
          _context3.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(training, data);

        case 14:
          return _context3.abrupt('break', 19);

        case 15:
          _context3.next = 17;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(testing, data);

        case 17:
          return _context3.abrupt('break', 19);

        case 18:
          return _context3.abrupt('break', 19);

        case 19:
          _context3.next = 0;
          break;

        case 21:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(testing, 'testing', '/Users/rkrupinski/www/text-recognition/src/sagas/drawing.js');

  __REACT_HOT_LOADER__.register(training, 'training', '/Users/rkrupinski/www/text-recognition/src/sagas/drawing.js');

  __REACT_HOT_LOADER__.register(drawingSaga, 'drawingSaga', '/Users/rkrupinski/www/text-recognition/src/sagas/drawing.js');
}();

;

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mode__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawing__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waiting__ = __webpack_require__(133);
var _marked = [rootSaga].map(regeneratorRuntime.mark);







function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* all */])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_1__mode__["a" /* default */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_2__drawing__["a" /* default */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_3__waiting__["a" /* default */])]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootSaga, 'rootSaga', '/Users/rkrupinski/www/text-recognition/src/sagas/index.js');
}();

;

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = modeSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators_trainingStart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators_trainingStop__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators_clearTrainingData__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nn__ = __webpack_require__(68);
var _marked = [toggleTesting, modeSaga].map(regeneratorRuntime.mark);









function toggleTesting() {
  var _ref, trainingData, result;

  return regeneratorRuntime.wrap(function toggleTesting$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["e" /* select */])();

        case 2:
          _ref = _context.sent;
          trainingData = _ref.trainingData;

          if (trainingData.length) {
            _context.next = 6;
            break;
          }

          return _context.abrupt('return');

        case 6:
          _context.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actionCreators_trainingStart__["a" /* default */])());

        case 8:
          _context.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_5__nn__["b" /* train */], trainingData, {
            /* Defaults FTW! */
          });

        case 10:
          result = _context.sent;


          console.log(result); // eslint-disable-line no-console

          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actionCreators_clearTrainingData__["a" /* default */])());

        case 14:
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators_trainingStop__["a" /* default */])());

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function modeSaga() {
  var _ref2, mode;

  return regeneratorRuntime.wrap(function modeSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {
            _context2.next = 12;
            break;
          }

          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["c" /* take */])(__WEBPACK_IMPORTED_MODULE_1__constants__["d" /* TOGGLE_MODE */]);

        case 3:
          _context2.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["e" /* select */])();

        case 5:
          _ref2 = _context2.sent;
          mode = _ref2.mode;

          if (!(mode === __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* TESTING */])) {
            _context2.next = 10;
            break;
          }

          _context2.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* call */])(toggleTesting);

        case 10:
          _context2.next = 0;
          break;

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleTesting, 'toggleTesting', '/Users/rkrupinski/www/text-recognition/src/sagas/mode.js');

  __REACT_HOT_LOADER__.register(modeSaga, 'modeSaga', '/Users/rkrupinski/www/text-recognition/src/sagas/mode.js');
}();

;

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = waitingSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(7);
var _marked = [waitingSaga].map(regeneratorRuntime.mark);





function waitingSaga() {
  var elevatorMusicFrame;
  return regeneratorRuntime.wrap(function waitingSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {
            _context.next = 14;
            break;
          }

          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["c" /* take */])(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* TRAINING_START */]);

        case 3:
          elevatorMusicFrame = document.createElement('iframe');


          elevatorMusicFrame.width = 0;
          elevatorMusicFrame.height = 0;
          elevatorMusicFrame.src = 'https://www.youtube.com/embed/VBlFHuCzPgY?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1';
          elevatorMusicFrame.frameBorder = 0;

          document.body.appendChild(elevatorMusicFrame);

          _context.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["c" /* take */])(__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* TRAINING_STOP */]);

        case 11:

          document.body.removeChild(elevatorMusicFrame);
          _context.next = 0;
          break;

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(waitingSaga, 'waitingSaga', '/Users/rkrupinski/www/text-recognition/src/sagas/waiting.js');
}();

;

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_localstorage__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sagas__ = __webpack_require__(131);







var sagaMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* default */])();

// eslint-disable-next-line no-underscore-dangle
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_0_redux__["b" /* compose */];

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* createStore */])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], composeEnhancers(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* applyMiddleware */])(sagaMiddleware), __WEBPACK_IMPORTED_MODULE_2_redux_localstorage___default()('trainingData')));

sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_4__sagas__["a" /* default */]);

var _default = store;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sagaMiddleware, 'sagaMiddleware', '/Users/rkrupinski/www/text-recognition/src/store.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/rkrupinski/www/text-recognition/src/store.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/rkrupinski/www/text-recognition/src/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/rkrupinski/www/text-recognition/src/store.js');
}();

;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
module.exports = __webpack_require__(111);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getImageData;
/* harmony export (immutable) */ __webpack_exports__["b"] = isValidImageData;
/* harmony export (immutable) */ __webpack_exports__["e"] = isDigit;
/* harmony export (immutable) */ __webpack_exports__["f"] = formatOutput;
/* harmony export (immutable) */ __webpack_exports__["c"] = identity;
/* harmony export (immutable) */ __webpack_exports__["d"] = findMaxIndex;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function sum(arr) {
  return arr.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
}

function getImageData(canvas) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  var ctx = canvas.getContext('2d');
  var cX = Math.floor(canvas.width / size);
  var cY = Math.floor(canvas.height / size);
  var data = [];

  for (var i = 0; i < cX; i += 1) {
    for (var j = 0; j < cY; j += 1) {
      var _ctx$getImageData = ctx.getImageData(i * size, j * size, size, size),
          imageData = _ctx$getImageData.data;

      var localData = [];

      for (var k = 0; k < imageData.length; k += 4) {
        localData.push(imageData[k + 3]);
      }

      data.push(sum(localData) / localData.length);
    }
  }

  return data.map(function (num) {
    return +num.toFixed(precision);
  });
}

function isValidImageData(data) {
  return data.some(function (chunk) {
    return !!chunk;
  });
}

function isDigit(value) {
  return (/^\d$/.test(value)
  );
}

function formatOutput(digit) {
  return [].concat(_toConsumableArray(Array(10))).map(function (_, i) {
    return +(i === digit);
  });
}

function identity(val) {
  return val;
}

function findMaxIndex(arr) {
  return arr.reduce(function (prev, curr, i, all) {
    return curr > all[prev] ? i : prev;
  }, 0);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sum, 'sum', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(getImageData, 'getImageData', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(isValidImageData, 'isValidImageData', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(isDigit, 'isDigit', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(formatOutput, 'formatOutput', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(identity, 'identity', '/Users/rkrupinski/www/text-recognition/src/utils.js');

  __REACT_HOT_LOADER__.register(findMaxIndex, 'findMaxIndex', '/Users/rkrupinski/www/text-recognition/src/utils.js');
}();

;

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return train; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return test; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_synaptic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_synaptic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_synaptic__);


var network = new __WEBPACK_IMPORTED_MODULE_0_synaptic__["Architect"].Perceptron(100, 20 /* YOLO */, 10);

var trainer = new __WEBPACK_IMPORTED_MODULE_0_synaptic__["Trainer"](network);

var train = trainer.trainAsync.bind(trainer);
var test = network.activate.bind(network);


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(network, 'network', '/Users/rkrupinski/www/text-recognition/src/nn.js');

  __REACT_HOT_LOADER__.register(trainer, 'trainer', '/Users/rkrupinski/www/text-recognition/src/nn.js');

  __REACT_HOT_LOADER__.register(train, 'train', '/Users/rkrupinski/www/text-recognition/src/nn.js');

  __REACT_HOT_LOADER__.register(test, 'test', '/Users/rkrupinski/www/text-recognition/src/nn.js');
}();

;

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_TRAINING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CLEAR_TRAINING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRAINING_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRAINING_STOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TESTING; });
var SET_INPUT = 'SET_INPUT';

var ADD_TRAINING_DATA = 'ADD_TRAINING_DATA';
var CLEAR_TRAINING_DATA = 'CLEAR_TRAINING_DATA';

var TRAINING_START = 'TRAINING_START';
var TRAINING_STOP = 'TRAINING_STOP';

var TOGGLE_MODE = 'TOGGLE_MODE';
var TRAINING = 'TRAINING';
var TESTING = 'TESTING';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_INPUT, 'SET_INPUT', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(ADD_TRAINING_DATA, 'ADD_TRAINING_DATA', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(CLEAR_TRAINING_DATA, 'CLEAR_TRAINING_DATA', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(TRAINING_START, 'TRAINING_START', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(TRAINING_STOP, 'TRAINING_STOP', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(TOGGLE_MODE, 'TOGGLE_MODE', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(TRAINING, 'TRAINING', '/Users/rkrupinski/www/text-recognition/src/constants.js');

  __REACT_HOT_LOADER__.register(TESTING, 'TESTING', '/Users/rkrupinski/www/text-recognition/src/constants.js');
}();

;

/***/ })

},[283]);
//# sourceMappingURL=03112527365b271eb5b2.main.js.map