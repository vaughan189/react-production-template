import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
} from './Types';
import * as userService from '../../services/apis/Users';
import History from '../../routes/History';

import { SnackbarActions } from '../../state/Actions';

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
        dispatch(SnackbarActions.showSnackbarAction(error, 'error'));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  History.push('/login');
  return { type: USER_LOGOUT_REQUEST };
};

const request = (user) => {
  return { type: USER_LOGIN_REQUEST, user };
};
const success = (user) => {
  return { type: USER_LOGIN_SUCCESS, user };
};
const failure = (error) => {
  return { type: USER_LOGIN_FAILURE, error };
};

export { login, logout };
