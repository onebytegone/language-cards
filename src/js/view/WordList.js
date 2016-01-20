var Marionette = require('backbone.marionette'),
    WordListItem = require('./WordListItem');

var NoChildrenView = Marionette.ItemView.extend({
   tagName: 'li',
   template: "#template-no-words-positive"
});

module.exports = Marionette.CollectionView.extend({
   tagName: 'ul',
   className: 'wordlist',
   childView: WordListItem,
   emptyView: NoChildrenView
});
