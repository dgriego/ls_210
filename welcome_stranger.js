function greetings(array, object) {
  var name = array.join(' ');
  var title = object.title + ' ' + object.occupation;
  var greeting = 'Hello, ' + name + '!' + ' Nice to have a ' +
                 title + ' around'; 

  return greeting;
}