var Backbone = require('backbone'),
    DeckBlurb = require('./DeckBlurb'),
    CardCollection = require('./CardCollection');

module.exports = Backbone.Model.extend({
   defaults: {
      blurb: new DeckBlurb(),
      cards: new CardCollection()
   },

   shuffle: function () {
      this.get('cards').reset(this.get('cards').shuffle(), {silent:true});
   }
});
