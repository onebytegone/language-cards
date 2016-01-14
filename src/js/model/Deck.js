var Backbone = require('backbone'),
    DeckBlurb = require('./DeckBlurb'),
    CardCollection = require('./CardCollection');

module.exports = Backbone.Model.extend({
   defaults: {
      blurb: new DeckBlurb(),
      cards: new CardCollection()
   }
});
