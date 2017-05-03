import React from 'react'
import Backbone from 'backbone'
import ACTIONS from './actions'
import User from './models/userModel'


var Banner = React.createClass({

	render: function() {
		console.log(`welcome ${this.name}`)
		return (
			<div>
				<h1>Embaraz Arte</h1>
					<div>
						<ul>
							<li className='a'><a href="#home">HOME</a></li>
							<li className='a'><a href="#otherpage">OTHER PAGE</a></li>
							<li className='a'><a href="#login">SIGN UP</a></li>
							<li className='a'><a onClick = {ACTIONS.logout} >LOG OUT</a></li>
						</ul>
						<h2 className='user-welcome'>Welcome User</h2>
					</div> 
			</div>
			)
	}
}) 
 
export default Banner
  