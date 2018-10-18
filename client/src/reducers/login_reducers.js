import {
  LOG_INTO_ACCOUNT,
  LOG_INTO_ACCOUNT_SUCCESS,
  LOG_INTO_ACCOUNT_FAILURE,
  LOG_INTO_ACCOUNT_STOP,
  LOG_INTO_ACCOUNT_COMPLETE,
  BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL,
  BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  REQUIRED_FIELD_FILLED,
} from '../actions/actions';

export function logIntoAccountReducer(state = false, action) {
  switch (action.type) {
    case LOG_INTO_ACCOUNT:
      return true;
    case LOG_INTO_ACCOUNT_STOP:
      return false;
    default:
      return state;
  }
}

export function logIntoAccountSuccessReducer(state = null, action) {
  switch (action.type) {
    case LOG_INTO_ACCOUNT_SUCCESS:
      return 'Login Success';
    case LOG_INTO_ACCOUNT_COMPLETE:
      return 'Login Success';
    default:
      return state;
  }
}

export function logIntoAccountFailureReducer(state = null, action) {
  switch (action.type) {
    case LOG_INTO_ACCOUNT_FAILURE:
      return 'Login Fail';
    case BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL:
      return 'Login Fail';
    case BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD:
      return 'Login Fail';
    default:
      return state;
  }
}

export function failureReasonReducer(state = null, action) {
  switch (action.type) {
    case LOG_INTO_ACCOUNT_FAILURE:
      return action.reason;
    default:
      return state;
  }
}

export function emailEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_LOG_INTO_ACCOUNT_NO_EMAIL:
      return true;
    case UPDATE_EMAIL:
      return false;
    default:
      return state;
  }
}

export function passwordEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_LOG_INTO_ACCOUNT_NO_PASSWORD:
      return true;
    case UPDATE_PASSWORD:
      return false;
    default:
      return state;
  }
}

export function requiredFieldsFilledChecker(state = false, action) {
  switch (action.type) {
    case REQUIRED_FIELD_FILLED:
      return action.isFilled;
    default:
      return state;
  }
}
