/* Reverse a String */
//Reverse the provided string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// tests
var t1 = typeof reverseString("hello") === "string";
var t2 = reverseString("HeLlLo ! ") === " ! oLlLeH";
var t3 = reverseString("true") === "eurt";
var t4 = reverseString("123") === "321";
console.log(t1, t2, t3, t4);




/* Check Palindromes */
// Return true if the given string is a palindrome. Otherwise, return false
// Palindromes are spelled the same way both forward and backward, ignoring punctuation, case, and spacing
function palindrome(str) {
  str = str.toLowerCase().match(/[a-z0-9]/gi); 
  //cleaner but _ is included as part of a valid string: str = str.toLowerCase().match(/\w/gi);
  while( str.length > 1 ){
    if( str.shift() != str.pop() ){return false;}
  }
  return true;
}

// tests 
var t1 = typeof palindrome("racecar") === 'boolean';
var t2 = palindrome("racecar") === true;
var t3 = palindrome("R ac e C ar!") === true;
var t4 = palindrome("2A3*3a2") === true;
var t5 = palindrome("Rr ac e C ar!") === false;
var t6 = palindrome("2A34a2") === false;
console.log(t1, t2, t3, t4, t5, t6);





/* Longest Word */
// Return the length of the longest word in the provided sentence
function findLongestWord(str) {
  str = str.split(' ');
  str = str.map( (i) => (i.match(/\w/gi) || []).join('') ); // this line can be omitted if no special characters are expected
  str.sort( (a,b) => a.length < b.length );
  return str[0].length;
}

// tests
var t1 = typeof findLongestWord("hi") === "number";
var t2 = findLongestWord("The quick brown fox jumped over the lazy dog") === 6;
var t3 = findLongestWord("The quick .................") === 5;
console.log(t1, t2, t3);

