var Backbone = require('backbone'),
    _ = require('underscore'),
    Deck = require('./Deck');

module.exports = Backbone.Model.extend({
   defaults: {
      deck: new Deck(),
      index: 0
   },

   hasAnotherCard: function() {
      return this.get('index') + 1 < this.get('deck').get('cards').length;
   },

   currentCard: function() {
      return this.get('deck').get('cards').at(this.get('index'));
   },

   jumpToNextCard: function() {
      if (this.hasAnotherCard()) {
         this.set('index', this.get('index') + 1);
      } else {
         this.set('index', 0);
      }
   },

   toJSON: function() {
      var original = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(original, {
         readableIndex: this.get('index') + 1,
         cardCount: this.get('deck').get('cards').length
      });
   }
});
