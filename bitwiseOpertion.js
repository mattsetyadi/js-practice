function getMaxLessThanK(n, k) {
  let max = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let bw = a & b;

      bw < k && bw > max && (max = bw);
    }
  }

  return max;
}

function main() {
  const q = +readLine();

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(" ").map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}

// Input
//   q = 3
//  n & k = {
// 5 2
// 8 5
// 2 2
// }
