// Write a function that iterates over the integers from 1 to 100, inclusive.
// For multiples of three, log "Fizz" to the console. For multiples of five,
// log "Buzz". For numbers which are multiples of both three and five,
// log "FizzBuzz". For all other numbers, log the number.
function fizzBuzz() {
  var divisibleBy3;
  var divisibleBy5;

  for (var i = 1; i <= 100; i++) {
    msg = i;
    divisibleBy3 = i % 3 === 0;
    divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      console.log('FizzBuzz');
    } else if (divisibleBy3) {
      console.log('Fizz')
    } else if (divisibleBy5) {
      console.log('Buzz');
    } else {
      console.log(String(i));
    }
  }
}