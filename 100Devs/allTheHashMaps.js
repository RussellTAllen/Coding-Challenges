// The way you know you may need a hashmap is if you are receiving an input as an array or string and you need to count each time the items appear within

// THIS IS HOW YOU TURN A STRING OR ARRAY INTO A HASHMAP OBJECT
function turnStringOrArrayIntoHashMap(arr){
    const hashMap = {}
    
    for (const letter of arr){
        if (!hashMap[letter]) hashMap[letter] = 1
        else hashMap[letter]++
    }
    
    return hashMap
}

console.log(turnStringOrArrayIntoHashMap('aaaaaaccccccccccdd'))

////////////////////////////////////////////////////////////////

// Given a string of characters, return the character that appears the most often.

// FIRST SOLUTION
// function maxCharacter(str){
//     const hashMap = {}

//     for (const letter of str){
//         if (!hashMap[letter]) hashMap[letter] = 1
//         else hashMap[letter]++
//     }

//     let highCount = 0
//     let highChar = ''

//     for (let key in hashMap){
//         if (hashMap[key] > highCount){
//             highCount = hashMap[key]
//             highChar = key
//         }
//     }

//     return highChar
// }


// SOLUTION USING OBJECT.KEYS()
function maxCharacter(arr){
    const hashMap = {}

    for (const letter of arr){
        if (!hashMap[letter]) hashMap[letter] = 1
        else hashMap[letter]++
    }

    return Object.keys(hashMap)
                 .reduce((stored, curr) => hashMap[curr] > hashMap[stored] ? curr : stored)
}

// console.log(maxCharacter(['a','b','c','c','c','d','d','e']))
// console.log(maxCharacter('abcccdde'), 'c')



//////////////////////////////////////////////////////////////////////////////////
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// function containsDuplicate(arr){
//     const obj = {}

//     for (const key of arr){
//         if (obj[key]) return true
//         else obj[key] = 1
//     }

//     return false
// }

// console.log(containsDuplicate([1,2,1,3]), true)
// console.log(containsDuplicate([1,2,3,4]), false)
// console.log(containsDuplicate(['bob', 'kiran', 'russell', 'frank', 'bob']), true)
// console.log(containsDuplicate(['a', 'b', 'c', 'd', 'e']), false)
// console.log(containsDuplicate('a,b,c,d,d'), true)

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ (50%) times. You may assume that the majority element always exists in the array.

function majority(arr){
    const hash = {}

    for (const element of arr){
        if (hash[element]) hash[element]++
        else hash[element] = 1
    }

    let half = arr.length / 2

    for (let key in hash){
        if (hash[key] > half) return key
    }    
}

// console.log(majority([4,5,5]), 5)
// console.log(majority([1,2,5,5,5,5]), 5)
// console.log(majority([1,2,5,5]))

