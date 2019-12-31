import { combineReducers } from 'redux';
import Posts from "./posts";
import Todos from './todos';

export default combineReducers({
    posts: Posts,
    todos: Todos
});