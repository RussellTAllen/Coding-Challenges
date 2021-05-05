// Evens Times Last - 7 kyu

// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.
function evenLast(numbers) {
    let result = 0
    for (let i = 0; i < numbers.length; i+=2){
        result += numbers[i]
    }
    return result * numbers[numbers.length - 1]
}


  console.log(evenLast([2, 3, 4, 5]))
  // => 30