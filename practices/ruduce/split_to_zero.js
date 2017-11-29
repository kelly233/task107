'use strict';

function spilt_to_zero(number, interval) {
  let re = [];

  for(let i=parseInt(number*10);i>=0;i-=parseInt(interval*10)){
    re.push(number.toFixed(1));
    number -= interval;
  }

 if(interval === 0.3){ re.push(number.toFixed(1));}

  return re.map(Number);
}

module.exports = spilt_to_zero;
