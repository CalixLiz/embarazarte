import SearchCollection from './collection'
import STORE from './store'
import LoginPage from './views/loginPage'
import $ from 'jquery'
import User from './models/userModel'



toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}



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




