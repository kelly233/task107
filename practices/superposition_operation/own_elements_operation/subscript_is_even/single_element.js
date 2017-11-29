'use strict';
var single_element = function(collection){
  let re = [];
  for(let i=1;i<collection.length;i+=2){
    re.push(collection[i]);
  }
  for(let i=0;i<re.length-1;i++) {
    let count = 1;
    for (let j=i+1;j<re.length;j++) {
      if (re[j]=== re[i]) {
        re.splice(j,1);
        count++;
        }
        if(re[re.length-1]===re[i]){re.splice(re.length-1,1);}
    }
    if (count > 1) {re.splice(i,1);}

      }
    return re;
}

module.exports = single_element;
