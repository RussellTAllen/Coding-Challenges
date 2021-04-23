// Twisted Sum - 6 kyu

// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n){
    let sum = 0
    for (let i = 1; i <= n; i++){
        if (i < 10) sum+=i
        else{
            sum += i.toString().split('').map(num =>{ return Number(num) }).reduce((a,b) => a+b)
        }
    }
    return sum
}


  console.log(twistedSum(3))
  // => 6
  console.log(twistedSum(10))
  // => 46
  console.log(twistedSum(11))
  // => 48
  console.log(twistedSum(12))
  // => 51