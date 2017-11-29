'use strict';

function average_uneven(collection) {
  let re =  collection.filter((x)=>x %2 !== 0);
     return re.reduce((x,y) => x + y)/re.length;
}

module.exports = average_uneven;
