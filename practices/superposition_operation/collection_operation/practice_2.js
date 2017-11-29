'use strict';

function hybrid_operation_to_uneven(collection) {
 let re = collection.filter((x)=> x%2 !== 0);
 return re .map((x)=>x*3+2);
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

