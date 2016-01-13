var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-answerside',
   tagName: 'div',
   className: 'answerside',
   events: {
      'click a.outcome-button': function(event) {
         this.trigger('next:card', this.model);
      },
      'click a.correct': function(event) {
         this.trigger('card:correct', this.model);
      },
      'click a.wrong': function(event) {
         this.trigger('card:wrong', this.model);
      }
   }
});
