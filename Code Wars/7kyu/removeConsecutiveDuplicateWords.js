// Remove Consecutive Duplicate Words - 7 kyu

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// BRUTE FORCE LOOP SOLUTION
// function removeConsecutiveDuplicates(s){
//     let arr = s.split(' ')
//     let result = []
//     for (let i = 0, len = arr.length; i < len; i++){
//         if (arr[i] !== arr[i+1]) result.push(arr[i])
//     }
//     return result.join(' ')
// }

// SLICK METHODS SOLUTION
function removeConsecutiveDuplicates(s){
    let arr = s.split(' ')
    return arr.filter((w, i) => w !== arr[i+1]).join(' ')
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
