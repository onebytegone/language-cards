var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-decklistitem',
   tagName: 'li',
   className: 'deck',
});
