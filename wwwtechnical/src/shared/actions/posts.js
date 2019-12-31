import axios from 'axios';

import {
  ROOT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "./types";


export const fetchPosts = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_POSTS });
    const res = await axios.get(`${ROOT}/posts`);
    console.log('result Posts', res)
    dispatch({ type: RECEIVE_POSTS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_POSTS, payload: [] });
  }
};
