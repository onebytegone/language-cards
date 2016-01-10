var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-wordcard',
   tagName: 'div',
   className: 'card wordcard',
   events : {
      'click a.flip' : function(event) {
         this.trigger('flip:card', this.model);
      }
   }
});
