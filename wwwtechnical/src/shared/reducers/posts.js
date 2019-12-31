import {
    REQUEST_POSTS,
    RECEIVE_POSTS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_POSTS: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_POSTS: {
        return { ...state, isFetching: false, data: action.payload };
      }
      default:
        return state;
    }
  };