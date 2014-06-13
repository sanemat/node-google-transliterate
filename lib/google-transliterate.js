/*
 * google-transliterate
 * https://github.com/sanemat/node-google-transliterate
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var jsonpClient = require('jsonp-client');

module.exports.transliterate = function(words, srcLang, destLang, callback){
  // NOTE: require escape
  var url = 'https://www.google.com/transliterate?langpair=' + srcLang + '|' + destLang + '&text=' + words;
  jsonpClient(url, function (err, data) {
    callback(err, data);
  });
};
