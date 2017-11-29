'use strict';

function choose_common_elements(collection_a, collection_b) {
   function f(x,collection_b) {
     for (let str of collection_b){
       if(x===str){
         return x;
       }
     }
     return ;
   }
   let re = [];
 for(let item of collection_a){
     if(f(item,collection_b)){
       re.push(item);
     }
 }
 return re;
}

module.exports = choose_common_elements;
