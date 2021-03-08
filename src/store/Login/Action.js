import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './Types';
import * as userService from '../../network/apis/Users';
import History from '../../routes/History';

const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        History.push('/home');
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};

const request = (user) => {
  return { type: LOGIN_REQUEST, user };
};
const success = (user) => {
  return { type: LOGIN_SUCCESS, user };
};
const failure = (error) => {
  return { type: LOGIN_FAILURE, error };
};

export { login, logout };