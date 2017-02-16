function toLowerCase(string) {
  var lowerCaseString = '';
  var asciiNumeric = 0;

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      asciiNumeric += 32;
    }

    lowerCaseString += String.fromCharCode(asciiNumeric);
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET'));      // "alphabet"
console.log(toLowerCase('123'));           // "123"
console.log(toLowerCase('abcDEF'));        // "abcdef"

// The Built in Method
'miXedCase1Word'.toLowerCase();
