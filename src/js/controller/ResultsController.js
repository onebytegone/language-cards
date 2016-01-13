var BaseController = require('./BaseController'),
    ResultsView = require('../view/ResultsView');

module.exports = BaseController.extend({

   generateView: function() {
      var self = this,
          view = new ResultsView();

      return view;
   }

});
