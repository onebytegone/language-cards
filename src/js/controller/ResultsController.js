var Backbone = require('backbone'),
    BaseController = require('./BaseController'),
    ResultsView = require('../view/ResultsView'),
    WordList = require('../view/WordList');

module.exports = BaseController.extend({
   history: undefined,

   initialize: function(history) {
      this.history = history;

      BaseController.prototype.initialize.call(this);
   },

   generateView: function() {
      var self = this,
          view = new ResultsView({
             model: this.history
          });

      view.on('show', function() {
         var cardCollection = self.history.reduce(function (memo, cardHistory) {
            memo.add(cardHistory.get('card'));
            return memo;
         }, new Backbone.Collection());

         var wordList = new WordList({ collection: cardCollection });
         view.getRegion('wordList').show(wordList);
      });

      view.on('home:pressed', function() {
         self.trigger('go:welcomescreen');
      });

      return view;
   }

});
