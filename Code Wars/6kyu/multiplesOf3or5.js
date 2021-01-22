// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
    if(number <= 2) return 0
    nums = []
    for (let i = 1; i < number; i++){
        i%3 === 0 || i%5 === 0 ? nums.push(i) : nums.push(0)
    }
    return nums.reduce((a,b) => a+b)
}

console.log(solution(10))
console.log(solution(1))
console.log(solution(2))
console.log(solution(4))
