var Backbone = require('backbone'),
    Card = require('./Card');

module.exports = Backbone.Collection.extend({
   model: Card
});
