#!/usr/bin/env node

var _ = require('underscore'),
    glob = require('glob'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    generateEntry,
    sanitizePath;

generateEntry = function(filepath) {
   var contents, entry;

   console.log('Creating index entry for: ' + filepath);

   // TODO: This require is ugly and should be fixed in a better way later
   contents = require('../' + filepath);
   entry = {
      file: sanitizePath(filepath),
      name: contents.name,
      cardCount: contents.cards.length
   };

   if (contents.percentDone) {
      entry.percentDone = contents.percentDone;
   };

   return entry;
};

sanitizePath = function(filepath) {
   // TODO: This trim is ugly. Please clean up
   return filepath.replace(/^data\//,"");
};

glob("data/**/*.json", function (err, files) {
   if (err) {
      console.log('Encountered file search error, aborting...');
      console.log(err);
      return;
   }

   var index = _.map(files, generateEntry),
       targetFile = 'dist/data/directory.json';

   mkdirp(path.dirname(targetFile), function (err) {
      if (err) {
         console.log(err);
         return;
      }

      fs.writeFile(targetFile, JSON.stringify(index), function(err) {
         if(err) {
            console.log(err);
            return;
         }

         console.log('The index was sucessfully saved to: ' + targetFile);
      });
   });
});
