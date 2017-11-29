'use strict';
function includes(collection,ch){
    for(let item of collection){
       if(item === ch){
          return true;
        }
     }
          return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let i=0;i<collectionA.length;i++){
     if (includes(collectionB.value,collectionA[i].key)){
        result.push(collectionA[i].key);
     }
  } 
  return result;
}
         
