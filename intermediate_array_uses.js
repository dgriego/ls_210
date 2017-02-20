function oddElementsOf(arr) {
  var modArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      modArr[i] = arr[i];
    }
  }

  return modArr;
}

function oddElementsOf(arr) {
  var oddElements = [];

  for (var i = 1, length = arr.length; i < length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // Returns [8, 16, 42]

function combinedArray(even, odd) {
  var combined = [];

  for (var i = 0, len = even.length; i < len; i++) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

function joinArray(arr, joiner) {
  var joinedArray = arr[0].toString();
  joiner = joiner || '';
  for (var i = 1; i < arr.length; i++) {
    joinedArray += joiner + arr[i].toString();
  }

  return joinedArray;
}

joinArray(['a', 'b', 'c'], '+'); // Returns "a+b+c"
joinArray([1, 4, 1, 5, 9, 2, 7]); // Returns "1415927"

function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function(a, b) { return b - a; });
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
console.log(array);    // Logs [23, 4, 16, 42, 8, 15])

function matrixSums(arr) {
  var sums = [];
  var currentSum;

  for (var i = 0, outerLen = arr.length; i < outerLen; i++) {
    currentSum = 0;
    for (var j = 0, innerLen = arr[i].length; j < innerLen; j++) {
      currentSum += arr[i][j];
    }

    sums.push(currentSum);
  }

  return sums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]); // Returns [15, 60, 12]

function uniqueElements(arr) {
  var uniques = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // Returns [1, 2, 4, 3, 5]
