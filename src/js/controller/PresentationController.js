var BaseController = require('./BaseController'),
    DeckCard = require('../view/DeckCard'),
    WordSide = require('../view/WordSide'),
    AnswerSide = require('../view/AnswerSide'),
    Deck = require('../model/Deck'),
    DeckCursor = require('../model/DeckCursor');

module.exports = BaseController.extend({
   cursor: null,

   initialize: function(blurb) {
      this.cursor = new DeckCursor({
         deck: Deck.createFromBlurb(blurb)
      });

      BaseController.prototype.initialize.call(this);
   },

   generateView: function() {
      var self = this,
          view = new DeckCard();

      view.on('show', function() {
         self._showWord();
      });

      view.on('home:pressed', function() {
         self.trigger('go:welcomescreen');
      });

      return view;
   },

   _showWord: function() {
      var self = this,
          side = new WordSide({
             model: this.cursor.currentCard()
          });

      side.on('flip:card', function() {
         self._showAnswer();
      });

      this.fetchView().getRegion('contents').show(side);
   },

   _showAnswer: function() {
      var self = this,
          side = new AnswerSide({
             model: this.cursor.currentCard()
          });

      side.on('next:card', function() {
         if (self.cursor.hasAnotherCard()) {
            self.cursor.jumpToNextCard();
            self._showWord();
         } else {
            // TODO: go to results screen
            self.trigger('go:welcomescreen');
         }
      });

      this.fetchView().getRegion('contents').show(side);
   }
});
