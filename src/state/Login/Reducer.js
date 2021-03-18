import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
} from './Types';

const user = JSON.parse(localStorage.getItem('user'));
const INITIAL_STATE = user ? { loggedIn: true, user } : {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USER_LOGIN_FAILURE:
      return {};
    case USER_LOGOUT_REQUEST:
      return {};
    default:
      return state;
  }
};
