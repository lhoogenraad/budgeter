import React, { Component } from 'react';
import api from '../services/api';
import Button from '@mui/material/Button/Button';
import notify from '../notify';

class Login extends Component {
	state = {
		username: 'le.o.n@outlook.com',
		password: 'password',
		authToken: '',
	}
	

	signIn = () => {
		api.users.login(this.state.username, this.state.password)
		.then((res) => sessionStorage.setItem("accessToken", res.data))
		.catch((err) => console.error(err));
	}

	render() {
		return (
			<div>
			<h1>Login</h1>
			<div>{this.state.username} <br/> {this.state.password}</div>
			<p>Auth token: {this.state.authToken}</p>
			<Button variant="contained" onClick={() => this.signIn()}>Login</Button>
			</div>
		)
	}
}

export default Login;
