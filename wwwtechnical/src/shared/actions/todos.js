import axios from 'axios';

import {
  ROOT,
  REQUEST_TODOS,
  RECEIVE_TODOS
} from "./types";


export const fetchTodos = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_TODOS });
    const res = await axios.get(`${ROOT}/todos`);

    console.log('result', res)
    dispatch({ type: RECEIVE_TODOS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_TODOS, payload: [] });
  }
};
