// Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:
//arrayFilter(arr, func)

//imperative approach using for...of (this doesnt work?)
// function arrayFilter(arr, func) {
//   for (let elem of arr) {
//     if (func(elem)){
//       return elem
//     }
//   }
//   return undefined
// }

// Using .filter()
// function arrayFilter(arr, func) {
//   let filteredArray = arr.filter(func);
//   return filteredArray[0] ? filteredArray[0] : undefined
// }


// Using .find()
function arrayFilter(arr, func) {
  return arr.find(func)
}


console.log(arrayFilter([1,2,3,4,5], func))