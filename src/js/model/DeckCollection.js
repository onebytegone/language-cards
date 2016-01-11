var Backbone = require('backbone'),
    DeckBlurb = require('./DeckBlurb');

module.exports = Backbone.Collection.extend({
   model: DeckBlurb
});
