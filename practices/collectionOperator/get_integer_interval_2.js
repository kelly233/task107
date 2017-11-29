'use strict';

function get_integer_interval_2(number_a, number_b) {
  let arr = [];
  if(number_a == number_a && number_a %2 == 0){
    arr = [number_a];
  }
  if(number_a == number_a && number_a %2 != 0){
    arr = [];
  }
  if(number_a < number_b) {
    if (number_a % 2 !== 0) {
      number_a += 1;
    }
    if (number_b % 2 !== 0) {
      number_b -= 1;
    }
    let a = number_a;
    for (let i = 0; i <= (number_b-number_a)/2; i++) {
      arr[i] = a;
      a += 2;
       }

    }

  if(number_a > number_b){
    if(number_a %2 !==0) {
      number_a -= 1;
    }
    if(number_b%2 !== 0){
      number_b += 1;
    }
    let a=number_a;
    for(let i=0;i<=(number_a-number_b)/2;i++){
      arr[i] = a;
      a -= 2;
    }
  }
   return arr;

  }
module.exports = get_integer_interval_2;
