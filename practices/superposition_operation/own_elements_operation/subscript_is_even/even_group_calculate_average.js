'use strict';
function f(re) {
  return re.reduce((x,y)=>x+y)/re.length;
}
var even_group_calculate_average = function(collection){
  let co = collection;
  let re = [];
  for(let i=1;i<co.length;i+=2){
    re.push(co[i]);
  }
  re = re.filter((x)=>x%2 === 0);
  if(re.length === 0){
    return [0];
  }
  let re1 = [];
  let re2 = [];
  let re3 = [];
  for(let i of re ){
    if(i/100>1){re3.push(i);}
    if(i/100<1 && i/10>1){re2.push(i);}
    if(i/100<1 && i/10<1){re1.push(i);}
  }

  if(re1.length === 0 && re2.length === 0 && re3.length !== 0) {
    return [f(re3)];
  }
  else{
    let ree = []
    ree.push(f(re1),f(re2),f(re3));
    return ree;
  }
};
module.exports = even_group_calculate_average;
