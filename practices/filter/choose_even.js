'use strict';

function choose_even(collection) {
   return collection.filter((x)=>x%2===0);
}

module.exports = choose_even;
