var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    WelcomeView = require('./view/WelcomeView'),
    WordCard = require('./view/WordCard'),
    DeckList = require('./view/DeckList'),
    Deck = require('./model/Deck'),
    DeckCollection = require('./model/DeckCollection');

var LanguageCards = Marionette.Application.extend({
   run: function() {
      this.addInitializer(this._initialize);

      this.addRegions({
         mainRegion: "#wrapper"
      });

      this.start();
   },

   _initialize: function() {
      var self = this,
          welcomeScreen = new WelcomeView();

      console.log('Initializing...');

      welcomeScreen.on('show', function() {
         var deckList = new DeckList({
            collection: new DeckCollection([
               new Deck({
                  name: 'Test deck',
                  percentCompleted: 0.3,
                  cardCount: 99
               }),
               new Deck({
                  name: 'Another deck',
                  percentCompleted: 1.0,
                  cardCount: 5
               })
            ])
         });

         deckList.on('selected:deck', function(model) {
            self._showWordCard();
         });

         welcomeScreen.getRegion('decks').show(deckList);
      });

      this.mainRegion.show(welcomeScreen);
   },

   //TODO: this is not the place for this, please move
   _showWordCard: function() {
      var self = this,
          wordCard = new WordCard();

      this.mainRegion.show(wordCard);
   },
});

module.exports = LanguageCards;
