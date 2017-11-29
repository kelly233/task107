'use strict';
function rank_by_two_large_one_small(collection){
  let re = collection.sort((x,y)=>x-y);
  let a = parseInt(re.length/3);
  let arr = [];
  for(let i=0;i<a*3;i+=3){
    [re[i+0],re[i+1],re[i+2]] = [re[i+1],re[i+2],re[i+0]];
  }
   return re;
}
module.exports = rank_by_two_large_one_small;
