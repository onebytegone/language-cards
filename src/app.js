var $ = require('jquery'),
    LanguageCards = require('./js/LanguageCards');

$(function () {
   'use strict';

   document.addEventListener("touchstart", function(){}, true);

   var app = new LanguageCards();
   app.run();
});
