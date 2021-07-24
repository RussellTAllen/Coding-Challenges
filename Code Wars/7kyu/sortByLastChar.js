// Sort By Last Char - 7 kyu
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last(x){
    return x.split(' ').sort((a,b) => a[a.length-1] < b[b.length-1] ? -1 : 1)
}

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 
console.log(last('the tree flee pee abba dabba aaa'))