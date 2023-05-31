// function getDayName(dateString) {
//   return [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ][(new Date(dateString)).getDay()];
// }

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(date);
}

function main() {
  const d = +readLine();

  for (let i = 0; i < d; i++) {
    const date = readLine();

    console.log(getDayName(date));
  }
}

// Input (stdin)
// 2
// 10/11/2009
// 11/10/2010

// Your Output (stdout)
// Sunday
// Wednesday
