// console.log("js running");

/**
 * Given a non empty array of digits representing non negative integer, plus one to the integer
 * The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number O itself
Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: (4,3,2,1)
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
 */

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    // BIG NOTE: i is the last index of array because initial i is from last index array digits.length -1

    if (digits[i] < 9) {
      console.log("digit", digits[i]);
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // handle case if input [9, 9] and will return  [0, 0], unshift whill add 1 to the first
  // only case with all executed in else block / last number is 9
  digits.unshift(1);

  // if condition else executed, heres the return
  return digits;
};

console.log(plusOne([1, 9, 9, 9, 9]));
