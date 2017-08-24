// Write a function that logs the integers from 1 to 100 (inclusive)
// that are multiples of either 3 or 5. If the number is
// divisible by both 3 and 5, append an "!" to the number.
function logMultiplesOf3And5(min, max) {
  var divisibleBy3;
  var divisibleBy5;

  for (var i = min; i <= max; i++) {
    divisibleBy3 = (i % 3 === 0);
    divisibleBy5 = (i % 5 === 0);

    if (divisibleBy3 && divisibleBy5) {
      console.log(String(i) + '!');
    } else if (divisibleBy3 || divisibleBy5) {
      console.log(i);
    }

    // alternative
    // if (divisibleBy3 || divisibleBy5) {
    //   num = i;

    //   if (divisibleBy3 && divisibleBy5) {
    //     num = String(num) + '!';
    //   }

    //   console.log(String(num));
    // }
  }
}