'use strict';

function get_union(collection_a, collection_b) {
    let arr = collection_a;
    function f(x,arr) {
      for(let item of arr){
        if(x === item){
          return ;
        }
      }
      return x;
    }
    for(let str of collection_b){
      if(f(str,arr)){
        arr.push(str);
      }
    }
    return arr;
}

module.exports = get_union;

