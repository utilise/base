"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = base;

function base(o) {
  return function (k) {
    return o[k];
  };
}

module.exports = exports["default"];
