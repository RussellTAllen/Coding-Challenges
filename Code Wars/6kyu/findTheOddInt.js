// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr){
    arr = arr.sort((a,b) => a-b)
    let count = 0
    for (let i = 0; i < arr.length; i++){
        count++
        if ((arr[i] !== arr[i+1]) && (count % 2 !== 0)) return arr[i]
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
// -1
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
// 10
console.log(findOdd([3,4,5,6,7,3,4,5,6]))
// 7
console.log(findOdd([1,1,1,1,5,6,5,6,8,8,2,2,2,1,1]))
// 2

// kwlski's solution 
// function findOdd(arr){
//     return arr.find((el, index, array) => array.filter((el2) => el2 === el).length % 2 !== 0);
//   }

//what i would do
// function findOdd(arr){
//     let count;
//     //use the count variable to count the occurences in the array for the currently iterated element by index i
//     for (let i = 0; i < arr.length; i++) {
//       count = 0
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//       }
//       //now check if count is odd if yes return the current element
//       if (count % 2 !== 0){
//          return arr[i];
//       }
//     }
//     throw new Error("None found");
// }