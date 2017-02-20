function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']); // Returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3); // Returns [16, 23, 42]

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8); // Returns [4, 8, 15, 16, 23, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]); // Returns [4, 42]
