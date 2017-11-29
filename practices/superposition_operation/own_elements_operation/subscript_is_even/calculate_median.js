'use strict';
var calculate_median = function(collection){
  let re = [];
  for(let i=1;i<collection.length;i+=2){
    re.push(collection[i]);
  }
  if(re.length %2 === 0){
    return  ((re[re.length/2]+re[re.length/2-1])/2);
  }
  if(re.length %2 !== 0){
    return  ((re[parseInt(re.length/2)]+re[parseInt(re.length/2)])/2);
  }
};
module.exports = calculate_median;
