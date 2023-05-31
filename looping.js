// function factorial(n) {
//   let newNumber;
//   let number;
//   let i = n;
//   let j = n - 1;
//   for (i; i > 0; i--) {
//     console.log(i, j);
//     number = n * i;
//     console.log("number", number);
//   }
//   newNumber = newNumber + number;
//   console.log("new Number", newNumber);

//   return number;
// }

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    // console.log("n inside", n);
    return n * factorial(n - 1);
  }
}

const test = factorial(5);
// console.log("test", test);
