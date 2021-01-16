// Today's Challenge
// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

document.getElementById('button').addEventListener('click', oddNums)

function oddNums(array){
    array = document.querySelector('input').value.split(",")
    // array = array.split(",")
    newArr = []
    array.forEach(num => {
      if (num % 2 !== 0) newArr.push(num)
    });
    document.querySelector('p').innerText = newArr
    return newArr
}