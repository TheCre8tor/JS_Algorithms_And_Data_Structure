/* EXPLANATION:

   # PROBLEM SOLVING
      - 1. Understand the problem
      - 2. Explore Concrete Examples
      - 3. Break It Down
      - 4. Solve/Simplify
      - 5. Look Back and Refactor 
*/

/* # 1. Understand the problem -->

   1a. Can I restate the problem in my own words?
   1b. What are the inputs that go into the problem?
   1c. What are the outputs that should come from the 
       solution to the problem?
   1d. Can the outputs be determined from the inputs?
       In other words, do I have enough information to
       solve the problem? 

       NOTE: You may not be able to answer this question
       until you set about solving the problem. That's 
       okay; it's still worth considering the question 
       at this early stage.
       
   1e. How should I label the inportant pieces of data
       that are a part of the problem? 

   ## ----------------------------

   Example 1:
   Write a function which takes two number and returns their sum 
   
   1a. Can I restate the problem in my own words?
       -- Implement Addition

   1b. What are the inputs that go into the problem?
       -- Int?
       -- Float?
       -- What about string for large numbers?

   1c. What are the outputs that should come from the 
       solution to the problem?
       -- Int?
       -- Float?
       -- String?

   1d. Can the outputs be determined from the inputs?
       In other words, do I have enough information to
       solve the problem? 

       -- In the most cases the answer is going to be yes.
       
   1e. How should I label the inportant pieces of data
       that are a part of the problem? 
       
       -- name our function - Add
       -- num1 and num2 for the arguments
       -- and sum is our result.
       
*/

/* # 2. Explore Concrete Examples -->

   2a. Start with Simple Examples
   2b. Progress to More Complex Examples
   2c. Explore Examples with Empty inputs
   2d. Explore Examples with Invalid Inputs 

   ## ----------------------------

   Example 2:
   Write a function which takes in a string
   and returns counts of each character in
   the string.

   # 2a. Start with Simple Examples -->
   charCount('aaaa'); // return {a: 4}
   charCount('hello'); // return {h: 1, e: 1, l: 2, o: 1}

   # 2b. Progress to More Complex Examples
   charCount('my phone number is 182763');
     - If this is the input, what do we expect to return?
     - Do we want to account for spaces?
     - What about other character, (dollar sign, underscore, numbers)?

   charCount('Hello hi');
     - Do we store an uppercase or lowercase H?
     - Or do we ignore casing?
    
   charCount('Your PIN number is 1234')
     - return { 1:1, 2:1, 3:1, 4:1, b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1 }

   # 2c. Explore Examples with Empty inputs
   charCount() // should we return - null | undefined | error?
   charCount("") // should we return - null | undefined | error?

   # 2d. Explore Examples with Invalid Inputs 
   charCount(878000) // should we return - null | undefined | error?
   
*/

/* # 3. Break It Down --> 

    # STEP: 1

    function charCount(str: string): object {
        1. do something
        2. return an object with keys that are lowercase alphanumeric characters in the string;
        3. values should be the counts for those characters
    }

    # STEP: 2
    function charCount(str: string): object {
        1. make object to return at end
        2. loop over string, for each character...
         -- if the char is a number/letter AND is a key in the object, add one to count.
         -- if the char is a number/letter AND not in object, add it to object and set value to 1.
         -- if char is something else (space, period, etc.) don't do anything
        3. return object at end 
    }
*/

// FILL IN THE BLANK ->
function charCount(str: string): object {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in the object, add one to count.
  // if the char is a number/letter AND not in object, add it to object and set value to 1.
  // if char is something else (space, period, etc.) don't do anything
  // return object at end

  return {};
}
