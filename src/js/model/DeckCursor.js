var Backbone = require('backbone'),
    Deck = require('./Deck');

module.exports = Backbone.Model.extend({
   defaults: {
      deck: new Deck(),
      index: 0,
      history: []
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
   }
});
