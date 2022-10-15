/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


//iterative approach
const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
    let counter = 0

    for (let i of text.toLowerCase()){
        if (vowels.includes(i)){
            counter++
        }
    }
    return counter
}
//This was quicker I think. at least according to what I am seeing (not what the article says though)

//Regular Expresions approach

function vowelsCounter(text){
    let matchingInstances = text.match(/[aeiou]/gi)

    if (matchingInstances){
        return matchingInstances.length
    }else{
        return 0
    }
}

console.log(vowelsCounter('aeiouaaa'))

module.exports = vowelsCounter;
