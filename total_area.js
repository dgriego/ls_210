var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  return rectangles.filter(function(element) {
    return element[0] === element[1];
  }).map(function(element) {
    return element[0] * element[1];
  }).reduce(function(sum, area) {
    return sum + area;
  });
}

totalSquareArea(rectangles); // 121