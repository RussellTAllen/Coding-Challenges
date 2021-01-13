// Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down. 

document.getElementById('button').addEventListener('click', divideTwo)

function divideTwo(a, b){
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    console.log(Math.floor(a/b))
    document.querySelector('p').innerText = `The answer is ${Math.floor(a/b)}`
}

