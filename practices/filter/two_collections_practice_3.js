'use strict';

function choose_divisible_integer(collection_a, collection_b) {
   let re =[];
   for(let item of collection_a){
     for (let str of collection_b){
       if(item % str === 0){
         re.push(item);
       }
     }
   }
  return re;
}

module.exports = choose_divisible_integer;
