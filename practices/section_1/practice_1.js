'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let item of collectionA){
     let includeItemInB = false;
     for(let ch of collectionB){
        if(item === ch){
           includeItemInB = true;
        }
     }
     if (includeItemInB){
        result.push(item);
     }
  } 
  
  return result;
}
         
