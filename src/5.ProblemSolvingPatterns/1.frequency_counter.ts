type List = { [K: string]: number };

function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1: List = {};
  let frequencyCounter2: List = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    const squaredKey = parseInt(key) ** 2;

    if (!(squaredKey in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

const result = same([1, 3, 1], [9, 1, 1]);
console.log(result);
