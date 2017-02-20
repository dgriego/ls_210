function radiansToDegrees(radians) {
  return radians / (Math.PI / 180);
}

var num = -180;
console.log(Math.abs(num));

Math.sqrt(16777216);

Math.pow(16, 6);

// Math.round takes any deciaml value and rounds it
// to the nearest integer.  If the fractional part
// of the number isless than 0.5,
// Math.round rounds the value downwards; otherwise,
// it rounds the value upwards.  If the fractional
// par is exactly 0.5 then it is rounded upwards
//
// Math.floor rounds any  number downward to the
// next lower integer.
//
// Math.ceil rounds any number upward to the next
// higher integer
//

var a = 50.72;
var b = 49.2;
var c = 49.86;

Math.floor(a); // returns 50
Math.ceil(b);  // returns 50
Math.round(c); // returns 50


// Math.random returns a random floating-point
// number between 0 and 1, excluding the exact value of 1.
// This isn't helpful on its own.
//
// Create a function that takes two arguments, a minimum
// and a maximum value, and returns a random integer between
// those numbers (including both of the numbers).

function randomInt(min, max) {
  var difference;
  var swap;

  if (min === max) {
    return min;
  } else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }

  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
}
