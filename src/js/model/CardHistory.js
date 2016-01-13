var Backbone = require('backbone'),
    Card = require('./Card');

module.exports = Backbone.Model.extend({
   defaults: {
      card: new Card(),
      wasCorrect: false
   }
});
