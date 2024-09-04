/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // first convert the strings into lowercase to avoid case differences
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // now use split(),sort()and join()
    return str1.split('').sort().join('') === str2.split('').sort().join('') ;
}
const result1 = isAnagram("acts" , "cats");
console.log(result1);
const result2 = isAnagram('listen' , 'silent');
console.log(result2);
const result3 = isAnagram('The eyes' , 'they see');
console.log(result3);

module.exports = isAnagram;


// Issues !
// 1. not knowing the complete code
// 2. not knowing the use of split , sort, and join method
// 3. not using seperator i.e {''} in split and join method due to which the method was converting our string input into just a single element array having a elements "str" however we wanted to get the each element of string in a individual character of string in a form of array.
// 5. not knwing what an ANAGRAM is 

//  Learnings !
// 4. split method is used to split the strings or arrays into individual character having a seperate array
// 5. sort method is used to sort the elements of string or array in a correct order
// 6. join method is used to join the concatenate the elements of array back into string.
// 7. why did we use join('') method with empty string operator ??
// --> we use join method with seperator because if we dont use it then by default it will concatenate with {,} seperator which we dont want.
// 8. what is === ?
// --> it is strict equality operator which checks both value and type of input and then pass boolean datatype as a output.

