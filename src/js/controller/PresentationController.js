var BaseController = require('./BaseController'),
    DeckCard = require('../view/DeckCard');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new DeckCard();

      return view;
   }
});
