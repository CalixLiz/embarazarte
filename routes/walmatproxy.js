// let Router = require('express').Router;
// const proxyRouter = Router()

// var apiKey = require('../config/secrets').apiKey
// var request = require('request') 

// var url = 'http://api.walmartlabs.com/v1/search'

// var makeQueryString = (opj) => {
// 		var outputString = ''
// 		for (var prop in obj){
// 			outputString += prop + '=' + obj[prop] + '&'
// 		}
// 		outputString = '?' + outputString
// 		return outputString.slice(0,-1)
// }
// proxyRouter.get(function(clientRequest, clientResponse) {
// 	request.query.apiKey = apiKey
// 	var queryString = makeQueryString(clientRequest.query)

// 	request(url + queryString, function(err, response, body) {
// 		if(err){
// 			return clientResponse.status(400).json(err)
// 		}

// 		clientResponse.json
// 	})

// })
// // proxyRouter.get('/:query', (clientRequest, clientResponse)=>{
// // 	var 
// // })

// module.exports = proxyRouter
