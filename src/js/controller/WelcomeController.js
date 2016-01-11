var BaseController = require('./BaseController'),
    PresentationController = require('./PresentationController'),
    WelcomeView = require('../view/WelcomeView'),
    DeckList = require('../view/DeckList'),
    DeckBlurb = require('../model/DeckBlurb'),
    DeckCollection = require('../model/DeckCollection');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new WelcomeView();

      view.on('show', function() {
         var deckList = new DeckList({
            collection: self._listOfDeckBlurbs()
         });

         deckList.on('selected:deck', self._presentDeck.bind(self));
         view.getRegion('decks').show(deckList);
      });

      return view;
   },

   _listOfDeckBlurbs: function() {
      //TODO: pull proper data
      return new DeckCollection([
         new DeckBlurb({
            name: 'Test deck',
            percentCompleted: 0.3,
            cardCount: 99
         }),
         new DeckBlurb({
            name: 'Another deck',
            percentCompleted: 1.0,
            cardCount: 5
         })
      ]);
   },

   _presentDeck: function(blurb) {
      var controller = new PresentationController();

      // TODO: give deck to controller

      this.trigger('present:controller', controller);
   }
});
