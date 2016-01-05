var Marionette = require('backbone.marionette');

var LanguageCards = Marionette.Application.extend({
   run: function() {
      this.addInitializer(function(options){
         console.log('Initializing...');
      });

      this.start();
   }
});

module.exports = LanguageCards;
