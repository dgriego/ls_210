function logMultiples(num) {
  for (var i = 100; i >= 0; i--) {
    if (num % i === 0 && i % 3 === 0) {
      console.log(i);
    }
  }
}