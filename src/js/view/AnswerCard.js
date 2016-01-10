var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-answercard',
   tagName: 'div',
   className: 'card answercard',
    events : {
      'click a.outcome-button' : function(event) {
         this.trigger('next:card', this.model);
      }
   }
});
