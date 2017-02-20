function objectHasProperty(object, string) {
  if (object[string]) { return true; }

  return false;
}
function objectHasProperty(object, string) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

function incrementProperty(object, string) {
  if(object[string]) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }

  return object[string];
}

function copyProperties(firstObject, secondObject) {
  var count = 0;

  for (var property in firstObject) {
    secondObject[property] = firstObject[property];
    count++;
  }

  return count;
}

function wordCount(text) {
  var count = {};
  var words = text.split(' ');
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}
