// Testing 1-2-3 - 7 kyu

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
    let results = []
    array.forEach((string, idx) => {
        results.push(`${idx+1}: ${string}`)
    });
    return results
}


console.log(number([]))
// => [], 'Empty array should return empty array'
console.log(number(["a", "b", "c"]))
// => ["1: a", "2: b", "3: c"], 'Return the correct line numbers'            