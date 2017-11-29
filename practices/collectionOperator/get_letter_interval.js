'use strict';

function get_letter_interval(number_a, number_b) {
  let arr = [];
  let a = number_a;
  if(number_a < number_b) {
    for (let i = 0; i <= number_b - number_a; i++) {
      arr[i] = String.fromCharCode(96 + parseInt(a));
      a++;
    }
  }
    if(number_a > number_b){
      for(let i=0;i<=number_a - number_b;i++){
        arr[i] = String.fromCharCode(96 + parseInt(a));
        a--;
      }
    }
    if(number_b === number_a){
    arr[0] = String.fromCharCode(96 + parseInt(a));
      }

    return arr;
  }

module.exports = get_letter_interval;
