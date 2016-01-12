var BaseController = require('./BaseController'),
    DeckCard = require('../view/DeckCard'),
    WordSide = require('../view/WordSide'),
    AnswerSide = require('../view/AnswerSide'),
    Deck = require('../model/Deck');

module.exports = BaseController.extend({
   deck: null,
   currentIndex: 0,

   initialize: function(blurb) {
      this.deck = Deck.createFromBlurb(blurb);

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
             model: this.deck.get('cards').at(this.currentIndex)
          });

      side.on('flip:card', function() {
         self._showAnswer();
      });

      this.fetchView().getRegion('contents').show(side);
   },

   _showAnswer: function() {
      var self = this,
          side = new AnswerSide({
             model: this.deck.get('cards').at(this.currentIndex)
          });

      side.on('next:card', function() {
         self.currentIndex++;
         if (self.currentIndex >= self.deck.get('cards').length) {
            // TODO: go to results screen
            self.trigger('go:welcomescreen');
         } else {
            self._showWord();
         }
      });

      this.fetchView().getRegion('contents').show(side);
   }
});
