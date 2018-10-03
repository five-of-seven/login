import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  TOGGLE_PASSWORD_VISIBILITY,
} from '../actions/actions';

export function email(state = null, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return action.email === '' ? null : action.email;
    default:
      return state;
  }
}

export function password(state = null, action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.password === '' ? null : action.password;
    default:
      return state;
  }
}

export function toggleShowPassword(state = false, action) {
  switch (action.type) {
    case TOGGLE_PASSWORD_VISIBILITY:
      return !state;
    default:
      return state;
  }
}
