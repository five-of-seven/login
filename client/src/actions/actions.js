
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOG_INTO_ACCOUNT = 'LOG_INTO_ACCOUNT';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const LOG_INTO_ACCOUNT_STOP = 'LOG_INTO_ACCOUNT_STOP';
export const LOG_INTO_ACCOUNT_COMPLETE = 'LOG_INTO_ACCOUNT_COMPLETE';
export const LOG_INTO_ACCOUNT_SUCCESS = 'LOG_INTO_ACCOUNT_SUCCESS';
export const LOG_INTO_ACCOUNT_FAILURE = 'LOG_INTO_ACCOUNT_FAILURE';
export const BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL = 'BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL';
export const BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD = 'BLOCK_LOG_INTO_ACCOUNT_NO_PASSWOR';
export const REQUIRED_FIELD_FILLED = 'REQUIRED_FIELD_FILLED';


export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
}


export function startAccountLogin() {
  return {
    type: LOG_INTO_ACCOUNT,
  };
}

export function blockAccountLoginWithNoEmail() {
  return {
    type: BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL,
  };
}

export function blockAccountLoginWithNoPassword() {
  return {
    type: BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD,
  };
}

export function toggleShowPassword() {
  return {
    type: TOGGLE_PASSWORD_VISIBILITY,
  };
}

export function requiredFieldFilled(isFilled) {
  return {
    type: REQUIRED_FIELD_FILLED,
    isFilled,
  };
}

export function stopAccountLogin() {
  return {
    type: LOG_INTO_ACCOUNT_STOP,
  };
}

export function completeAccountLogin() {
  return {
    type: LOG_INTO_ACCOUNT_COMPLETE,
  };
}

export function logIntoAccountSuccess(successMessage) {
  return {
    type: LOG_INTO_ACCOUNT_SUCCESS,
    successMessage,
  };
}

export function logIntoAccountFailure(reason) {
  return {
    type: LOG_INTO_ACCOUNT_FAILURE,
    reason,
  };
}

export function logIntoAccount() {
  function asyncAccountLogin(dispatch, getState) {
    const {
      email,
      password,
    } = getState();

    if (email !== null
        && password !== null
    ) {
      dispatch(requiredFieldFilled(true));
      const data = {
        email,
        password,
      };

      const getUrl = `/signingin?email=${email}&password=${password}`;
      dispatch(startAccountLogin());
      return fetch(getUrl, { redirect: 'follow' })
        .then((response) => {
          console.log('signingin response status is...', response.status);
          console.log('response to signingin endpoint is...', response);
          dispatch(stopAccountLogin());
          if (response.redirected) {
            dispatch(completeAccountLogin());
            dispatch(logIntoAccountSuccess('Login Success'));
            window.top.location = response.url;
          } else {
            return response.json();
          }
          return { status: false, reason: 'unknown' };

          // if (response.status !== 401) {
          //   return {
          //     loggedin: true,
          //     url: response.url,
          //   };
          // }
          // return {
          //   loggedin: false,
          //   url: null,
          // };
        })
        .then((jsonResponse) => {
          console.log('Logged in status...', jsonResponse);
          if (jsonResponse.status === false) {
            dispatch(completeAccountLogin());
            dispatch(logIntoAccountFailure(jsonResponse.reason));
          }
          dispatch(completeAccountLogin());
        })
        .catch(error => console.log('not logged in, unknown reason...', error.message));
    }
    if (email === null) {
      dispatch(stopAccountLogin());
      dispatch(blockAccountLoginWithNoEmail());
    }
    if (password === null) {
      dispatch(stopAccountLogin());
      dispatch(blockAccountLoginWithNoPassword());
    }
    return dispatch(requiredFieldFilled(false));
  }

  return asyncAccountLogin;
}
