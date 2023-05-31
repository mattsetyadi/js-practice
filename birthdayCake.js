function birthdayCake(arr) {
  console.log("arr", arr, ...arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let newCandles;

  let freq = 0;
  for (let i = 0; i < arr.length; i++) {
    newCandles = i;
    if (arr[i] === max) {
      freq++;
    }
  }
  console.log("max", max);
  console.log("min", min);
  console.log("newCandles", newCandles);
  console.log("frequency", freq);
  return freq;
}

console.log(birthdayCake([5, 3, 2, 5, 6, 6, 6, 6, 6]));

const testArr = [
  {
    nama: "ujang",
    pekerjaan: "musisi",
  },
  {
    nama: "unang",
    pekerjaan: "bos",
  },
  {
    nama: "umi",
    pekerjaan: "ustazah",
  },
  {
    nama: "uli",
    pekerjaan: "admin",
  },
  {
    nama: "mandi",
    pekerjaan: "judi",
  },
];

console.log("test arr not spread", testArr);
console.log("test arr spread", [...testArr]);
const testArrSpread = { ...testArr };
console.log("new test arr spread", testArrSpread);
console.log("acces test arr spread", testArrSpread[4]);

const newArr = Object.entries(testArrSpread);
console.log("newArr", newArr);
console.log("newArr first", newArr[1]);
for (const i of newArr) {
  // console.log("iterator", i);
  for (const j of i) {
    console.log("terator 2", j);
  }
}
