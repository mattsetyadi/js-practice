function sides(literals, ...expressions) {
  // ES6 allows destructuring of arrays into multiple variables
  const [a, p] = expressions;
  // Perform this operation only once and assign to variable
  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;
  // s2 will always be smaller because of the (-/+) above
  return [s2, s1];
}

// 2nd Solution
// function sides(literals, ...expressions) {
//   const [a, p] = expressions;
//   const value = Math.sqrt((p ** 2 - (16 * a)));

//   return [((p - value) / 4), ((p + value) / 4)];
// }

function main() {
  let s1 = +readLine();
  let s2 = +readLine();

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
    2 * (s1 + s2)
  }.`;

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}

// input
// 10
// 14
