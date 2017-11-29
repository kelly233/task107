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

module.exports = function countSameElements(collection) {
    let result = []
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: str, count: 1})
        }
    }
       
       let a=result[result.length-1].key.substring(0,1); 
       let b=result[result.length-1].key.substring(2,3);
       result[result.length-1].key=a;
       result[result.length-1].count=parseInt(b);
    return result
}
