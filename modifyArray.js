const modifyArray = (nums) => {
  const something = function (n) {
    if (n % 2 == 0) return n * 2;
    else return n * 3;
  };
  const newArray = nums.map(something);
  return newArray;
};

function main() {
  const n = +readLine();
  const a = readLine().split(" ").map(Number);

  console.log(modifyArray(a).toString().split(",").join(" "));
}

// Input
// 5
// 1 2 3 4 5
