var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
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

      this._showWelcomeScreen();
   },

   _present: function(controller) {
      controller.on('present:controller', this._present.bind(this));
      controller.on('go:welcomescreen', this._showWelcomeScreen.bind(this));
      this.mainRegion.show(controller.fetchView());
   },

   _showWelcomeScreen: function() {
      this._present(new WelcomeController());
   }
});

module.exports = LanguageCards;
