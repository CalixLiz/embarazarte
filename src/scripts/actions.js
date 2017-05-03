import SearchCollection from './collection'
import STORE from './store'
import LoginPage from './views/loginPage'
import toastr from 'toastr'
import User from './models/userModel'


toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": false,
  "onclick": null,
  "showEasing": "swing"
}




var ACTIONS = {
	fetchSearch: function(query) {
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
		    		toastr.success('you logged out!')
		    		location.hash = 'login'
		    	})
		    .fail( function(err) {
		    	toastr.error('error loging out!')
		    })
	},

	logUserIn: function(email, password) {
		User.login(email, password)
		    .done(
		    	function(resp) {
		    		toastr.success('logged in!')
		    		location.hash = 'home'
		    	}
		    	)
		    .fail(
		    	function(err) {
		    		toastr.error('problem logged in!')
		       	}
		    	)
	},

	registerUser: function(userData) {
		User.register(userData)
		    .done(
		    	function(resp) {
		    		toastr.success(`new user ${resp.email} registered`)
		    		location.hash = 'home'
		    	} 
		    	)
		    .fail(
		    	function(err) {
		    		toastr.error('problem registering user!')
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




