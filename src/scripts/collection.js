import React from 'react'
import Backbone from 'backbone'


var SearchCollection = Backbone.Collection.extend({
  url: 'http://api.walmartlabs.com/v1/search',
  apiKey:'hf6paeuxsq3yuzrryedzasa6',
   
  parse: function(apiResponse) {
	return apiResponse.items
  }
})

export default SearchCollection