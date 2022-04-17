// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

function isOddHeavy(n){
    const evens = n.filter(num => num % 2 === 0)
    const odds = n.filter(num => num % 2 !== 0)
    const highestEven = Math.max(...evens)

    return odds.length > 0 && odds.every(num => num > highestEven)
}

console.log(isOddHeavy([0,2,19,4,4]),true);
console.log(isOddHeavy([1,-2,-1,2]),false);
console.log(isOddHeavy([ 0, 2, 19, 4, 4 ]),true);
console.log(isOddHeavy([ -1, 1, -1, 2, 1, -1, 1, -2 ]),false);
console.log(isOddHeavy([ 0, 2, 19, 4, 4 ]),true);
console.log(isOddHeavy([ 0, -1, 1 ]),false);
console.log(isOddHeavy([ 2 ]),false);