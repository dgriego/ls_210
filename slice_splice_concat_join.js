function slice(arr, start, end) {
  var newArr = [];

  for (var i = start; i < end; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

// returns a new array of removed values from the original array
function splice(array, begin, number) {
  var removedValues = [];
  for (var i = begin; i < array.length; i++) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}

function concat(firstArray, secondArray) {
  var newArray = [];
  for (var i = 0; i < firstArray.length; i++) {
    push(newArray, firstArray[i]);
  }

  for (i = 0; i < secondArray.length; i++) {
    push(newArray, secondArray[i]);
  }

  return newArray;
}
concat([1, 2, 3], [4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]

function join(array, separator) {
  var result = '';

  for (var i = 0; i < array.length; i++) {
    result += String(array[i]);

    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}
