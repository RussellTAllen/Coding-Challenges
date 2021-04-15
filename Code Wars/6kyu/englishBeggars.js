// English beggars - 6 kyu

// d to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

function beggars(values, n){
    let result = []
    let current
    for (let j = 0; j < n; j++){
        current = 0
        for (let i = j; i < values.length; i+=n){
            current += values[i]
        }
        result.push(current)
    }
    return result
}


console.log(beggars([1,2,3,4,5],1))
// => [15]
console.log(beggars([1,2,3,4,5],2))
// => [9,6]
console.log(beggars([1,2,3,4,5],3))
// => [5,7,3]
console.log(beggars([1,2,3,4,5],6))
// => [1,2,3,4,5,0]
console.log(beggars([1,2,3,4,5],0))
// => []
 