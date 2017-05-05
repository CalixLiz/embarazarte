import React from 'react'



var BabyInfoPage = React.createClass({
	render: function() {
		return(
			<div>
				<Banner02 />
				<p>Fantastic and Fun!!</p>
			</div>
			)
	}
}) 

const Banner02 = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Embaraz Arte</h1>
					<ul>
						<li className='a baby-page'><a href="#login">SIGN UP</a></li>
					</ul>
			</div>
			)
	}
})




export default BabyInfoPage