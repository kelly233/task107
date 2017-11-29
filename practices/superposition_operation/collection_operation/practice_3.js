'use strict';

function hybrid_operation_to_uneven(collection) {
  let re = collection.filter((x)=> x%2 !== 0);
  let sum = 0;
  for(let item of re){
    sum += item * 3 + 5;
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

