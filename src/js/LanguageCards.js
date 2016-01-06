var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    WelcomeView = require('./view/WelcomeView'),
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
      var welcomeScreen = new WelcomeView();

      console.log('Initializing...');

      welcomeScreen.on('show', function() {
         welcomeScreen.getRegion('decks').show(new DeckList({
            collection: new DeckCollection([
               new Deck({
                  name: 'Test deck'
               }),
               new Deck({
                  name: 'Another deck'
               })
            ])
         }));
      });

      this.mainRegion.show(welcomeScreen);
   }
});

module.exports = LanguageCards;
