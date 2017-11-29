'use strict';
function findObjInArr(result, str) {
    let newObj
    for (let obj of result) {
        if (obj.name === str) {
            newObj = obj;
        }
    }
    return newObj
}

module.exports = function countSameElements(collection) {
    let result = []
    for(let i=0;i<collection.length;i++){
       if(collection[i].length===3){
         let a=collection[i].substring(0,1);
           let b=collection[i].substring(2,3);
             let c=parseInt(b);
          collection.splice(i,1);
          for(let j=0;j<c;j++){
             collection.splice(i,0,a);
             }
          }  
       if(collection[i].length>=4){
         let a=collection[i].substring(0,1);
           let b=collection[i].substring(2,collection[i].length);
             let c=parseInt(b);
          collection.splice(i,1);
          for(let j=0;j<c;j++){
             collection.splice(i,0,a);
             }
          }
     }  
          
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.summary++;
        } else {
            result.push({name: str, summary: 1});
        }
    }
       
    return result
}
