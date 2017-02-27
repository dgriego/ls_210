// first rendition of the charCount function
//function charCount() {
//  var userString = prompt('Please write a phrase:');
//  var stringCount = String(userString.length);

//  return 'There are ' + stringCount + ' characters in ' +
//         '"' + userString + '"';
//}

// do not count spaces
//function charCount() {
//  var userString = prompt('Please write a phrase:');
//  var sanitizedString = userString.replace(/\s/g, '');
//  var stringCount = String(sanitizedString.length);

//  return 'There are ' + stringCount + ' characters in ' +
//         '"' + userString + '"';
//}

function charCount() {
  var userString = prompt('Please write a phrase:');
  var sanitizedString = userString.match(/[a-zA-Z]/g).join('');
  var stringCount = String(sanitizedString.length);

  return 'There are ' + stringCount + ' characters in ' +
         '"' + userString + '"';
}

console.log(charCount());
