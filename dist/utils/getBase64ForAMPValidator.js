"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// ucs-2 string to base64 encoded ascii
var _default = function _default(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
};

exports["default"] = _default;