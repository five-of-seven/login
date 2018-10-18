webpackHotUpdate("main",{

/***/ "./client/src/containers/LoginContainer.jsx":
/*!**************************************************!*\
  !*** ./client/src/containers/LoginContainer.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _actions = __webpack_require__(/*! ../actions/actions */ \"./client/src/actions/actions.js\");\n\nvar _Login = __webpack_require__(/*! ../components/Login */ \"./client/src/components/Login.jsx\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onEmailChange: function onEmailChange(email) {\n      return dispatch((0, _actions.updateEmail)(email));\n    },\n    onPasswordChange: function onPasswordChange(password) {\n      return dispatch((0, _actions.updatePassword)(password));\n    },\n    logIntoAccount: function logIntoAccount() {\n      return dispatch((0, _actions.logIntoAccount)());\n    },\n    onClickShowPassword: function onClickShowPassword() {\n      return dispatch((0, _actions.toggleShowPassword)());\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var showPassword = _ref.showPassword,\n      emailNotEntered = _ref.emailNotEntered,\n      passwordNotEntered = _ref.passwordNotEntered,\n      loginFailureReason = _ref.loginFailureReason;\n  return {\n    showPassword: showPassword,\n    emailNotEntered: emailNotEntered,\n    passwordNotEntered: passwordNotEntered,\n    loginFailureReason: loginFailureReason\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);\n\n//# sourceURL=webpack:///./client/src/containers/LoginContainer.jsx?");

/***/ })

})