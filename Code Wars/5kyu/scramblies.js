// Scramblies - 5 kyu

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

function scramble(str1, str2) {
    let s1 = {}
    let s2 = {}
    let prop
    for (let i = 0; i < str1.length; i++){
        prop = str1[i]
        if (prop in s1) s1[prop] = s1[prop] +1
        else s1[prop] = 1        
    }
    for (let j = 0; j < str2.length; j++){
        prop = str2[j]
        if (prop in s2) s2[prop] = s2[prop] +1
        else s2[prop] = 1        
    }    
    for (key in s2){
        if (s1[key] === undefined || s2[key] > s1[key]) return false
    }
    return true
}
   

console.log(scramble('cccccta', 'cat'))
// ==> true
console.log(scramble('ccccct', 'cat'))
// ==> false
console.log(scramble('rkqodlw', 'world')) 
// ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
// ==> True
console.log(scramble('katas', 'steak')) 
// ==> False
console.log(scramble('scriptjava','javascript'))
// ==> true
console.log(scramble('scriptingjava','javascript'))
// ==> true
console.log(scramble('scriptsjava','javascripts'))
// ==> true
console.log(scramble('jscripts','javascript'))
// ==> false
console.log(scramble('aabbcamaomsccdd','commas'))
// ==> true


// FIRST SOLUTION - works, but is too time complex
// function scramble(str1, str2) {
//     str1 = str1.split('').sort()
//     str2 = str2.split('').sort()
//     let result = []
//     for (let i = 0; i < str1.length; i++){
//         if (str1[i] === str2[i]) result.push(str1[i])
//         else {
//             str1.splice(i, 1)
//             i--
//         }
//     }
//     return result.length === str2.length ? true : false
// }


/////////////
// Slick two-line solution 
const scramble = (str1, str2) =>
  [...str2].every(val => str2.split(val).length <= str1.split(val).length);

/////////////
// Similar to my first solution -
function scramble(str1, str2) {
    var array1 = str1.split("").sort();
    var array2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i<array2.length && x<=array1.length; x++) {
        if(array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}