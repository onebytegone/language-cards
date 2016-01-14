var $ = require('jquery'),
    config = require('config'),
    Deck = require('../model/Deck'),
    CardCollection = require('../model/CardCollection');

module.exports = {
   fetch: function(blurb) {
      return $.get(config.DataBasePath + '/' + blurb.get('file'))
         .then(function(rawData) {
            return new Deck({
               blurb: blurb,
               cards: new CardCollection(rawData.cards)
            });
         });
   }
};
