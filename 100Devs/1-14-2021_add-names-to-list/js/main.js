// Today's Challenge

// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

document.getElementById('button').addEventListener('click', addName)

let names = ["Joe", "Suzy", "Bill", "Frank", "Molly"]

function addName(name){
    names.push(document.getElementById('name').value)
    document.querySelector('p').innerText = `You are number ${names.length} on the list.  
    \n Here are the current names - ${names.join(", ")}.`
    console.log(names)
}
