import SearchCollection from './collection'
import STORE from './store'
import LoginPage from './views/loginPage'

import User from './models/userModel'


var ACTIONS = {
	fetchSearch: function(query) {
		console.log(STORE)
		var searchInstance = STORE.data.items
		var promise = searchInstance.fetch({  
			dataType: 'jsonp',
			data: {
				'query': query,
				'apiKey': searchInstance.apiKey
			}
		}) 

		promise.then(() => {
			STORE.set({
				items: searchInstance
			}) 
		}) 
	},

	logout: function() {
		User.logout()
		    .done(
		    	function(resp) {
		    		alert('you logged out!')
		    		location.hash = 'login'
		    	})
		    .fail( function(err) {
		    	alert('error loging out!')
		    	console.log(err)
		    })
	},

	logUserIn: function(email, password) {
		User.login(email, password)
		    .done(
		    	function(resp) {
		    		//use toaster here in place of alert any alert
		    		alert('logged in!')
		    		console.log(resp)
		    		location.hash = 'home'
		    	}
		    	)
		    .fail(
		    	function(err) {
		    		alert('problem logged in!')
		    		console.log(err)
		    	}
		    	)
	},

	registerUser: function(userData) {
		User.register(userData)
		    .done(
		    	function(resp) {
		    		//use toaster here in place of alert any alert
		    		alert(`new user ${resp.email} registered`)
		    		console.log(resp)
		    	} 
		    	)
		    .fail(
		    	function(err) {
		    		alert('problem registering user!')
		    		console.log(err)
		    	}
		    	)
	},

	setTrimester: function(newTrimester) {
			STORE.set({
				trimester: newTrimester
			})       
	}

}




export default ACTIONS 




