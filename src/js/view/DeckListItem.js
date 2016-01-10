var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-decklistitem',
   tagName: 'li',
   className: 'deck',
   events : {
      'click a' : function(event) {
         this.trigger('selected:deck', this.model);
      }
   }
});
