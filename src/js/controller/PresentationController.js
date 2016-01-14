var BaseController = require('./BaseController'),
    DeckCard = require('../view/DeckCard'),
    WordSide = require('../view/WordSide'),
    AnswerSide = require('../view/AnswerSide'),
    Deck = require('../model/Deck'),
    DeckCursor = require('../model/DeckCursor'),
    HistoryCollection = require('../model/HistoryCollection'),
    CardHistory = require('../model/CardHistory');

module.exports = BaseController.extend({
   cursor: null,
   history: new HistoryCollection(),

   initialize: function(deck) {
      this.cursor = new DeckCursor({
         deck: deck
      });

      BaseController.prototype.initialize.call(this);
   },

   generateView: function() {
      var self = this,
          view = new DeckCard({
             model: this.cursor
          });

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

      side.on('card:correct', function(card) {
         self.history.push(new CardHistory({
            card: card,
            wasCorrect: true
         }));
      });

      side.on('card:wrong', function(card) {
         self.history.push(new CardHistory({
            card: card,
            wasCorrect: false
         }));
      });

      side.on('next:card', function() {
         if (self.cursor.hasAnotherCard()) {
            self.cursor.jumpToNextCard();
            self._showWord();
         } else {
            self.trigger('go:resultsscreen', self.history);
         }
      });

      this.fetchView().getRegion('contents').show(side);
   }
});
