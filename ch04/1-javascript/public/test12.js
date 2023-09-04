"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(arrays) {
  return arrays.reduce(function (total, val) {
    return total + val;
  }, 0);
}