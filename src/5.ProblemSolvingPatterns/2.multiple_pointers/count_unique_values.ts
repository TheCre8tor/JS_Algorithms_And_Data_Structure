/* Implement a function called countUniqueValues,
   which accepts a sorted array, and counts the
   unique values in the array. There can be negative
   numbers values in the array, but it will always
   be sorted. */

function countUniqueValues(arr: number[]) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const uniqueValues = countUniqueValues([
  1, 1, 2, 2, 4, 5, 1, 3, 3, 8, 0, 0, 11,
]);
console.log(uniqueValues);
