var $ = require('jquery'),
    config = require('config'),
    DeckCollection = require('../model/DeckCollection');

module.exports = {
   fetch: function() {
      return $.get(config.DataBasePath + '/directory.json')
         .then(function(rawData) {
            return new DeckCollection(rawData);
         });
   }
};
