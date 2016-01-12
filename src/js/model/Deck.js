var Backbone = require('backbone'),
    DeckBlurb = require('./DeckBlurb'),
    CardCollection = require('./CardCollection');

module.exports = Backbone.Model.extend({
   defaults: {
      blurb: new DeckBlurb(),
      cards: new CardCollection()
   }
}, {
   createFromBlurb: function(blurb) {
      var deck = new this({
         blurb: blurb,
         cards: new CardCollection([
            {
               a: "word",
               b: "answer"
            },
            {
               a: "palabra",
               b: "responder"
            }
         ])
      });

      //TODO: load data from source file

      return deck;
   }
});
