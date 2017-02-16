function repeat(string, times) {
  var newString = '';

  if (isNaN(times) || times < 0) {
    return undefined;
  }

  if (times === 0) {
    return "";
  }

  for (var i = 0; i < times; i++) {
    newString += string;
  }

  return newString;
}


console.log(repeat('abc', 1));  // "abc"
console.log(repeat('abc', 2));  // "abcabc"
console.log(repeat('abc', -1)); // undefined
console.log(repeat('abc', 0));  // ""
console.log(repeat('abc', 'a'));// undefined

// String.prototype.repeat(times);
// 'abcd'.repeat(times);
'abcd'.repeat(3);      // abcdabcdabcd
'abcd'.repeat('a');    // ""
'abcd'.repeat(1.6);    // "abcd"
'abcd'.repeat(1/0);    // RangeError
