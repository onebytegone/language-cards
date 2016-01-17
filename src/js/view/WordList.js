var Marionette = require('backbone.marionette'),
    WordListItem = require('./WordListItem');

module.exports = Marionette.CollectionView.extend({
   tagName: 'ul',
   className: 'wordlist',
   childView: WordListItem
});
