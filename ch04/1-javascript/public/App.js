"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bootstrap/dist/css/bootstrap.css");

var _test = _interopRequireDefault(require("./test12"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
var arrays = [10, 20, 30, 40, 50];
var sum = (0, _test.default)(arrays);
console.log("Total: ".concat(sum));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = _react.default.createElement("h1", null, "Hello, ", formatName(user), "!");

_reactDom.default.render(element, document.getElementById('root'));