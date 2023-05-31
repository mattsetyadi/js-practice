// I - char pertama dan terakhir harus sama dan huruf vokal
function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
  let re = /^([aeiou]).+\1$/;
  return re;
}

// II - dimulai dgn prefix langsung titik dan langung huruf kapital Mr.David
function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
  // followed by one or more letters.
  let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(!!s.match(re));
}

//  III -
/*
 * Declare a RegExp object variable named 're'
 * It must match ALL occurrences of numbers in a string.
 * Sample input 0 = 102, 1948948 and 1.3 and 4.5
 * Explanation 0
 * When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].
 * Sample input 1 = 1 2 3
 * When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '1', '2', '3' ].
 */

function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match ALL occurrences of numbers in a string.
  let re = /\d+/g;
  return re;
}
function main() {
  const re = regexVar();
  const s = readLine();

  const r = s.match(re);

  for (const e of r) {
    console.log(e);
  }
}
