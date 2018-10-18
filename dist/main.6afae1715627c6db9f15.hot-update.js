webpackHotUpdate("main",{

/***/ "./client/src/actions/actions.js":
/*!***************************************!*\
  !*** ./client/src/actions/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateEmail = updateEmail;\nexports.updatePassword = updatePassword;\nexports.startAccountLogin = startAccountLogin;\nexports.blockAccountLoginWithNoEmail = blockAccountLoginWithNoEmail;\nexports.blockAccountLoginWithNoPassword = blockAccountLoginWithNoPassword;\nexports.toggleShowPassword = toggleShowPassword;\nexports.requiredFieldFilled = requiredFieldFilled;\nexports.stopAccountLogin = stopAccountLogin;\nexports.completeAccountLogin = completeAccountLogin;\nexports.logIntoAccountSuccess = logIntoAccountSuccess;\nexports.logIntoAccountFailure = logIntoAccountFailure;\nexports.logIntoAccount = logIntoAccount;\nvar UPDATE_EMAIL = exports.UPDATE_EMAIL = 'UPDATE_EMAIL';\nvar UPDATE_PASSWORD = exports.UPDATE_PASSWORD = 'UPDATE_PASSWORD';\nvar LOG_INTO_ACCOUNT = exports.LOG_INTO_ACCOUNT = 'LOG_INTO_ACCOUNT';\nvar TOGGLE_PASSWORD_VISIBILITY = exports.TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';\nvar LOG_INTO_ACCOUNT_STOP = exports.LOG_INTO_ACCOUNT_STOP = 'LOG_INTO_ACCOUNT_STOP';\nvar LOG_INTO_ACCOUNT_COMPLETE = exports.LOG_INTO_ACCOUNT_COMPLETE = 'LOG_INTO_ACCOUNT_COMPLETE';\nvar LOG_INTO_ACCOUNT_SUCCESS = exports.LOG_INTO_ACCOUNT_SUCCESS = 'LOG_INTO_ACCOUNT_SUCCESS';\nvar LOG_INTO_ACCOUNT_FAILURE = exports.LOG_INTO_ACCOUNT_FAILURE = 'LOG_INTO_ACCOUNT_FAILURE';\nvar BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL = exports.BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL = 'BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL';\nvar BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD = exports.BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD = 'BLOCK_LOG_INTO_ACCOUNT_NO_PASSWOR';\nvar REQUIRED_FIELD_FILLED = exports.REQUIRED_FIELD_FILLED = 'REQUIRED_FIELD_FILLED';\n\nfunction updateEmail(email) {\n  return {\n    type: UPDATE_EMAIL,\n    email: email\n  };\n}\n\nfunction updatePassword(password) {\n  return {\n    type: UPDATE_PASSWORD,\n    password: password\n  };\n}\n\nfunction startAccountLogin() {\n  return {\n    type: LOG_INTO_ACCOUNT\n  };\n}\n\nfunction blockAccountLoginWithNoEmail() {\n  return {\n    type: BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL\n  };\n}\n\nfunction blockAccountLoginWithNoPassword() {\n  return {\n    type: BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD\n  };\n}\n\nfunction toggleShowPassword() {\n  return {\n    type: TOGGLE_PASSWORD_VISIBILITY\n  };\n}\n\nfunction requiredFieldFilled(isFilled) {\n  return {\n    type: REQUIRED_FIELD_FILLED,\n    isFilled: isFilled\n  };\n}\n\nfunction stopAccountLogin() {\n  return {\n    type: LOG_INTO_ACCOUNT_STOP\n  };\n}\n\nfunction completeAccountLogin() {\n  return {\n    type: LOG_INTO_ACCOUNT_COMPLETE\n  };\n}\n\nfunction logIntoAccountSuccess(successMessage) {\n  return {\n    type: LOG_INTO_ACCOUNT_SUCCESS,\n    successMessage: successMessage\n  };\n}\n\nfunction logIntoAccountFailure(reason) {\n  return {\n    type: LOG_INTO_ACCOUNT_FAILURE,\n    reason: reason\n  };\n}\n\nfunction logIntoAccount() {\n  function asyncAccountLogin(dispatch, getState) {\n    var _getState = getState(),\n        email = _getState.email,\n        password = _getState.password;\n\n    if (email !== null && password !== null) {\n      dispatch(requiredFieldFilled(true));\n      var data = {\n        email: email,\n        password: password\n      };\n\n      var getUrl = '/signingin?email=' + email + '&password=' + password;\n      dispatch(startAccountLogin());\n      return fetch(getUrl, { redirect: 'follow' }).then(function (response) {\n        console.log('signingin response status is...', response.status);\n        console.log('response to signingin endpoint is...', response);\n        dispatch(stopAccountLogin());\n        if (response.redirected) {\n          dispatch(logIntoAccountSuccess('Login Success'));\n          window.top.location = response.url;\n        } else {\n          return response.json();\n        }\n        return { status: false, reason: 'unknown' };\n\n        if (response.status !== 401) {\n          return {\n            loggedin: true,\n            url: response.url\n          };\n        }\n        return {\n          loggedin: false,\n          url: null\n        };\n      }, function (error) {\n        console.log('An error occured...', error.message);\n      }).then(function (response) {\n        if (response instanceof Error) {\n          dispatch(stopAccountLogin());\n          dispatch(completeAccountLogin());\n          dispatch(logIntoAccountFailure());\n        }\n        dispatch(stopAccountLogin());\n        dispatch(completeAccountLogin());\n        if (response.loggedin) {\n          dispatch(logIntoAccountSuccess(response.success));\n          window.top.location = response.url;\n        } else {\n          console.log('authentication failure');\n        }\n      });\n    }\n    if (email === null) {\n      dispatch(stopAccountLogin());\n      dispatch(blockAccountLoginWithNoEmail());\n    }\n    if (password === null) {\n      dispatch(stopAccountLogin());\n      dispatch(blockAccountLoginWithNoPassword());\n    }\n    return dispatch(requiredFieldFilled(false));\n  }\n\n  return asyncAccountLogin;\n}\n\n//# sourceURL=webpack:///./client/src/actions/actions.js?");

/***/ })

})