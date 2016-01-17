var Backbone = require('backbone'),
    _ = require('underscore');

module.exports = Backbone.Model.extend({
   defaults: {
      name: 'Unknown Deck',
      cardCount: 0,
      underDevelopment: false,
      file: '',
      sourceLocale: '',
      targetLocale: ''
   }
});
