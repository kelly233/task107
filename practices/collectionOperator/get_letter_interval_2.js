'use strict';

function get_letter_interval_2(number_a, number_b) {
 let arr = [];
 let a = number_a;
 if(number_a<number_b){
   if(number_a<26 && number_b<26) {
     for (let i = 0; i <= number_b - number_a; i++) {
       arr[i] = String.fromCharCode(96 + parseInt(a));
       a++;
     }
   }
     if(number_a<26 && number_b>26){
       let b = parseInt((number_b-number_a)/26);
       for(var i=0;i<=26-number_a;i++){
         arr[i] =  String.fromCharCode(96 + parseInt(a));
         a++;
       }
       for(let j=1;j<=b;j++) {
         for (let x=1;x<=26;x++) {
           arr[i] = String.fromCharCode(96 + parseInt(j))+String.fromCharCode(96 + parseInt(x));
           i++;
         }
       }
    for(let y=1;y<=number_b-26*(b+1);y++){
      arr[i] = String.fromCharCode(96 + parseInt(b+1))+String.fromCharCode(96 + parseInt(y));
      i++;
       }
     }
   }

  if(number_a>number_b){
    if(number_a<26 && number_b<26) {
      for (let i = 0; i <= number_a - number_b; i++) {
        arr[i] = String.fromCharCode(96 + parseInt(a));
        a++;
      }
    }
    if(number_b<26 && number_a>26){
      let b = parseInt((number_a-number_b)/26);
      for(var i=0;i<number_a-26*(b+1);i++){
        arr[i] = String.fromCharCode(96 + parseInt(b+1))+String.fromCharCode(96 + parseInt(i+1));
      }
      for(let j=1;j<=b;j++){
        for(let x=26;x>0;x--){
          arr[i] = String.fromCharCode(96 + parseInt(j))+String.fromCharCode(96 + parseInt(x));
          i++;
        }
      }
      for(let y=26;y>=number_b;y--){
        arr[i] = String.fromCharCode(96 + parseInt(y));
        i++;
      }
    }
  }
  if(number_a === number_b){
    let b = parseInt(number_a/26);
    arr[0] = String.fromCharCode(96 + parseInt(b))+String.fromCharCode(96 + parseInt(number_a-26));
  }
  return arr;
}

module.exports = get_letter_interval_2;

