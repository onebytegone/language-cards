var Marionette = require('backbone.marionette');

module.exports = Marionette.Object.extend({
   view: false,

   initialize: function() {
      this.view = this.generateView();
   },

   fetchView: function() {
      if (!this.view) {
         this.view = this.generateView();
      }

      return this.view;
   },

   generateView: function() {
      throw "generateView is not overridded by subclass";
   }
});
