var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    WordCard = require('./view/WordCard'),
    AnswerCard = require('./view/AnswerCard'),
    WelcomeController = require('./controller/WelcomeController');

var LanguageCards = Marionette.Application.extend({
   run: function() {
      this.addInitializer(this._initialize);

      this.addRegions({
         mainRegion: "#wrapper"
      });

      this.start();
   },

   _initialize: function() {
      console.log('Initializing...');

      this._present(new WelcomeController());
   },

   _present: function(controller) {
      controller.on('present:controller', this._present.bind(this));
      this.mainRegion.show(controller.fetchView());
   },

   //TODO: this is not the place for this, please move
   _showWordCard: function() {
      var self = this,
          wordCard = new WordCard();

      wordCard.on('flip:card', function() {
         self._showAnswerCard();
      });

      wordCard.on('home:pressed', function() {
         self._showWelcomeScreen();
      });

      this.mainRegion.show(wordCard);
   },

   //TODO: this is not the place for this, please move
   _showAnswerCard: function() {
      var self = this,
          answerCard = new AnswerCard();

      answerCard.on('next:card', function() {
         self._showWordCard();
      });

      answerCard.on('home:pressed', function() {
         self._showWelcomeScreen();
      });

      this.mainRegion.show(answerCard);
   }
});

module.exports = LanguageCards;
