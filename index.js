function isPalindrome(word) {
  for (i=0;i<word.length/2;i++){
    let t=word.length-1-i;
    if (word[i]!==word[t]){
        return false
    } else return true
  }
}

/* 
  if first characters are same with characters backward return true else false
*/

/*
a function that compare characters of a given word from the bigining and the end until the middle of the word
if the characters are the same return true and if any of the pairs are not the same return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
