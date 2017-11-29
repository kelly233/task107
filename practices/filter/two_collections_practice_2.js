'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  for (let i=0;i<collection_a.length;i++){
    for (let str of collection_b){
      if(collection_a[i] === str){
        collection_a.splice(i,1);
      }
    }
  }
   return collection_a;
 }

module.exports = choose_no_common_elements;
