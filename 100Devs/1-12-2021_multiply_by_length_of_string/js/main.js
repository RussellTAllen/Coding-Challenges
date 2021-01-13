// Today's Challenge

// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!


document.getElementById('button').addEventListener('click', doMaths)

function doMaths(num, word){
    word = document.getElementById('word').value
    num = document.getElementById('num').value
    if (word.length * num > 100) alert("WINNER!")
    document.querySelector('p').innerText = `${word.length * num}`
}