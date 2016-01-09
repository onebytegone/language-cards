var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-wordcard',
   tagName: 'div',
   className: 'card wordcard'
});
