'use strict';

var googleTransliterate = require('../lib/google-transliterate.js');
var assert = require('assert');

describe('googleTransliterate', function () {
  it('should transliterate', function (done) {
    googleTransliterate.transliterate('かんだ', 'ja-Hira', 'ja', function(err, transliteration){
      assert.equal(transliteration, '神田');
      done();
    });
  });
});
