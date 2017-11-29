'use strict';

function collect_all_even(collection_a) {
  return collection_a.filter((x) => x%2===0);
}

module.exports = collect_all_even;
