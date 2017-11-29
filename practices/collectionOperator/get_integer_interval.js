'use strict';

function get_integer_interval(number_a, number_b) {
  let arr = [];
  if(number_a < number_b){
    let a=number_a;
    for(let i=0;i<=number_b-number_a;i++){
      arr[i] = a;
      a += 1;
    }
  }
  if(number_a > number_b){
    let a=number_a;
    for(let i=0;i<=number_a-number_b;i++){
      arr[i] = a;
      a -= 1;
    }
  }
  if(number_a === number_b){
    arr = [number_a];
  }
  return arr;

}

module.exports = get_integer_interval;

