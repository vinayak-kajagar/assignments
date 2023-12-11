/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }

  strng1=str1.toLowerCase();
  strng2=str2.toLowerCase();

  let string1 = strng1.split("").sort()
  let string2 = strng2.split("").sort()

  for(let i=0;i<string1.length;i++){
    if(string1[i]!=string2[i]){
      return false;
    }
  }

  return true;

}



module.exports = isAnagram;
