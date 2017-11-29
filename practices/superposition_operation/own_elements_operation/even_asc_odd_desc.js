'use strict';
var even_asc_odd_desc = function(collection){
  let arr1 = collection.filter((x)=>x%2===0);
  let arr2 = collection.filter((x)=>x%2!==0);
  arr1.sort((x,y)=>x-y);
  arr2.sort((x,y)=>y-x);
  return  arr1.concat(arr2);
};
module.exports = even_asc_odd_desc;
