// Whenever your code needs an early return while processing a list,
// you should consider using a simple loop.
// With the exception of some and every,
// all JavaScript list processing abstractions traverse the entire list.
// Sometimes, some and every will prove useful,
// but many problems are not amenable to 
// an approach that uses these two methods.

function isAllUnique(string) {
  var seen = {};
  var lowerCasedString = string.toLowerCase();

  for (var i = 0; i < lowerCasedString.length; i++) {
    if (lowerCasedString[i] === ' ') {
      continue;
    };

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}