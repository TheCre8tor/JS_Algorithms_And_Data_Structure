Space Complexity in JS

# Rule of Thumb

1. Most primitives (booleans, numbers, undefined, null)
   are constant space O(1).
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length
   (for arrays) or the number of keys (for objects).

# Example

```js
/* According to the rule of space
      complexity this function returns
      a number. The space complexity is
      O(1) space.
      */

function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

```js
/* According to the rule of space
      complexity this function returns
      an array. The space complexity is
      O(n) space.
      */

function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
}
```
