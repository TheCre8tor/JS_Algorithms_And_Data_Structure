# Simplifying Big O Expressions

When determining the time complexity of an algorithm,
there are some helpful rule of thumbs for big O expressions.

# Constants Don't Matter

O(2n) -> O(n)
O(500) -> O(1)
O(13n2) -> O(n2)

# Smaller Terms Don't Matter

O(n + 10) -> O(n)
O(1000n + 50) -> O(n)
O(n2 + 5n + 8) -> O(n2)

# Big O Rule of Thumbs

1. Arithemetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index)
   or object (by key) is constant.
4. In a loop, the complexity is the length
   of the loop times the complexity of
   whatever happens inside of the loop.
