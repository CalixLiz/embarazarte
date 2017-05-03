import React from 'react'
import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import Banner from '../banner'

import STORE from '../store'
import ACTIONS from '../actions'


var HomePage = React.createClass({
  handleKeyDown: function(obj) {
    var dueDate = obj.target.value
      window.targetDate = dueDate

      var asDate = new Date(targetDate)
      asDate.getTime()
      var diff = new Date().getTime() - asDate.getTime()
      var now = new Date()
      now.getTime() - asDate.getTime()
      asDate.getTime() - now.getTime()
      var diff = asDate.getTime() - now.getTime()
      var result = diff / 60 / 60 / 24 / 30 / 1000
      console.log(result)
         

    if(result < 3) {
      console.log('Trimester 3')
      location.hash = 'search/baby products'
      ACTIONS.setTrimester('Third')

    } 
    else if(result < 6) {
      console.log('Trimester 2')
      location.hash = 'search/pregnant dress'
      ACTIONS.setTrimester('Second')
    } 
    else if(result < 9) {
        console.log('Trimester 1')
      location.hash = 'search/stretch marks'
      ACTIONS.setTrimester('First')

      }
  },

 
  render: function() {
    return (
        <div>
          <Banner />
          <label><span>Due date? <span>*</span></span><input type='date' onChange={this.handleKeyDown}/></label>  
          <label><span>Gender of your baby</span>
          <select>
          <option>Boy</option>
          <option>Girl</option>
          <option>I don't Know</option>
          </select></label> 
        </div>
      )
  }
})



export default HomePage

