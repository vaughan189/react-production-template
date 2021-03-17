import * as types from './Types';

export const showSnackbarAction = (message, snackbarType) => {
  return {
    type: types.SHOW_SNACKBAR,
    message,
    snackbarType,
  };
};

export const hideSnackbarAction = () => {
  return {
    type: types.HIDE_SNACKBAR,
  };
};
