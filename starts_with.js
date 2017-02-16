// Implement a function that determines whether a string begins
// with another string. If it does,
// the function should return true, false otherwise.

function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
//console.log(startsWith(str, 'We'));     // true
//console.log(startsWith(str, 'We put')); // true
//console.log(startsWith(str, ''));       // true
//console.log(startsWith(str, 'put'));    // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));  // false

// The Built in method
var str = 'We put comprehension and mastery above all else';

str.startsWith('We');       // true
str.startsWith('We put');   // true
str.startsWith('put');      // false
str.startsWith('Put');      // false
str.startsWith('put', 3);   // true
