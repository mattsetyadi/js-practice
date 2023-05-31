function getGrade(score) {
  let grade;

  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else {
    grade = "F";
  }
  return grade;
}

const testGrade = getGrade(11);
// console.log("grade", testGrade);

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a" || "e" || "o" || "i" || "u":
      letter = "A";
      break;

    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;

    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;

    default:
      letter = "D";
  }

  return letter;
}
const getLetterTest = getLetter("suka");
console.log("res leter", getLetterTest);
