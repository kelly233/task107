'use strict';

function grouping_count(collection) {
  let arr = collection.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  let re ={};
  let arr2 = arr.map(String);
  for(let item of arr2){
    re[item] = 0;
  }
  for(let i=0;i<arr.length;i++){
    let count = 0;
    for(let str of collection){
       if(arr[i] === str){
         count++;
       }
    }
    re[arr2[i]]=count;
  }
   return re;
}

module.exports = grouping_count;
