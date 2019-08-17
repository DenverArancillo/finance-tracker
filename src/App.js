import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import Header from './components/layout/Header';
import About from './components/pages/About';
import './assets/css/App.css';

import Ajax from './assets/js/classes';

class App extends Component {
	state = {
		todos: []
	}
	
	componentDidMount(){
		(async (self) => {
			let data = new Ajax('GET', 'https://jsonplaceholder.typicode.com/todos?limit=10');
			self.setState({
				todos: await data.send()
			})
		})(this)
	}

	// Toggle Complete
	markComplete = id => {
        this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id){
					todo.completed = !todo.completed;
				}
				return todo;
			}) 
		})
	}
	
	// Delete Todo
	delTodo = id => {
		this.setState({
			todos: [ ...this.state.todos.filter(todo => todo.id !== id) ]
		});
	}

	// Add Todo
	addTodo = title => {
		let newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render(){
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header/>
						<Route exact path="/" render={props => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo}/>
								<Todos todos={this.state.todos} 
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>
							</React.Fragment>
						)}/>
						<Route path="/about" component={About}/>
					</div>
				</div>
			</Router>
		)
	}
}

export default App;