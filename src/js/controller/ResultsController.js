var BaseController = require('./BaseController'),
    ResultsView = require('../view/ResultsView');

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

      view.on('home:pressed', function() {
         self.trigger('go:welcomescreen');
      });

      return view;
   }

});
