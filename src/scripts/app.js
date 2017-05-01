import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
 
import HomePage from './views/homePage'
import SearchCollection from './collection'
import SearchPage from './views/searchPage'
import LoginPage from './views/loginPage'

import STORE from './store'
 

const app = function() {
  

		var PageRouter = Backbone.Router.extend({
		  routes: {
		  	"login": "loginPage",
		    "home": "homePage",
		    "search/:query": "makeaSearch",
		    "*default": "redirect"
		  },

		  loginPage: function() {
		  	ReactDOM.render(<LoginPage />, document.querySelector('.container'))
		  },

		  homePage: function() {
		  	ReactDOM.render(<HomePage />, document.querySelector('.container'))
		  },

		  makeaSearch: function(query) {
			  console.log('MAKING THE SEARCH')

			  ReactDOM.render(<SearchPage
			  	queryProp= {query} />, document.querySelector('.container'))		    
		  },

		  redirect: function() {
		    location.hash = 'login'
		    console.log("HOME SWEET HOME")
		  }

		})

		new PageRouter
		Backbone.history.start()


}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..