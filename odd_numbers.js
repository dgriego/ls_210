// Write a function that takes a positive integer as an argument,
// and logs all the odd numbers from 1 to the passed in number (inclusive).
// All numbers should be logged on separate lines.
function logOddNumbers(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// incrementing the numbers by 2 instead of using conditional
function logOddNumbers(int) {
  for (var i = 1; i <= int; i = i + 2) {
    console.log(i)
  }
}

// checking for even, then using continue
function logOddNumbers(int) {
  for (var i = 1; i <= int; i = i + 2) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}
