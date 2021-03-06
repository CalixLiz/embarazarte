import React from 'react'
import Banner from '../banner'
import ACTIONS from '../actions'

//LogIn Page, where everything start!


const LoginPage = React.createClass({
	render: function() {
		return(
			<div className="login-page">
			  <Banner01 />
			  <RegisterForm />
				<LoginForm />
			</div>
			) 
	}
}) 

const Banner01 = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Embaraz Arte</h1>
					<ul> 
						<li className='a loginpage'><a href="#baby">BABY INFO</a></li>
					</ul>				
			</div>
			)
	}
})

const RegisterForm = React.createClass({
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		var userData = {
			name: formEl.yourName.value,
			email: formEl.email.value,
			password: formEl.password.value
		}
		ACTIONS.registerUser(userData)
	},


	render: function() {
		return(
			<div className="registerForm">
			    <h3>Register</h3>
				<form onSubmit={this._handleSubmit} className="register-form">
					<input type="text" name="yourName" placeholder="Enter your Name" />
					<input type="text" name="email" placeholder="Enter your Email" />
					<input type="password" name="password" placeholder="Enter your Password" />
					<button type="submit">Submit</button>
				</form>
			</div>
			)
	}
})

 
const LoginForm = React.createClass({
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		ACTIONS.logUserIn(evtObj.target.email.value, evtObj.target.password.value)
	},


	render: function() {
		return(
			<div className="loginForm">
			    <h3>Log In</h3>
				<form onSubmit={this._handleSubmit} className="login-form">
					<input type="text" name="email" placeholder="Enter your Email" />
					<input type="password" name="password" placeholder="Enter your Password" />
					<button type="submit">Submit</button>
				</form>
			</div>
			)
	}
})
  


export default LoginPage