

/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/
// The signs must not change, the value returned must be an integer, all insignifcant 0's must be removed (i.e. 900 becomes 9 and not 009)

//this was our string reversal from earlier

function reverseString(text) {

  return [...text].reduce((acc, char) => char + acc, '')
}


function reverseInteger(num) {

  let reversedNumber = parseInt(reverseString(num.toString()))

  return (reversedNumber * Math.sign(num))
}


// function reverseInteger(num) {

// }


console.log(reverseInteger(-123))
module.exports = reverseInteger;