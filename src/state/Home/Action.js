import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  GET_POSTS_BY_ID_REQUEST,
  GET_POSTS_BY_ID_SUCCESS,
  GET_POSTS_BY_ID_ERROR,
} from './Type';
import * as postsService from '../../services/apis/Post';

const getAllPosts = () => {
  return async (dispatch) => {
    dispatch(request());
    postsService.getAll().then(
      (posts) => {
        dispatch(success(posts));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: GET_ALL_POSTS_REQUEST };
  }
  function success(posts) {
    return { type: GET_ALL_POSTS_SUCCESS, posts };
  }
  function failure(error) {
    return { type: GET_ALL_POSTS_ERROR, error };
  }
};

const getPostById = async () => {
  return (dispatch) => {
    dispatch(request());

    postsService.getById().then(
      (post) => dispatch(success(post)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: GET_POSTS_BY_ID_REQUEST };
  }
  function success(post) {
    return { type: GET_POSTS_BY_ID_SUCCESS, post };
  }
  function failure(error) {
    return { type: GET_POSTS_BY_ID_ERROR, error };
  }
};

export { getAllPosts, getPostById };
