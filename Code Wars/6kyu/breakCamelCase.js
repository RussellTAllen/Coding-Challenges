// Break Camel Case - 6 kyu

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
    let x = 0
    let arr = string.split('')

    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i].toUpperCase()) {
            arr.splice(i + x, 0, " ")
            x++
        }
    }    
    return arr.join('')
}


console.log(solution("camelCasing"))
// "camel Casing"
console.log(solution('camelCasingTest'))
// 'camel Casing Test'
console.log(solution('notcamelcase'))
// 'notcamelcase'


/// This works, but only for the first camel case
// breakpoint = string.match(regex)
// breakpoint = string.indexOf(breakpoint)
// console.log('breakpoint is ' + breakpoint)
// string = string.split('')
// console.log(string)
// string.splice(breakpoint, 0, " ")
// string = string.join('')
// string = string.split(' ')


////
// Another way -
// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }
