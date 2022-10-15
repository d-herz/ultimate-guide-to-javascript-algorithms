/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



//intuitive approach
// function palindromeChecker(text) {
//    let reversedText = text.toLowerCase().split('').reverse().join('')
//    return text === reversedText
// }


//looping through and comparing
//this isn't great because once you make it past the middle index you will be repeating comparisons
// function palindromeChecker(text) {
//     let charArr = text.toLowerCase().split('')

//     let result = charArr.every((letter, index) => {
//         return letter === charArr[charArr.length - index - 1];
//     })
//     return result
// }

//Looping through and comparing characters (optimized)
//this version is like above but doesn't repeat comparisons
function palindromeChecker(text) {
   let textLen = text.length
   for (let i = 0; i< textLen/2; i++){
    if (text[i] !== text[textLen -1 -i]){
        return false
    }
   }
   return true;
 }
 //this was the fastest approach per the article, while the slowest was the first one (87% slower)

console.log(palindromeChecker('racecar'))
module.exports = palindromeChecker;