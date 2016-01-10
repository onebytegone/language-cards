var Marionette = require('backbone.marionette'),
    DeckListItem = require('./DeckListItem');

module.exports = Marionette.CollectionView.extend({
   tagName: 'ul',
   className: 'decklist',
   childView: DeckListItem,

   onAddChild: function(child) {
      var self = this;
      child.on('selected:deck', function(model) {
         self.trigger('selected:deck', model);
      });
   }
});
