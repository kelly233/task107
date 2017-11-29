'use strict';
    
module.exports = function countSameElements(collection) {
    let result = []
    for(let item of collection){
       for(let obj of result){
          if(obj.key===item){
            obj.count++;
            }
          else{
               result.push({key:item,count:1})
              }
           }
        } 
    return result
}
