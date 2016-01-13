var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    WelcomeController = require('./controller/WelcomeController'),
    ResultsController = require('./controller/ResultsController');

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

      this._showWelcomeScreen();
   },

   _present: function(controller) {
      controller.on('present:controller', this._present.bind(this));
      controller.on('go:welcomescreen', this._showWelcomeScreen.bind(this));
      controller.on('go:resultsscreen', this._showResultsScreen.bind(this));
      this.mainRegion.show(controller.fetchView());
   },

   _showWelcomeScreen: function() {
      this._present(new WelcomeController());
   },

   _showResultsScreen: function(history) {
      this._present(new ResultsController(history));
   }
});

module.exports = LanguageCards;
