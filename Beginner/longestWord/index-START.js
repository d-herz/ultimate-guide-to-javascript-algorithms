/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//for loop
// function longestWord(text) {
//     let wordArr = text.split(' ')
//     let maxLength = 0
//     let result = ''

//     for(let i =0; i< wordArr.length; i++){
//         if(wordArr.length > maxLength){
//             maxLength = wordArr[i].length
//             result = wordArr[i]
//         }
//     }

//     return result
// }
//both this one and the reduce below are close in terms of performance


//Using reduce
// function longestWord(text) {
//     let result = text.split(' ').reduce(( maxLengthWord, currentWord) => {
//         if (currentWord.length > maxLengthWord.length) {
//             return currentWord
//         } else {
//             return maxLengthWord
//         }
//     }, '')
//     return result
// }
//both this one and the for loop are close in terms of performance


//Using .sort()
function longestWord(text) {
    let sortedArr = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
    
    return sortedArr[0]
}
//according to the text, this was by far the slowest 

console.log(longestWord('Top Shelf Web Development Training on Scotch'))
module.exports = longestWord