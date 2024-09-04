/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const arr = [3, 7, 2, 9, 1];
function findLargestElement(arr){
    let largestNumber = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}
const result = findLargestElement(arr);
console.log(result);

module.exports = findLargestElement;