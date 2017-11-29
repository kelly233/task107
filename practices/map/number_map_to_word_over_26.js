'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (t) {
    if(t<26){
      return String.fromCharCode(96 + parseInt(t));
    }
    if(t>26){
      return String.fromCharCode(96 + parseInt(t/26))+String.fromCharCode(96 + parseInt(t-26*parseInt(t/26)));
    }
  });
};

module.exports = number_map_to_word_over_26;
