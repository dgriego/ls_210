function multiplesOfThreeAndFive() {
  for (var i = 3; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}