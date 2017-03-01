// Create a variable named firstName and set it equal to your
// first name. Set another variable named lastName to your last name.
// Join the two together, separated by a space, and store the result
// in a variable named fullName. Log the value of fullName.
var firstName = 'Daniel';
var lastName = 'Griego';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Call concat on firstName using lastName as an argument.
// Log the return value.
console.log(firstName.concat(lastName));

// Split the fullName variable into an array that contains
// the first and last names as separate strings. Log the value of the array.
console.log(fullName.split(' '));

// Create a variable named language and set it equal to 'JavaScript'.
// Find the index of the first occurrence of the letter 'S' and
// save it to a variable named idx variable. Log the value of idx.
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx); // 4

// Call charCodeAt on the language variable with an argument of idx.
// Save the return value to a variable named charCode,
// then log the value of charCode.
var charCode = language.charCodeAt(idx);
console.log(charCode);

// Log the return value of String.fromCharCode when you
// pass it charCode as an argument.
console.log(String.fromCharCode(charCode));

// Find the index of the last occurrence of the
// letter 'a' in the language variable and log the result.
console.log(language.lastIndexOf('a'));

// Create two variables, a = 'a' and b = 'b'. Log a "greater than"
// comparison between the two variables.
// Reassign the value B to variable b,
// then compare the two variables again, and log the comparison value.
var a = 'a';
var b = 'b';
console.log(a > b); // false
b = 'B';
console.log(a > b); // true

// Create variables aIndex and vIndex and store the index of the
// first occurrences of letters 'a' and 'v' in the
// language string. Call the substr method on language with
// aIndex as the first argument, and 4 as the second 
// argument, e.g., language.substr(aIndex, 4). Log the return value.
// Repeat the operation using vIndex as the first argument.
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4)); // 'avaS'
console.log(language.substr(vIndex, 4)); // 'vaSc'

console.log(language.substring(aIndex, 4)); // 'ava'
console.log(language.substring(vIndex, 4)); // 'va'

// Write a program that asks for a user's name,
// then greets the user with that name.
// If the user appends a ! to his name (e.g., Bill!),
// the computer should "yell" its greeting: that is,
// it should log everything to the console in uppercase.
// You can check whether the name ends with a !
// with String.prototype.endsWith().
// You can remove the ! from the user's name with String.prototype.slice().

var name = prompt('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name);
}

