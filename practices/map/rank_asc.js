'use strict';
var rank_asc = function(collection){
  return collection.sort((x,y)=>y-x);
};

module.exports = rank_asc;
