// Today's Challenge

// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

document.getElementById('button').addEventListener('click', sumFirstLast)

function sumFirstLast(array){
    let trimmedArr = []
    array = document.getElementById('array').value.split(",")
    array.forEach(number => {
        number = String(number).trim()
        trimmedArr.push(Number(number))
        console.log(number)
    });
    let sum = trimmedArr[0] + trimmedArr[trimmedArr.length - 1]
    console.log(sum)
    document.querySelector('p').innerText = `The array is [${trimmedArr}]. \nSum of the first and last number is ${sum}.`
}

