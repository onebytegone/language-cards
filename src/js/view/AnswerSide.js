var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-answerside',
   tagName: 'div',
   className: 'answerside',
   events: {
      'click a.outcome-button': function(event) {
         this.trigger('next:card', this.model);
      }
   }
});
