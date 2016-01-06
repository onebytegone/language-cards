var Backbone = require('backbone'),
    Deck = require('./Deck');

module.exports = Backbone.Collection.extend({
   model: Deck
});
