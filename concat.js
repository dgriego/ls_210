function concat(array1, secondArgument) {
  var newArr = [];
  var i;
  var key;

  for (i = 0; i < array1.length; i += 1) {
    newArr.push(array1[i]);
  }

  if (Array.isArray(secondArgument)) {
    if (secondArgument.length > 1) {
      for (i = 0; i < secondArgument.length; i += 1) {
        newArr.push(secondArgument[i]);
      }
    } else {
      newArr.push(secondArgument[0]);
    }
  } else {
    newArr.push(secondArgument);
  }

  return newArr;
}

concat([1, 2, 3], [4, 5, 6]);
concat([1, 2], 3);
concat([2, 3], ['two', 'three']);
concat([2, 3], 'four');

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
obj.a = 'two';
console.log(newArray);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);
obj.b = 'three';
console.log(arr3);

arr3[5].b = 3;
console.log(obj);
