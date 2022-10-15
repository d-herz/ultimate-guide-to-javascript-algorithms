/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//Chaining methods
function reverseString(text) {
    return [...text].reverse().join('')
}
//this is the slowest implementation

//For loop
function reverseString(text) {
    let result = ''

    for(let i =text.length-1; i >=0; i--){
        result += text[i]
    }
    console.log(result)
    return result
}


//For OF loop
function reverseString(text) {
    let result = ''

    for(let char of text){
        result = char + result
    }
    console.log(result)
    return result
}


//Recursive way
function reverseString(text) {
    if( text === ''){
        return ''
    }else{
        console.log(reverseString(text.substr(1)) + text[0])
        return reverseString(text.substr(1)) + text[0]
    }
}

//Using .reduce()
function reverseString(text) {
    
    return [...text].reduce((acc, char) => char + acc, '')
}
//this is the fastest implementation





module.exports = reverseString
