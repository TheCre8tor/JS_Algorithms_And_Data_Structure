/* EXPLANATION:

   # PROBLEM SOLVING
      - 1. Understand the problem
      - 2. Explore Concrete Examples
      - 3. Break It Down
      - 4. Solve/Simplify
      - 5. Look Back and Refactor
*/
function charCounts(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if char is something else (space, period, etc.) don't do anything
    var testAlphaNumeric = /[a-z0-9]/.test(char);
    if (testAlphaNumeric) {
      // if the char is a number/letter AND is a key in the object, add one to count.
      if (result[char] > 0) {
        result[char]++;
      }
      // if the char is a number/letter AND not in object, add it to object and set value to 1.
      else {
        result[char] = 1;
      }
    }
  }
  // return object at end
  return result;
}
console.log(charCounts("Hello There!@"));
// Refactoring 1 -->
function charCount(str) {
  var obj = {};
  for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    char = char.toLowerCase();
    // if char is something else (space, period, etc.) don't do anything
    var testAlphaNumeric = /[a-z0-9]/.test(char);
    if (testAlphaNumeric) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount("Hello There!@"));
// More Refactoring 2 -->
// Refactoring 1 -->
function charCountx(str) {
  var obj = {};
  for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
    var char = str_2[_i];
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount("Hello There!@"));
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  } else {
    return true;
  }
}
