'use strict';

function double_to_one(collection) {
   let re = [];
   re[0] = collection[0];
   let num = 1;
    for(let i=1;i<collection.length;i++){
    for(let j=0;j<collection[i].length;j++){
      re[num] = collection[i][j];
      num++;
    }
  }
   return re;
}

module.exports = double_to_one;
