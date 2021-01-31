// Delete occurrences of an element if it occurs more than n times - 6 kyu

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]
//   deleteNth ([20,37,20,21],1) // return [20,37,21]


//// First attempt - not working
// function deleteNth(arr,n){
//     let result = []
//     let count = 0
//     for (let i = 0; i < arr.length; i++){
//         count = 0
//         count++
//         for (let j = 1; j < arr.length; j++){
//             if (arr.includes(arr[i], j) && count === n){
//                 arr.splice(arr.indexOf(arr[i], j), 1)
//             }else if (arr.includes(arr[i], j)){
//                 count++
//             }
            
//         }
//     }
//     return arr
// }
//////
// Not working either... maybe try counting all the instances of a number first, then if count > n splice from there...
// arr.includes(arr[i], i + 1) // possible condition for for loop

// function deleteNth(arr,n){
//     count = 0

//     for (let i = 0; arr.includes(arr[i], i + 1) ; i++){
//         count++
//         if (arr.includes(arr[i], i + 1)) {
//             count++
            
//         }
//         console.log("count is " + count)
//         if (count >= n) {
//             console.log(count, n)
//             arr.splice(arr.indexOf(arr[0], 0 + 1), 1)
//             console.log(arr)
//         }
//     }    
//     return arr
// }


        // THIS is where the problem is ... maybe change it to a while loop, but the logic is def broken here
        // for (let j = 1; j < arr.length; j++){
        //     if (arr.indexOf(testNum, x + 1) !== -1){
        //         count++  
        //         x = arr.indexOf(testNum, x)
        //     }
        // }
        /////////////////////////////////////////////////////////////////////////////////////

// function deleteNth(arr,n){
//     let count, testNum, x
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr + " initial " + " and " + i + " is index")
//         x = 1 + i
//         count = 1
//         testNum = arr[i]
//         // THIS is where the problem is ... maybe change it to a while loop, but the logic is def broken here
//         while (arr.indexOf(testNum, x) !== -1){
//                 count++  
//                 console.log(`count is ${count}`)
                
//                 if (arr.indexOf(testNum, x+1) !== -1){
//                     x = arr.indexOf(testNum, x+1)
//                     console.log(`x is ${x} and i is ${i}`)
//                 } else break
//         }        
//         /////////////////////////////////////////////////////////////////////////////////////
//         while (count > n){
//             arr.splice(arr.lastIndexOf(testNum), 1)
//             count--
//         }
//     }
//     return arr
// }

///////////////////////////////////////////////////////////////
// Attempt #?? - try sorting the array and deleting the correct amount, then filter through and add the nums from the old array if they exist in the new array, delete the nums from the new array with each push

function deleteNth(arr,n){
    let ogArr = [...arr]
    let result = []
    let count
    arr.sort((a,b) => a - b)
    for (let i = 0; i < arr.length; i++){
        count = 1
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]) {
                count++
                if(count > n) {              
                    arr.splice(j, 1)  
                    j--
                }
            }
        }
    }
    ogArr.forEach(num => {
        if (arr.includes(num)){
            result.push(num)
            arr.splice(arr.indexOf(num), 1)
        }
    });
    return result
}


console.log(deleteNth ([1,1,1,1],2))
// return [1,1]
console.log(deleteNth ([20,37,20,21],1))
// return [20,37,21]
console.log(deleteNth ([1,2,2,1],2))
// return [1,2,2,1]
console.log(deleteNth([20,37,20,21], 1))
// [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))
// [1, 1, 3, 3, 7, 2, 2, 2]



/////
// TESTING METHODS
// let arr = [20,37,20,21]

// console.log(arr.splice(arr.indexOf(arr[0], 0 + 1), 1))

// console.log( arr[arr.indexOf(arr[0], 1)] )

// console.log(arr.indexOf(20, 1))

// console.log(arr)

// let array = [1,2,3,4,5, 1]

// console.log(array.indexOf(array[0], 1)) // -1

// array.splice(array.indexOf(array[0], 1), 1)


// console.log(array)

// let x = -1
// let testNum = 5
// let arr = [1,2,3,4,5,5]


// console.log(arr.indexOf(testNum, x))


//////////////////////////////////
// Clever solutions

const deleteNth = (arr, n) =>
  arr.filter((val, idx) => arr.slice(0, idx).filter(v => v === val).length < n);

function deleteNth(arr, x) {
    return arr.filter(
      (e, i) => arr.slice(0, i).filter(e2 => e2 == e).length < x
    );
  }


function deleteNth(arr,n){
    const result = [];
    
    function counter(num) {
      for(let i=0, count = 0; i<=result.length; i++){
        
        result.forEach(x => {
            if (x === num){
            count++;
            }
        })

        if (count < n){
          return result.push(num);
        }
      }
    }
    
    arr.forEach(num => {
      counter(num);
    })
    
    return result;
}