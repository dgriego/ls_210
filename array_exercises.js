function lastInArray(array) {
  return array[array.length - 1];
}

function rollCall(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  return names;
}

function reverseArray(array) {
  var reversedArray = [];

  for (var i = array.length - 1; i > 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

function firstIndex(value, array) {
  var index = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

function arrayToString(arr) {
  var string = '';

  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) !== 'string') {
      string += String(arr[i]);
    } else {
      string += arr[i];
    }
  }

  return string;
}
