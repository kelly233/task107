'use strict';

function median_to_letter(collection) {
   let re = collection.sort((x,y)=>x-y);
   let a = Math.ceil((re[re.length/2]+re[re.length/2-1])/2);

  return String.fromCharCode(96 + parseInt(a/26))+String.fromCharCode(96 + parseInt(a-26*parseInt(a/26)));
}

module.exports = median_to_letter;
