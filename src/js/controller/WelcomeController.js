var BaseController = require('./BaseController'),
    PresentationController = require('./PresentationController'),
    WelcomeView = require('../view/WelcomeView'),
    DeckList = require('../view/DeckList'),
    DeckBlurb = require('../model/DeckBlurb'),
    DeckCollection = require('../model/DeckCollection'),
    DirectoryLookup = require('../lib/DirectoryLookup');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new WelcomeView();

      view.on('show', function() {
         DirectoryLookup.fetch()
            .then(function(deckBlurbs) {
               var deckList = new DeckList({ collection: deckBlurbs });
               deckList.on('selected:deck', self._presentDeck.bind(self));
               view.getRegion('decks').show(deckList);
            });
      });

      return view;
   },

   _presentDeck: function(blurb) {
      this.trigger('present:controller', new PresentationController(blurb));
   }
});
