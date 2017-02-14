function trim(string) {
  var trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  var newString = '';
  var copyMode = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[i];
    }
  }

  return newString;
}

function trimRight(string) {
  var newString = '';
  var copyMode = false;

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[i] + newString;
    }
  }

  return newString;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

//the original
'string'.trim();
