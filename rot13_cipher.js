var BASE_CHARS = {A: 65, Z: 90, a: 97, z: 122, N: 78, n:110};
var ROT_13 = 13;

function rot13(string) {
  var message = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (isLetter(charCode)) {
      if (ntoz(charCode)) {
        message += String.fromCharCode(charCode - ROT_13);
      } else {
        message += String.fromCharCode(charCode + ROT_13);
      }
    } else {
      message += string[i];
    }
  }

  return message;
}

function ntoz(char) {
  return (char >= BASE_CHARS.n && char <= BASE_CHARS.z) ||
         (char >= BASE_CHARS.N && char <= BASE_CHARS.Z);
}

function isLetter(char) {
  return (char >= BASE_CHARS.A && char <= BASE_CHARS.Z) ||
         (char >= BASE_CHARS.a && char <= BASE_CHARS.z);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

