// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// 1 Find the unique number (this kata)
// 2 Find the unique string
// 3 Find The Unique

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if (arr[i] !== arr[j]){    
                if (arr[j+1] !== arr[j]) return arr[j]                
                else return arr[i]
            }
        }
    }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))     // === 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))     // === 0.55 
console.log(findUniq([ 0, 1, 0 ]))              // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))     // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ]))       // 10
console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]))     // 2