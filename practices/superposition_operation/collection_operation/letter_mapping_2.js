'use strict';

function average_to_letter(collection) {
  let a =  Math.ceil(collection.reduce((x,y)=>x+y)/collection.length);
  return String.fromCharCode(96 + parseInt(a));
}

module.exports = average_to_letter;

