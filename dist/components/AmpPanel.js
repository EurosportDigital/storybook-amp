"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _coreEvents = require("@storybook/core-events");

var _constants = _interopRequireDefault(require("../constants"));

var _getBase64ForAMPValidator = _interopRequireDefault(require("../utils/getBase64ForAMPValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AmpPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(AmpPanel, _React$Component);

  var _super = _createSuper(AmpPanel);

  function AmpPanel() {
    var _this;

    _classCallCheck(this, AmpPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      sourceCode: ''
    });

    _defineProperty(_assertThisInitialized(_this), "refreshData", function (data) {
      _this.setState({
        sourceCode: data && data.ampHtml ? data.ampHtml : ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onStoryChange", function (id) {
      _this.setState({
        sourceCode: ''
      });
    });

    return _this;
  }

  _createClass(AmpPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          api = _this$props.api,
          channel = _this$props.channel;
      api.on(_coreEvents.STORY_CHANGED, this.onStoryChange);
      channel.on(_constants["default"].AMP_HTML_RESULT, this.refreshData);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          api = _this$props2.api,
          channel = _this$props2.channel;
      api.off(_coreEvents.STORY_CHANGED, this.onStoryChange);
      channel.removeListener(_constants["default"].AMP_HTML_RESULT, this.refreshData);
    }
  }, {
    key: "render",
    value: function render() {
      // #htmlFormat=AMP4ADS
      // #htmlFormat=AMP4EMAIL
      // #htmlFormat=ACTIONS
      var sourceCode = this.state.sourceCode;
      var active = this.props.active;
      return active ? /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: 15
        }
      }, sourceCode && /*#__PURE__*/_react["default"].createElement(_components.Button, {
        small: true,
        outline: true,
        isLink: true,
        target: "_blank",
        href: "https://validator.ampproject.org/#doc=".concat((0, _getBase64ForAMPValidator["default"])(sourceCode))
      }, "Validate"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "storybook-amp-source-code",
        style: {
          backgroundColor: '#f6f8fa',
          borderLeft: '1px solid #e5e5e5',
          marginTop: 15
        }
      }, /*#__PURE__*/_react["default"].createElement(_components.SyntaxHighlighter, {
        language: "html",
        showLineNumbers: false,
        format: true,
        copyable: true,
        padded: true
      }, sourceCode))) : null;
    }
  }]);

  return AmpPanel;
}(_react["default"].Component);

var _default = AmpPanel;
exports["default"] = _default;