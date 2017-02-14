// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// message on the console
// You have been denied access.

// If the user enters the right password, report login success.
// What is the password: password

// message on the console
// You have successfully logged in.

var password = 'password';
var guess = prompt('Please Enter Your Password');
var max_guesses = 3;

if (guess !== password) {
  for(var i = 1 ; i <= max_guesses; i++) {
    var attempt = prompt('Password incorrect, Please try again');

    if (attempt === password) {
      console.log('You have successfully logged in!');
      break;
    }

    if (i === 3) {
      console.log('You have been denied access');
      break;
    }
  }
} else {
  console.log('You have successfully logged in!');
}


// assignemnt solution
var password = 'password';
var failedAttempts = 0;

while (true) {
  var guess = prompt('What is the password:');

  if (guess === password) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts++;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}

// another alternative
var password = 'password';
var failedAttempts = 0;

do {
  var guess = prompt('What is the password:');

  if (guess === password) {
    break;
  }

  failedAttempts++;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}
