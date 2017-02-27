var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

// For each name in the list, determine its first letter.
// Count the occurrences of each first letter.
// Find the first letter that occurs most often.

var letters = names.map(function(name) {
  return name[0];
});

var count = letters.reduce(function(obj, letter) {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

// here we need to iterate over an array of the letters curated by the count
// object.
//
// with those keys we can then compare the values one by one to determine
// which letter has the highest occurence
var letter = Object.keys(count).reduce(function(lastLetter, currentLetter) {
  if (count[lastLetter] > count[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

console.log(letter);
