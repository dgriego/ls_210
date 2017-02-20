function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();
  var i;
  var key;

  for (i = 0; i < lowerCaseString.length; i++) {
    if (result[lowerCaseString[i]] !== undefined ) {
      result[lowerCaseString[i]] += 1;
    } else {
      result[lowerCaseString[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}