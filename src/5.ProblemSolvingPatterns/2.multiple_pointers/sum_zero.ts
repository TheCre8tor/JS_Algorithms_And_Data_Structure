function sumZero(arr: number[]): number[] {
  let left = 0;
  let right = arr.length - 1;

  let result: number[] = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      result.push(arr[left], arr[right]);
      break;
    } else if (sum > 0) {
      console.log(sum);
      right--;
    } else {
      left++;
    }
  }

  return result;
}

const results = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
console.log(results);
