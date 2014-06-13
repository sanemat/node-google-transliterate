'use strict';

var googleTransliterate = require('../lib/google-transliterate.js');
var assert = require('power-assert');

describe('googleTransliterate', function () {
  it('should transliterate', function (done) {
    googleTransliterate.transliterate('かんだ', 'ja-Hira', 'ja', function(err, transliteration){
      assert.deepEqual(transliteration, [ [ 'かんだ', [ '神田', '噛んだ', '勘だ', 'かんだ', '鑑だ' ] ] ]);
      done();
    });
  });

  it('should transliterate multi literal', function (done) {
    googleTransliterate.transliterate('おあややおやにおあやまり', 'ja-Hira', 'ja', function(err, transliteration){
      assert.deepEqual(transliteration,
        [ [ 'おあやや', [ 'お文や', 'おあやや', 'お彩や', 'お綾や', 'おアヤや' ] ],
        [ 'おやに', [ '親に', 'おやに', 'オヤに', 'お屋に', 'お矢に' ] ],
        [ 'おあやまり', [ 'お誤り', 'お謝り', 'おあやまり', 'オアヤマリ', 'ｵｱﾔﾏﾘ' ] ] ]);
      done();
    });
  });
});
