import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './Types';
import * as userService from '../../services/apis/Users';
import History from '../../routes/History';

import { showSnackbarAction } from '../../state/SnackBar/Action';

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
        dispatch(showSnackbarAction(error, 'error'));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  History.push('/login');
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
