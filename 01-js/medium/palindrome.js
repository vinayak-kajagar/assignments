/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  string=str.toLowerCase().replace(/\s+/g, '').replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g,'');
  
  let reversedString='';
  for(let i=string.length-1;i>=0;i--){
    reversedString = reversedString + string[i];
  }
  if(reversedString==string){
    return true
  }
  return false;

}

module.exports = isPalindrome;
