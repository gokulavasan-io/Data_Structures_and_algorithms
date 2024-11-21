//Given an array of integers, check if there are four elements in the array with given sum.

function fourSum(arr, target) {

  let obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let twoSum = arr[i] + arr[j];
      let remainValue = target - twoSum;

      if (obj[remainValue]) {
         return true

      } else {
        obj[twoSum] = [arr[i], arr[j]];
      }
    }
  }
  return false;
}

let arr = [1, 2, 3, 3, 5, 6, 7, 8, 9];
console.log(fourSum(arr, 13));
