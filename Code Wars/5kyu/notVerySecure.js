// Not very secure - 5 kyu

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


function alphanumeric(string){
    if(string === '' || string.includes('_') || string.includes(' ')) return false
    return /\W/.test(string) == false ? true : false 
}


console.log(alphanumeric("Mazinkaiser"))
// true
console.log(alphanumeric("hello world_"))
// false
console.log(alphanumeric("PassW0rd"))
// true
console.log(alphanumeric("     "))
// false
console.log(alphanumeric('     '))
// false
console.log(alphanumeric('	'))
// false

console.log(alphanumeric('UiPc4ubENKZB_TANc'))
// false

