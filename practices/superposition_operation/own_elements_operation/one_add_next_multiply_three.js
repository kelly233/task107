'use strict';
function one_add_next_multiply_three(collection){
  let re =[];
  for(let i=0;i<collection.length-1;i++){
    re.push((collection[i]+collection[i+1])*3);
  }
  return re;
}
module.exports = one_add_next_multiply_three;
