import React, { Component } from 'react'
import Login from './component/Login'
// import PropTypes from 'prop-types'

export default class App extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// }

	constructor(props){
        super(props)
        this.state = {
			isLogin: false,
			username: '',
			password: ''
        }
	}
	
	change = input => e => {
		this.setState({[input]: e.target.value});
	}

	submit = param => e => {
		console.log(this.state)
	}

	render() {
		const { isLogin, value = { ...this.state } } = this.state;

		if(!isLogin){
			return (
				<Login prChange={this.change} prSubmit={this.submit}>
				</Login>
			)
		}else{

		}
	}
}