/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// Using .forEach Method
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
    
  });
  return capsArray.join(' ')
}

//Using map and slice
// function capSentence(text){
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = wordsArray.map(word =>{
//     return word[0].toUpperCase() + word.slice(1)
//   })
//   return capsArray.join(' ')
// }


//Using .map() amd .replace()
function capSentence(text){

  let wordsArray = text.toLowerCase().split(' ')

  let capsArray = wordsArray.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
}
//this is slowest according to text, but fastest on my end using benchmark site

console.log(capSentence('welcome to paradise'))
module.exports = capSentence