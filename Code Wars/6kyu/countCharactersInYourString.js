// Count Characters in your String - 6 kyu
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count(str){
//     const result = {}
//     for (let i = 0, len = str.length; i < len; i++){
//         result[str[i]] ? result[str[i]]++ : result[str[i]] = 1
//     }
//     return result
// }

function count (str) {
    const obj = {}
    str.split('').forEach(c => obj[c] ? obj[c]++ : obj[c] = 1 )
    return obj
}









console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});    