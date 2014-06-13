/*
 * google-transliterate
 * https://github.com/sanemat/node-google-transliterate
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var jsonpClient = require('jsonp-client');
var URITemplate = require('URIjs/src/URITemplate');

var template = new URITemplate('https://www.google.com/transliterate?langpair={srcLang}|{destLang}&text={words}');

module.exports.transliterate = function(words, srcLang, destLang, callback){
  var url = template.expand({ srcLang: srcLang, destLang: destLang, words: words });
  jsonpClient(url, function (err, data) {
    callback(err, data);
  });
};
