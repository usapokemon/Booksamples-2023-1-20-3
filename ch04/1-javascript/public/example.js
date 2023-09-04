"use strict";

var _test = _interopRequireDefault(require("./test12"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrays = [10, 20, 30, 40, 50];
var sum = (0, _test.default)(arrays);
console.log("Total: ".concat(sum));