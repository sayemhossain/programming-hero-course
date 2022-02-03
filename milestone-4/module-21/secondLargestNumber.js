function secondLargestNumber(arr, arrSize) {
  if (arrSize < 2) {
    return "Invalid Input";
  }

  //   sort the array
  arr.sort();
  for (let i = arrSize - 2; i >= 0; i--) {
    if (arr[i] != arr[arrSize - 1]) {
      return "The second largest number is " + arr[i];
    }
  }
}
let arr = [12, 43, 56, 76, 99];
let arrSize = arr.length;
const secondLargest = secondLargestNumber(arr, arrSize);
console.log(secondLargest);
