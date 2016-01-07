var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
   defaults: {
      name: 'Unknown Deck',
      cardCount: 0,
      percentCompleted: 0
   }
});
