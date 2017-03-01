// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

function processBands(data) {
  data.forEach(function(band, index) {
    band.country = 'Canada';
    capitalizeBandName(band);
    removeDotsInBandName(band);
  });
}

function capitalizeBandName(band) {
  return band.name.split(' ').map(function(word) {
    return capitalizeString(word);
  }).join(' ');
}

function capitalizeString(string) {
  var newWord = string[0].toUpperCase();

  if (string.length > 1) {
    string.split('').forEach(function(letter, letterIndex) {
      if (letterIndex > 0) {
        newWord += string[letterIndex];
      }
    })
  }

  return newWord;
}


function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

processBands(bands);

// Solution with minimal side effects
function processBands(bands) {
  return bands.map(function(band) {
    var capitalizedName = capitalizePhrase(band.name);
    var newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  var capitalizedPhrase = phrase.split(' ').map(function(word) {
    return capitalizeString(word);
  }).join(' ');
  return capitalizedPhrase;
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}
