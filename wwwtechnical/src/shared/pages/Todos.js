import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';

class Todos extends Component {
    static fetching({dispatch}) {
        return [dispatch(fetchTodos())]
    }

    render() {
        return (
            <div>

            </div>
        );
    }

};
const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    getTodos: () => dispatch(fetchTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
