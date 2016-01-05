var $ = require('jquery'),
    LanguageCards = require('./LanguageCards');

$(function () {
   'use strict';
   var app = new LanguageCards();
   app.run();
});
