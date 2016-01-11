var BaseController = require('./BaseController'),
    DeckCard = require('../view/DeckCard'),
    WordSide = require('../view/WordSide'),
    AnswerSide = require('../view/AnswerSide');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new DeckCard();

      view.on('show', function() {
         //TODO: pass model
         self._showWord();
      });

      view.on('home:pressed', function() {
         self.trigger('go:welcomescreen');
      });

      return view;
   },

   _showWord: function() {
      var self = this,
          side = new WordSide();

      side.on('flip:card', function() {
         //TODO: pass model
         self._showAnswer();
      });

      this.fetchView().getRegion('contents').show(side);
   },

   _showAnswer: function() {
      var self = this,
          side = new AnswerSide();

      side.on('next:card', function() {
         //TODO: next word
         self._showWord();
      });

      this.fetchView().getRegion('contents').show(side);
   }
});
