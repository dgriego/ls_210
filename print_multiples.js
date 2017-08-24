// Write a function logMultiples that takes one argument number.
// It should log all multiples of the argument between 0 and 100 (inclusive)
// that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.
function logMultiples(num) {
  for (var i = 100; i >= num; i--) {
    if (i % num === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}