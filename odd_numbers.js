function loggOddNumbers(max) {
  for (var i = 1; i < max + 1; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// assignment solution
function logOddNumbers(number) {
  for (var i = 1; i <= number; i += 2) {
    console.log(i);
  }
}

// alternative
function logOddNumbers(number) {
  for (var i = 1; i<= number; i += 1) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}