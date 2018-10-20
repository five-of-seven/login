webpackHotUpdate("main",{

/***/ "./client/src/components/Login.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Login.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nvar _Email = __webpack_require__(/*! @material-ui/icons/Email */ \"./node_modules/@material-ui/icons/Email.js\");\n\nvar _Email2 = _interopRequireDefault(_Email);\n\nvar _VpnKey = __webpack_require__(/*! @material-ui/icons/VpnKey */ \"./node_modules/@material-ui/icons/VpnKey.js\");\n\nvar _VpnKey2 = _interopRequireDefault(_VpnKey);\n\nvar _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ \"./node_modules/@material-ui/icons/VisibilityOff.js\");\n\nvar _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);\n\nvar _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ \"./node_modules/@material-ui/icons/Visibility.js\");\n\nvar _Visibility2 = _interopRequireDefault(_Visibility);\n\nvar _AccountBox = __webpack_require__(/*! @material-ui/icons/AccountBox */ \"./node_modules/@material-ui/icons/AccountBox.js\");\n\nvar _AccountBox2 = _interopRequireDefault(_AccountBox);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    paper: {\n      // height: 140,\n      // width: 100,\n      padding: theme.spacing.unit * 2,\n      textAlign: 'center',\n      color: theme.palette.text.secondary\n    },\n    control: {\n      padding: theme.spacing.unit * 2\n    }\n  };\n};\n\n// class Signup extends React.Component {\n//   constructor(props) {\n//     super(props);\n//   }\n\n//   render() {\n//     const {\n//       onFirstNameChange,\n//       onLastNameChange,\n//       onEmailChange,\n//       onPasswordChange,\n//       onZipcodeChange,\n//       createAccount,\n//     } = this.props;\n\nfunction Login(props) {\n  var onEmailChange = props.onEmailChange,\n      onPasswordChange = props.onPasswordChange,\n      logIntoAccount = props.logIntoAccount,\n      onClickShowPassword = props.onClickShowPassword,\n      showPassword = props.showPassword,\n      emailNotEntered = props.emailNotEntered,\n      passwordNotEntered = props.passwordNotEntered,\n      loginFailureReason = props.loginFailureReason,\n      classes = props.classes;\n\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _core.Grid,\n      { container: true, className: classes.root, spacing: 12 },\n      _react2.default.createElement(\n        'form',\n        null,\n        _react2.default.createElement(\n          _core.Grid,\n          { item: true, xs: 12 },\n          _react2.default.createElement(\n            _core.Paper,\n            null,\n            _react2.default.createElement(_core.TextField, {\n              required: true,\n              error: emailNotEntered,\n              id: 'login-email-address',\n              label: 'Email',\n              placeholder: 'drone@globex.com',\n              onChange: function onChange(event) {\n                return onEmailChange(event.target.value);\n              },\n              InputProps: {\n                startAdornment: _react2.default.createElement(\n                  _core.InputAdornment,\n                  { position: 'start' },\n                  _react2.default.createElement(_Email2.default, null)\n                )\n              }\n            })\n          )\n        ),\n        _react2.default.createElement(\n          _core.Grid,\n          { item: true, xs: 12 },\n          _react2.default.createElement(\n            _core.Paper,\n            null,\n            _react2.default.createElement(\n              _core.FormControl,\n              { required: true, error: passwordNotEntered },\n              _react2.default.createElement(\n                _core.InputLabel,\n                { error: passwordNotEntered, htmlFor: 'login-password', className: 'password' },\n                'Password'\n              ),\n              _react2.default.createElement(_core.Input, {\n                error: passwordNotEntered,\n                type: showPassword ? 'text' : 'password',\n                id: 'login-password',\n                className: 'password',\n                startAdornment: _react2.default.createElement(\n                  _core.InputAdornment,\n                  { position: 'start' },\n                  _react2.default.createElement(_VpnKey2.default, null)\n                ),\n                endAdornment: _react2.default.createElement(\n                  _core.InputAdornment,\n                  { position: 'end' },\n                  _react2.default.createElement(\n                    _core.IconButton,\n                    {\n                      'aria-label': 'Toggle password visibility',\n                      onClick: onClickShowPassword,\n                      onMouseDown: function onMouseDown(event) {\n                        return event.preventDefault();\n                      }\n                    },\n                    showPassword ? _react2.default.createElement(_VisibilityOff2.default, null) : _react2.default.createElement(_Visibility2.default, null)\n                  )\n                ),\n                onChange: function onChange(event) {\n                  return onPasswordChange(event.target.value);\n                }\n              })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _core.Grid,\n          { item: true, xs: 12 },\n          _react2.default.createElement(\n            _core.Paper,\n            null,\n            _react2.default.createElement(\n              _core.Button,\n              { variant: 'contained', color: 'primary', onClick: function onClick() {\n                  return logIntoAccount();\n                } },\n              'Login',\n              _react2.default.createElement(\n                _core.Icon,\n                null,\n                _react2.default.createElement(_AccountBox2.default, null)\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _core.Grid,\n          { item: true, xs: 12 },\n          _react2.default.createElement(\n            _core.Paper,\n            null,\n            loginFailureReason !== null ? _react2.default.createElement(\n              _core.Grid,\n              { item: true, xs: 12 },\n              _react2.default.createElement(\n                _core.InputLabel,\n                { htmlFor: 'login-error' },\n                'Login failed, ' + loginFailureReason\n              )\n            ) : null\n          )\n        )\n      )\n    )\n  );\n}\n\nLogin.propTypes = {\n  onEmailChange: _propTypes2.default.func.isRequired,\n  onPasswordChange: _propTypes2.default.func.isRequired,\n  logIntoAccount: _propTypes2.default.func.isRequired,\n  onClickShowPassword: _propTypes2.default.func.isRequired,\n  showPassword: _propTypes2.default.bool.isRequired,\n  emailNotEntered: _propTypes2.default.bool.isRequired,\n  passwordNotEntered: _propTypes2.default.bool.isRequired\n};\n\n// Signup.defaultProps = {\n//   onFirstNameChange: event => event.target.value,\n//   onLastNameChange: event => event.target.value,\n//   onEmailChange: event => event.target.value,\n//   onPasswordChange: event => event.target.value,\n//   onZipcodeChange: event => event.target.value,\n//   createAccount: event => event.target.value,\n// };\n\nexports.default = (0, _reactHotLoader.hot)(module)((0, _styles.withStyles)(styles)(Login));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/src/components/Login.jsx?");

/***/ })

})