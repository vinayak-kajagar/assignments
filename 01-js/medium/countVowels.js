/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  string = str.toUpperCase();
  let count = 0;
  for(i=0;i<string.length;i++){
    if(string[i]=='A' | string[i]=='E'|string[i]=='I'|string[i]=='O'|string[i]=='U' ){
      count++;
    }
  }
  return count
}

module.exports = countVowels;