var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-deckcard',
   tagName: 'div',
   className: 'card deckcard',
   events: {
      'click a.homebutton' : function(event) {
         this.trigger('home:pressed');
      }
   }
});
