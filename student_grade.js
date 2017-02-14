// If the average score >= 90 => grade: A
// If the average score >= 70 and < 90 => grade: B
// If the average score >= 50 and < 70 => grade: C
// If the average score < 50 => grade: F

// loop through 3 times and prompt a user,
// then save each grade in an array?
// then get the total of that array and divide by three

function total(scores) {
  var sum = 0;

  for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
}

function letterGrade(score) {
  var grade = '';

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 70 && score < 90) {
    grade = 'B';
  } else if (score >= 50 && score < 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  console.log('Based on the average of your 3 scores your letter grade is ' +
              '"' + grade + '".');

  return grade;
}

function getScoresFromUser() {
  var scores = [];

  for (var i = 0; i < 3; i++) {
    // convert each score into an int
    scores[i] = parseInt(prompt('Enter score ' + String(i + 1) + ':'));
  }

  return scores;
}

function processScores() {
  letterGrade(total(getScoresFromUser()) / 3);
}

processScores();

