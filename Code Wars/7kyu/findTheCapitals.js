// Find the Capitals - 7 kyu
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

function capitals(word){
    return [...word].map((v, idx) => /[A-Z]/.test(v) ? idx : '').filter(x => x !== '')
}

console.log(capitals('CodEWaRs'), [0,3,4,6])