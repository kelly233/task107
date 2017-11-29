'use strict';

function compute_average(collection) {
    let sum = collection.reduce(function (p1, p2) { return p1+p2; });
     return sum/collection.length;
}

module.exports = compute_average;

