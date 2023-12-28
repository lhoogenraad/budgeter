import React, { Component } from 'react';
import api from '../services/api';

class Login extends Component {
	state = {
		username: 'le.o.n@outlook.com',
		password: '',
		authToken: '',
	}

	componentDidMount(){
		api.users.login(this.state.username, this.state.password)
		.then((res) => this.state.authToken = res.data)
		.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
			<h1>Login</h1>
			<div>{this.state.username} <br/> {this.state.password}</div>
			<p>Auth token: {this.state.authToken}</p>
			</div>
		)
	}
}

export default Login;
