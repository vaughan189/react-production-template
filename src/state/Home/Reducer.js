import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
} from './Type';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        items: action.posts,
      };
    case GET_ALL_POSTS_ERROR:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};
