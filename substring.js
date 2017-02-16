function substr(string, start, length) {
  var newString = '';
  var max;
  
  if (start < 0) {
    start = string.length + start;
  }
  
  for (var i = 0; i < length; i++) {
    if (string[start + i]) {
      newString += string[start + i];
    }
  }

  console.log(newString);
  return newString;
}

var string = 'hello world';

substr(string, 2, 4);  // "llo "
substr(string, -3, 2); // "rl"
substr(string, 8, 20); // "rld"
substr(string, 0, -20);// ""
substr(string, 0, 0);  // ""

// Assignment solution
function substr(string, start, length) {
  var newString = '';
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}

// The built-in method
var string = 'hello world';

string.substr(2, 4);     // "llo "
string.substr(-3, 2);    // "rl"
string.substr(8, 20);    // "rld"
string.substr(1);        // "ello world" - goes to the end of the word if the second arg is omitted
string.substr(0, -20);   // ""
string.substr(0, 0);     // ""

var string = 'hello world';

string.substring(2, 4);    // "ll"
string.substring(4, 2);    // "ll"

string.substring(0, -1);   // ""
string.substring(-1, 0);   // ""

string.substring(8, 20);   // "rld"
string.substring(20, 8);   // "rld"

string.substring(2);       // "llo world"
