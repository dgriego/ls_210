function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function pop(arr) {
  var newLength = arr.length - 1;
  var lastIndex = arr[newLength];
  arr.length = newLength;

  return lastIndex;
}

// inserts new value at the beginning of the array
function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

function shift(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}
