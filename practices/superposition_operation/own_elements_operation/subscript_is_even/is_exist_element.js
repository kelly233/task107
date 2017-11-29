'use strict';

var is_exist_element = function(collection,element){
  let re = [];
  for(let i=0;i<collection.length;i+=2){
    re.push(collection[i]);
  }
  let arr = re.filter((x)=>x===element);
  if(arr.length === 0){
    return false;
  }
  return true;
};
module.exports = is_exist_element;
