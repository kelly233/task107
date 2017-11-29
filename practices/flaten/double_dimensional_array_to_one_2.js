'use strict';

function double_to_one(collection) {

  let re = [];
  let num = 0;
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].length; j++) {
      re[num] = collection[i][j];
      num++;
    }
  }
  return re.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
 }

module.exports = double_to_one;
