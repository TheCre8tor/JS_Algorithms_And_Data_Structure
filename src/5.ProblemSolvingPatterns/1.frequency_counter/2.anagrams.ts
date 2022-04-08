// ANAGRAMS

/* Given two strings, write a function to determine if the
   second string is an anagram of the first.
   
   An anagram is a word, phrase, or name formed by rearranging the
   letters of another, such as cinema, formed from iceman.*/

type OBJ = { [T: string]: number };

const anagrams = (str1: string, str2: string) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup: OBJ = {};

  // loop over the number,
  // check if the item exist in the lookup obj
  // if false, add the item and set it value to one
  // if true, increment it value by one

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  // loop over the collected values from str1
  // check if item of str2 is present in the lookup obj
  // if yes, decrement the value
  // else return false

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

console.log(anagrams("alexanderd", "erdalexand"));
