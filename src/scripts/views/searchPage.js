import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import STORE from '../store'
import ACTIONS from '../actions'
 
import Banner from '../banner'
 
 
       
var SearchPage = React.createClass({
	componentWillMount: function() {
		console.log('a component will mount')

		ACTIONS.fetchSearch(this.props.queryProp)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState: function() {
		return STORE.data
	},

	_showProduct: function(dataProduct) {
		var product = []
		for(var i=0; i<this.state.items.models.length; i++){
			product.push(<Product producDetails={this.state.items.models[i]} />)
		}
		console.log(product)
		return product
	},
 
 	render: function() {
		console.log('collection is that you?', this.props)
		console.log('or are you here?', this.state.items)
		console.log('MMS',this.state.trimester)

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








