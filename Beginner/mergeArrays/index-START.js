/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//Combining arrays

//Using Sets
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })

//     return [...new Set([...jointArray])]
// }
//2nd fastest approach


//using Array.from()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     return Array.from(new Set([...jointArray]))
    
// }


//using .filter()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    
//     return uniqueArray
// }
//this was the fastest approach (according to the text)

//using .reduce()
function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    
    const uniqueArray = jointArray.reduce((newArr, item) => {
        if (newArr.includes(item)){
            return newArr
        } else {
            return [...newArr, item]
        }
    }, [])
    
    return uniqueArray 
}


console.log(mergeArrays([1,2,3,4,5,6,7], [8,8,8,9,10,11,12]))
module.exports = mergeArrays