import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (ev) => this.setState({ 
        [ev.target.name]: ev.target.value 
    });

    render(){
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex:'10',padding:'5px'}} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;