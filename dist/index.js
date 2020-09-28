"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function get() {
    return _manager.register;
  }
});
exports["default"] = exports.withAmpDecorator = void 0;

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var _decorator = _interopRequireDefault(require("./decorator"));

var _manager = require("./manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withAmpDecorator = (0, _addons.makeDecorator)({
  name: 'withAmpDecorator',
  parameterName: _constants.PARAM_KEY,
  wrapper: function wrapper(storyFn, context, _ref) {
    var parameters = _ref.parameters;
    return (0, _decorator["default"])(storyFn, context, {
      parameters: parameters
    });
  }
});
exports.withAmpDecorator = withAmpDecorator;

var _default = function _default() {};

exports["default"] = _default;