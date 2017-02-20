function missing(array) {
  var result = [];
  var lowest = array[0];
  var highest = array[array.length - 1];

  for (var integer = lowest; integer < highest; integer++) {
    if (array.indexOf(integer) < 0) {
      result.push(integer);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));// [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));  // []
console.log(missing([1, 5]));        // [2, 3, 4]
console.log(missing([6]));           // []
