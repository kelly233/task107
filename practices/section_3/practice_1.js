'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for(let str of objectB.value){
     for(let item of collectionA){
        if(str===item.key){
          item.count--;
          }
      }
    }
  return collectionA;
}
