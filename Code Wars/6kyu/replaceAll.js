// replaceAll(input,find,replace) - 6 kyu

// Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string with the given replace string.

// The function will always be called with three strings, so don't worry about validating the arguments.

// As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character, effectively inserting replace in-between each character, including the start and end of the string. I've given you some tests for this to make it a little clearer.


function replaceAll(input, find, replace) {
    if (input === find) return replace
    if (input.length === 0) return replace
    if (input.length === 1) return replace+input+replace
    if (find === '') {
        let result = ''
        for (let i = 0; i < input.length; i++){
            result += replace+input[i]
            if (i === input.length - 1) result += replace

        }
        return result
    }
    for (let i = 0; i < input.length; i++){
        input = input.replace(find, replace)        
    }
    return input
}


console.log(replaceAll("string-string", "ing", "!"))
// "str!-str!", "Matches found"
console.log(replaceAll("", "", "-"))
// "-", "Empty input, empty find"
console.log(replaceAll("1", "", "-"))
// "-1-", "Single-character input, empty find"
console.log(replaceAll("123", "", "-"))
// "-1-2-3-", "Empty string as find"


let string = "test"

console.log(string.replaceAll('', '?'))

console.log('b'+string[0]+'b'+string[1]+'b')

// Much more clever solution -
function replaceAll(input, find, rep) {
    let arr = input.split(find);
    if (find.length === 0) {
      arr.unshift('');
      arr.push('');
    }
    return arr.join(rep)
  }