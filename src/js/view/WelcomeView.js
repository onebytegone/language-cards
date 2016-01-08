var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
   template: '#template-welcomeview',
   tagName: 'div',
   className: 'card welcome',
   regions: {
      decks: '.decks'
   }
});
