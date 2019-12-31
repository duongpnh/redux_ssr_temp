import {
    REQUEST_TODOS,
    RECEIVE_TODOS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_TODOS: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_TODOS: {
        return { ...state, isFetching: false, data: action.payload };
      }
      default:
        return state;
    }
  };