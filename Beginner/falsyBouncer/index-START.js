/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


//Using a for...of loop
// function falsyBouncer(array) {

//     let result = []

//     for (value of array){
//         if (value){
//             result.push(value)
//         }
//     }
//     return result
// }
//this approach is faster, although not by much

//using .filter
function falsyBouncer(array) {
    return array.filter( (value) => {
        return Boolean(value)
    })
}
//5% slower

console.log(falsyBouncer([1,0,'',2, null, 3, false]))

module.exports = falsyBouncer