// Given an array of items, reverse the order.
// No reverse method! Unless that is your brute force first...

// FIRST SOLUTION
// function reverseArray(arr){
//     let result = []
//     for (let i = arr.length-1; i >= 0; i--){
//         result.push(arr[i])
//     }
//     return result
// }

// SOLUTION IN HALF TIME
function reverseArray(arr){
    for (let i = 0; i < arr.length/2; i++){
        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray(['one','two','three','four','five']))
console.log(reverseArray(['hello', 'world!']))