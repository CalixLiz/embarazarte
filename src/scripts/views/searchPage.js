import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import STORE from '../store'
import ACTIONS from '../actions'
 
import Banner from '../banner'
import User from '../models/userModel'
 
 
       
var SearchPage = React.createClass({
	componentWillMount: function() {
		
		ACTIONS.fetchSearch(this.props.queryProp)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	// componentWillMount is a chance for us to handle configuration, update our state, 
	// At this point, props and initial state are defined. 
	// We can safely query this.props and this.state, 
	// knowing with certainty they are the current values. 
	// This means we can start performing calculations or processes based on the prop values.

	getInitialState: function() {
		return STORE.data
	},

	_showProduct: function(dataProduct) {
		var product = []
		for(var i=0; i<this.state.items.models.length; i++){
			product.push(<Product producDetails={this.state.items.models[i]} />)
		}
	
		return product
	},
 
 	render: function() {
		return (
			  <div>
				  <Banner />
				  <h3>Looks like you are in your {this.state.trimester} trimester</h3>
				  <h4>Here are some products that you might find helpful</h4>
				  <div className='product'>{this._showProduct()}</div>
				</div>
			)
	}
})


var Product = React.createClass({
	render: function() {
		return(
				<div className='products'>
				    <p>{this.props.producDetails.get('name')}</p>
					<img src={this.props.producDetails.get('mediumImage')}/>
				</div>
			)
	} 
})






export default SearchPage








