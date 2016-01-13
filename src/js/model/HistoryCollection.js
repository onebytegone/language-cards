var Backbone = require('backbone'),
    CardHistory = require('./CardHistory');

module.exports = Backbone.Collection.extend({
   model: CardHistory
});
