'use strict';

function compute_median(collection) {
  collection.sort((x,y)=>x-y);
  if(collection.length %2 === 0){
    return  ((collection[collection.length/2]+collection[collection.length/2-1])/2);
  }
  if(collection.length %2 !== 0){
    return  ((collection[parseInt(collection.length/2)]+collection[parseInt(collection.length/2)])/2);
  }
}

module.exports = compute_median;


