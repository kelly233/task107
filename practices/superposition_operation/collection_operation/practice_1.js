'use strict';

function hybrid_operation(collection) {
  return collection.map((x)=>x*3+2).reduce((x,y)=>x+y);
}

module.exports = hybrid_operation;

