'use strict';

function get_intersection(collection_a, collection_b) {
  let re = [];
  for(let item of collection_b){
     for(let str of collection_a){
       if(str === item){
         re.push(str);
       }
     }
   }
   return re;
}

module.exports = get_intersection;
