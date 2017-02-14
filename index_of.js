function indexOf(firstString, secondString) {
  var match = -1;

  for (var i = 0; i < firstString.length; i++) {
    if (secondString.length === 1) {
      if (firstString[i] === secondString) {
        match = i;
        break;
      }
    } else {
      if (firstString[i] === secondString[0]) {
        // In this case when the secondString is not just a letter
        // then what we do is loop through the secondString
        // beginning where the firstString matched on the first letter
        // of the secondString, if any letter within this check does not
        // match then we set match = -1 and break out of the loop.  We
        // can assume that if it does not break then it is indeed a match.
        // si = sub string index
        for (var si = 0; si < secondString.length; si++) {
          if (firstString[i + si] !== secondString[si]) {
            match = -1;
            break;
          } else {
            match = i;
          }
        }
        
        if (match > 0) {
          break;
        }
      }
    }
  }

  console.log(match);
  return match;
}

function lastIndexOf(firstString, secondString) {
  var match = -1;

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] === secondString) {
      match = i;
    } else {
      if (firstString[i] === secondString[0]) {
        // In this case when the secondString is not just a letter
        // then what we do is loop through the secondString
        // beginning where the firstString matched on the first letter
        // of the secondString, if any letter within this check does not
        // match then we set match = -1 and break out of the loop.  We
        // can assume that if it does not break then it is indeed a match.
        // si = sub string index
        for (var si = 0; si < secondString.length; si++) {
          if (firstString[i + si] !== secondString[si]) {
            match = -1;
            break;
          } else {
            match = i;
          }
        }
      }
    }
  }

  console.log(match);
  return match;
}

indexOf('Some strings', 's'); // 5
indexOf('Blue Whale', 'Whale'); // 5
indexOf('Blue Whale', 'Blute'); // -1
indexOf('Blue Whale', 'leB'); // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

// Built in Javascript methodle'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale');    // returns  5

'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('x');     // returns -1

'Blue Whale'.indexOf('e', 4);     // returns 9
'canal'.lastIndexOf('a', 2);      // returns 1
'canal'.lastIndexOf('a', 0);      // returns -1
