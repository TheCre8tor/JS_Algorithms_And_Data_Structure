"use strict";
/* The Problem with using Time in comparing codes
  1. Defferent machines will record different times
  2. The same machine will record different times!
  3. For fast algorithms, speed measurements may
     not be precise enough
     
    If not time, then what?
    ? Rather than counting seconds,
    ? which are so variable...

    Let's count the number of simple operations
    the computer has to perform!
  */
// Option 1 -->
var addUpTo = function (n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
    /* Counting Operations:
      1. =
      2. =
      3. <=
      4. ++
      5. +=
      
      ? We have five operations
      ? to perform
  
      ! Five operation * n
      ! n can be 100 || 1000 || billion
    */
};
// Option 2 -->
var addUpToX = function (n) {
    return (n * (n + 1)) / 2;
    /* Counting Operations:
      1. *
      2. +
      3. /
      
      ? We have three operations
      ? to perform
  
      * This operations remain constant
    */
};
console.time();
// console.log(addUpTo(6000000000));
console.log(addUpToX(6000000000));
console.timeEnd();
