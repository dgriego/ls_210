var BASE_CHARS = {
  A: 'A'.charCodeAt(),
  a: 'a'.charCodeAt(),
  Z: 'Z'.charCodeAt(),
  z: 'z'.charCodeAt(),
  N: 'N'.charCodeAt(),
  n: 'n'.charCodeAt()
};

var ROT_13 = 13;

function rot13(string) {
  var message = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (isLetter(charCode)) {
      if (nToZ(charCode)) {
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

function nToZ(char) {
  return (char >= BASE_CHARS.n && char <= BASE_CHARS.z) ||
         (char >= BASE_CHARS.N && char <= BASE_CHARS.Z);
}

function isLetter(char) {
  return (char >= BASE_CHARS.A && char <= BASE_CHARS.Z) ||
         (char >= BASE_CHARS.a && char <= BASE_CHARS.z);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

