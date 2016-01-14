var Backbone = require('backbone'),
    _ = require('underscore');

module.exports = Backbone.Model.extend({
   defaults: {
      name: 'Unknown Deck',
      cardCount: 0,
      percentCompleted: 0,
      file: ''
   },

   toJSON: function() {
      var original = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(original, {
         percentCompletedFormated: Math.round(original.percentCompleted * 100)
      });
   }
});
