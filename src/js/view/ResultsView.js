var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
   template: '#template-resultsview',
   tagName: 'div',
   className: 'card results',
});
