var BaseController = require('./BaseController'),
    ResultsView = require('../view/ResultsView');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new ResultsView();

      view.on('home:pressed', function() {
         self.trigger('go:welcomescreen');
      });

      return view;
   }

});
