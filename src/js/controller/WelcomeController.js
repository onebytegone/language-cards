var BaseController = require('./BaseController'),
    PresentationController = require('./PresentationController'),
    WelcomeView = require('../view/WelcomeView'),
    DeckList = require('../view/DeckList'),
    DeckBlurb = require('../model/DeckBlurb'),
    DeckCollection = require('../model/DeckCollection'),
    DirectoryLookup = require('../lib/DirectoryLookup'),
    DeckLookup = require('../lib/DeckLookup');

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
      var self = this;

      DeckLookup.fetch(blurb)
         .then(function(deck) {
            self.trigger('present:controller', new PresentationController(deck));
         });
   }
});
