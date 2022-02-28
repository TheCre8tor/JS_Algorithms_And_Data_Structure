Introducing Big O.

Big O notation is a mathematical notation that describes
the limiting behavior of a function when the argument tends
towards a particular value or infinity.

It allows us to talk formally about how the runtime of an
algorithm grows as the inputs grow.

```txt
fn(n) could be "linear" (fn(n) = n) -> The function with an input of n and the output is n
fn(n) could be "quadratic" (fn(n) = n2) -> The function with an input of n and the output is n2
fn(n) could be "constant" (fn(n) = 1) -> The function with an input of n and the output is constant
fn(n) could be something entirely different!
```

When we are talking about Big O, we are talking about
the worst case scenerio.

```js
// Always 3 operations
// O(1) -> Constant

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

# Linear

```js
// The operations grows as the size of n grows
// O(n) -> Linear

const addUpTo = (n: number) => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};
```

# Linear

```js
// The operations grows as the size of n grows
// O(n) -> Linear

function countUpAndDown(n) {
  console.log("Going up!");

  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("Back down. Bye!");
}
```

# Quadratic

```js
/* O(n) operation inside of an 
   O(n) operation is -> O(n * n)
   
   = O(n2) -> Quadratic
   */

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
