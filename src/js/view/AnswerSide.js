var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-answerside',
   tagName: 'div',
   className: 'answerside',
   events: {
      'click a.correct': function(event) {
         this.trigger('card:correct', this.model);
         this.trigger('next:card', this.model);
      },
      'click a.wrong': function(event) {
         this.trigger('card:wrong', this.model);
         this.trigger('next:card', this.model);
      }
   }
});
