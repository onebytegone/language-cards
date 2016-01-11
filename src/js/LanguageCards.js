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

      this._present(new WelcomeController());
   },

   _present: function(controller) {
      controller.on('present:controller', this._present.bind(this));
      this.mainRegion.show(controller.fetchView());
   }
});

module.exports = LanguageCards;
