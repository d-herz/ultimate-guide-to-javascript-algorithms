/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// for..in iteration
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let i of text){
        if (charMap.hasOwnProperty(i)) {
            charMap[i]++
        } else {
            charMap[i] = 1
        }
    }

    for (let i in charMap) {
        if (charMap[i] > maxCharValue){
            maxCharValue = charMap[i]
            maxChar = i
        }
    }
    return maxChar
}
// above approach seems to be fastest 

//Forming Arrays from the character MAP
function maxRecurringChar(text) {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for (let i of text) {
        if (charMap.hasOwnProperty(i)){
            charMap[i]++
        }else {
            charMap[i] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    console.log(charMap)
    return charArray[valuesArray.indexOf(maxCharValue)]
}


console.log(maxRecurringChar('aaaaaaabbbbddfsdfffff'))

module.exports = maxRecurringChar;