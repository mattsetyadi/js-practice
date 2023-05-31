// Goals = Get the second largest number in array
// 1st Solution
function getSecondLargestSt(nums) {
  // Complete the function
  const max = Math.max(...nums);

  nums = nums.filter((num) => num !== max);

  return Math.max(...nums);
}

// 2nd solution
function getSecondLargestNd(nums) {
  // Complete the function
  let results = nums
    .sort((a, b) => a - b)
    .filter((el, index, array) => index === array.indexOf(el));

  return results[results.length - 2];
}
