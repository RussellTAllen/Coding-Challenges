// Sum Strings as Numbers - 4 kyu

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
    if (a.length > 20 || b.length > 20){
        let smallA = a.slice(a.length - 15)
        let smallB = b.slice(b.length - 15)
        let bigA = a.slice(0, a.length - 15)
        let bigB = b.slice(0, b.length - 15)
        let bigResult = (Number(bigA) + Number(bigB)).toString()
        let smallResult = (Number(smallA) + Number(smallB)).toString()
        if (smallResult.length > smallA.length || smallResult.length > smallB.length){
            smallResult = smallResult.slice(1)
            bigResult = Number(bigResult) + 1
        }
        return bigResult + smallResult
    }
    return ((Number(a) + Number(b))).toString()    
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
// => '712577413488402631964821329'
console.log(sumStrings('937461173016784165289524745676', '891882434463928000494893352235'))
// => '1829343607480712165784418097911'
console.log(sumStrings('123','456'))
// => '579'
console.log(sumStrings('1','2'))
// => '3'






