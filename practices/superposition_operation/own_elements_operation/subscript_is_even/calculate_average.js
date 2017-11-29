'use strict';
var calculate_average = function(collection){
 let re = [];
 for(let i=1;i<collection.length;i+=2){
   re.push(collection[i]);
 }
 return re.reduce((x,y)=>x+y)/re.length;
};
module.exports = calculate_average;
