function indexOf(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value ) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(arr, value) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}
