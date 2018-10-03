import { combineReducers } from 'redux';
import {
  email,
  password,
  toggleShowPassword,
} from './form_field_reducers';
import {
  logIntoAccountReducer,
  logIntoAccountSuccessReducer,
  logIntoAccountFailureReducer,
  emailEntryChecker,
  passwordEntryChecker,
  requiredFieldsFilledChecker,
} from './login_reducers';

export default combineReducers({
  email,
  password,
  showPassword: toggleShowPassword,
  isLoggingIntoAccount: logIntoAccountReducer,
  isLogIntoAccountSuccess: logIntoAccountSuccessReducer,
  isLogIntoAccountFailure: logIntoAccountFailureReducer,
  emailNotEntered: emailEntryChecker,
  passwordNotEntered: passwordEntryChecker,
  requiredFieldsFilled: requiredFieldsFilledChecker,
});
