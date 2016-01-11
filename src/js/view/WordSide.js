var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-wordside',
   tagName: 'div',
   className: 'wordside',
   events: {
      'click a': function(event) {
         this.trigger('flip:card', this.model);
      }
   }
});
