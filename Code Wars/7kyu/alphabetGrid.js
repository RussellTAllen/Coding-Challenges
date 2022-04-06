// https://www.codewars.com/kata/60a94f1443f8730025d1744b/javascript

// a === 97
// z === 122

function grid(n) {
    if (n < 0) return null
    let result = ''
    let charCode = 97
    let nextChar = 97

    for (let i = 0; i < n; i++){
        result += String.fromCharCode(nextChar)
        nextChar++
        charCode = nextChar-1
        if (nextChar > 122) {
            nextChar = 97
            charCode = 96
        }
        for (let j = 1; j < n; j++){
            charCode++
            if (charCode > 122) {
                charCode = 97
            }
            result += ' ' + String.fromCharCode(charCode)
        }
        
        if (n > i+1) result += '\n'
    }

    return result
}

console.log(grid(0), '');
console.log(grid(1), 'a');
console.log(grid(2), 'a b\nb c');
console.log(grid(4), 'a b c d\nb c d e\nc d e f\nd e f g');
console.log(grid(6), 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k');
console.log(grid(27))
