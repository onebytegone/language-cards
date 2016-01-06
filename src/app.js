var $ = require('jquery'),
    LanguageCards = require('./js/LanguageCards');

$(function () {
   'use strict';
   var app = new LanguageCards();
   app.run();
});
