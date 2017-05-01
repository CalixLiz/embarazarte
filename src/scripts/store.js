import Backbone from 'backbone'
import SearchCollection from './collection'
import ACTIONS from './actions'

var STORE = Object.assign({}, Backbone.Events, {
	dataType: 'jsonp',
	data: {
		items : new SearchCollection,
		trimester: 'Third'
	},

	set: function(attrs) {
		this.data = Object.assign(this.data.items, attrs)
		this.trigger('dataUpdated')
	}
})

export default STORE
  