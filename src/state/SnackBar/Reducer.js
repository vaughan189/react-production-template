import * as types from './Types';

const INITIAL_STATE = {
  isOpen: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: action.snackbarType,
      };
    case types.HIDE_SNACKBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
