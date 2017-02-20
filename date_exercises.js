var today = new Date();

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

formattedDate(today);

// Use the getTime method and log the current
// date and time in total milliseconds since Jan. 1st 1970.
console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(tomorrow);

var nextWeek = new Date(today.getTime());
console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  var hour = date.getHours();
  var minutes = date.getMinutes();

  if (hour < 10) {
    hour = '0' + String(hour);
  }

  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  
  return hour + ':' + minutes;
}

// assignment solution
function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(val) {
  return String(val).length < 2 ? '0' + val : val;
}

console.log(formatTime(today));
