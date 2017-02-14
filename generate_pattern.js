function generatePattern(n) {
  var string;

  for (var i = 1; i <= n; i++) {
    string = '';
    for (var j = 1; j <= i; j++) {
      string += String(j);
    }

    for (var k = i + 1; k <= n; k++) {
      string += '*';
    }

    console.log(string);
  }
}

