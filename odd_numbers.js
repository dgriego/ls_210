// Write a function that takes a positive integer as an argument,
// and logs all the odd numbers from 1 to the passed in number (inclusive).
// All numbers should be logged on separate lines

// 1, 0, 2, 3
// but not -1, -2, -3
// what if non integer?
// -- guard clause to check if it is a Number, if not then just return and display an error message
// what if the argument is less than 1?
// -- guard clause to check if it is > 1


// input 1, 2, 3, 4, 5, 6
// output a log of the numbr from 1 to the passed in argument

// start a loop that breaks at the number passed in

function oddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}

oddNumbers(21);