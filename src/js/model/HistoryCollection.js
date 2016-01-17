var Backbone = require('backbone'),
    CardHistory = require('./CardHistory');

module.exports = Backbone.Collection.extend({
   model: CardHistory,
   toJSON: function() {
      var correct = this.filter('wasCorrect').length;
      return {
         numberCorrect: correct,
         percentageCorrect: Math.round(correct / this.length * 100)
      };
   }
});
