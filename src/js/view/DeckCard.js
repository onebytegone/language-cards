var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
   template: '#template-deckcard',
   tagName: 'div',
   className: 'card deckcard',
   events: {
      'click a.homebutton' : function(event) {
         this.trigger('home:pressed');
      }
   },
   regions: {
      contents: '.contents'
   },
   initialize: function() {
      this.listenTo(this.model, 'change', this.render);
   }
});
