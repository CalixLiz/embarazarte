import Backbone from 'backbone'

export const InfoModel = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
}) 