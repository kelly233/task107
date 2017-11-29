'use strict';

function findObjInArr(result, str) {
    let newObj
    for (let obj of result) {
        if (obj.key === str) {
            newObj = obj;
        }
    }
    return newObj
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC = []
    for (let str of collectionA) {
        let obj = findObjInArr(collectionC, str)
        if (obj) {
            obj.count++;
        } else {
            collectionC.push({key: str, count: 1})
        }
    }
  for(let str of objectB.value){
     for(let item of collectionC){
        if(str===item.key){
          item.count=item.count-Math.floor(item.count/3);
          }
       }
    }
  return collectionC;
}
