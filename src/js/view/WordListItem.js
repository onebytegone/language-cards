var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-wordlistitem',
   tagName: 'li',
   className: 'wordlistitem'
});
