'use strict';

function compute_chain_median(chain) {
  let collection = chain.split('->');
  let collection2 =  collection.map(Number);
  collection2.sort((x,y)=> x-y);
  return  ((collection2[collection.length/2]+collection2[collection.length/2-1])/2);

}

module.exports = compute_chain_median;
