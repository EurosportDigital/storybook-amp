"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _defaultAMPHtmlTemplate = _interopRequireDefault(require("./templates/defaultAMPHtmlTemplate"));

var _getBlodURL = _interopRequireDefault(require("../utils/getBlodURL"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* *************** */
var getAmpHTML = function getAmpHTML(story) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      title = _ref.title,
      styles = _ref.styles,
      baseUrl = _ref.baseUrl;

  var templateFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultAMPHtmlTemplate["default"];
  var innerProps = {
    story: story,
    title: title,
    baseUrl: baseUrl,
    styles: styles && typeof styles === 'string' ? styles : ''
  };

  var storyContent = _server["default"].renderToStaticMarkup(story());
  /* FIXME: FIX due to storybook-readme */


  if (storyContent.includes('<div class="storybook-readme-story">')) {
    storyContent = storyContent.replace('<div class="storybook-readme-story">', '').replace(new RegExp('</div>$'), '');
  }
  /* ****************** */


  return templateFunc(innerProps).replace('<!-- STORY CODE -->', storyContent);
};
/* *************** */


var withAmpReactSsrDecorator = function withAmpReactSsrDecorator(storyFn) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref2 = arguments.length > 2 ? arguments[2] : undefined,
      parameters = _ref2.parameters;

  var _parameters$styles = parameters.styles,
      styles = _parameters$styles === void 0 ? '' : _parameters$styles,
      _parameters$isEnabled = parameters.isEnabled,
      isEnabled = _parameters$isEnabled === void 0 ? false : _parameters$isEnabled,
      _parameters$template = parameters.template,
      template = _parameters$template === void 0 ? 'amphtml' : _parameters$template,
      _parameters$scripts = parameters.scripts,
      scripts = _parameters$scripts === void 0 ? [] : _parameters$scripts;

  if (!isEnabled) {
    return storyFn();
  }

  var ampHtml = getAmpHTML(storyFn, {
    title: 'AMP Demo',
    styles: styles,
    baseUrl: window.location.origin
  });
  var blodURL = (0, _getBlodURL["default"])(ampHtml, 'text/html');
  /* *************** */

  var channel = _addons["default"].getChannel();

  channel.emit(_constants["default"].AMP_HTML_RESULT, {
    ampHtml: ampHtml
  });
  /* *************** */

  if (window.self === window.top) {
    location.href = blodURL;

    var EmptyElement = function EmptyElement() {
      return null;
    };

    return /*#__PURE__*/_react["default"].createElement(EmptyElement, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "body { position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 0; margin: 0; }"
    }
  }), /*#__PURE__*/_react["default"].createElement("iframe", {
    src: blodURL,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      backgroundColor: '#fff'
    }
  }));
};

var _default = withAmpReactSsrDecorator; // if (true) { // if mobile
//   ampHtml = ampHtml.replace('</head>', `<style>*{cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEbSURBVDiNndMxK4ZRGMbx3zmRMrwvM2XCQFFik/IJpCw+hJLPgfIhLBY+gEEGJQPFwGZg9TIoBrfhOfSQHl7XeM7/fw3nvk+KCPWklEawgGlMlOMrnOMoIm6/8B8FKaWMFazhGQ94LFwbg+jHDvYi4u2zIKWUsIk5XNfE72ljHKfYiIjI5WIZMzhrkJW7s8IuQ8IwdnGDpwa5nhbGsJqxiNcuZIV9xWJWvXY3cr1kOmMSnX8UdDCZEb+RDYmMS9WMu80gLrNqw1r/KGjhPOMQvaol+Wva6MFhjoh7bGEUuVGrkgu7HRH3H8IBTjCLgQZ5oDAnxfnymRKWsI4X1Zw7NbGFPmxjP4qYfvjOQ5jHlGpHqCZ1geOIuKvz76QSW1T3cwmnAAAAAElFTkSuQmCC') 10 10, auto !important; }</style></head>`);
// }

exports["default"] = _default;