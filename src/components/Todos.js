import React, { Component } from 'react';

class Todos extends Component {
	render(){
        return this.props.todos.map(todo => 
            <h3 id={todo.id}>{todo.title}</h3>
        );
    };
}

export default Todos;