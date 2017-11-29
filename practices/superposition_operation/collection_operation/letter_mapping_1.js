'use strict';

function even_to_letter(collection) {
   let re = collection.filter((x)=>x%2 === 0);
    let re2 = re.map((x)=> String.fromCharCode(96 + parseInt(x)));
    return re2;
}

module.exports = even_to_letter;
