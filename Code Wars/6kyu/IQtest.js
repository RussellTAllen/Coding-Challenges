// IQ Test - 6 kyu

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// function iqTest(numbers){
//     let even = 0
//     let odd = 0
//     let result = []
//     numbers = numbers.split(' ')
//     for (let i = 0; i < numbers.length; i++){
//         numbers[i] % 2 === 0 ? even++ : odd++
//     }
//     odd === 1 ? result = numbers.filter(n => n % 2 !== 0) : result = numbers.filter(n => n % 2 === 0)
//     return numbers.indexOf(result.toString()) + 1
// }

function iqTest(nums){
    nums = nums.split(' ')
    let odd = nums.filter(n => n % 2 !== 0)
    let even = nums.filter(n => n % 2 === 0)
    return odd.length === 1 ? nums.indexOf(odd[0]) + 1 : nums.indexOf(even[0]) + 1
}

console.log(iqTest("2 4 7 8 10"))
// => 3
console.log(iqTest("1 2 2"))
// =>  1
console.log(iqTest("1 2 1 1"))
// => 2
console.log(iqTest("5 3 2"))
// => 3
console.log(iqTest('100 100 1'))
// => 3
