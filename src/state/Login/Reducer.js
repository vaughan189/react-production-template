import * as types from './Types';

const user = JSON.parse(localStorage.getItem('user'));
const INITIAL_STATE = user ? { loggedIn: true, user } : {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};