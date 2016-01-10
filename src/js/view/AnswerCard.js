var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
   template: '#template-answercard',
   tagName: 'div',
   className: 'card answercard'
});
