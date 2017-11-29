'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(x){
    return String.fromCharCode(96 + parseInt(x));
  });
};
module.exports = number_map_to_word;
