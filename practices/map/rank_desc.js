'use strict';
var rank_desc = function(collection){
  return collection.sort((x,y)=>x-y);
};

module.exports = rank_desc;
