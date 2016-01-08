var Marionette = require('backbone.marionette'),
    DeckListItem = require('./DeckListItem');

module.exports = Marionette.CollectionView.extend({
   tagName: 'ul',
   className: 'decklist',
   childView: DeckListItem
});
