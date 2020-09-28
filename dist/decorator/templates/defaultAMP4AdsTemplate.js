"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var styles = _ref.styles,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'AMP4Ads Demo' : _ref$title;
  return "<!doctype html>\n<html amp4ads lang=\"en\">\n  <head>\n    <meta charSet=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1\">\n    <title>".concat(title, "</title>\n\n    <style amp4ads-boilerplate>body{visibility:hidden}</style>\n    <script async src=\"https://cdn.ampproject.org/amp4ads-v0.js\"></script>\n    <style amp-custom>").concat(styles, "</style>\n\n    <script async custom-element=\"amp-bind\" src=\"https://cdn.ampproject.org/v0/amp-bind-0.1.js\"></script>\n    <script async custom-template=\"amp-mustache\" src=\"https://cdn.ampproject.org/v0/amp-mustache-0.2.js\"></script>\n    <script async custom-element=\"amp-carousel\" src=\"https://cdn.ampproject.org/v0/amp-carousel-0.1.js\"></script>\n    <script async custom-element=\"amp-accordion\" src=\"https://cdn.ampproject.org/v0/amp-accordion-0.1.js\"></script>\n  </head>\n  <body>\n    <!-- STORY CODE -->\n  </body>\n</html>");
};

exports["default"] = _default;