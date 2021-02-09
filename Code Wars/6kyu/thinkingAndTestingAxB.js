// Thinking & Testing: A * B? - 6 kyu

// No story or description, only the results and inference

function testIt(a,b){
    a = a.toString().split('')
    a = a.reduce((x, y) => Number(x) + Number(y))
    b = b.toString().split('')
    b = b.reduce((x, y) => Number(x) + Number(y))
    return a*b;
}



//Hmm.. 0 * 1 = 0
console.log(testIt(0,1))
// => 0

//Yes, 1 * 2 = 2
console.log(testIt(1,2))
// => 2

//I know, 5 * 6 = 30
console.log(testIt(5,6))
// => 30

//What? 10 * 10 = 1 ?
console.log(testIt(10,10))
// => 1

//Damn.. 200 * 200 = 4, 0 was omitted ?
console.log(testIt(200,200))
// => 4

//Discover the mysteries of it ;-)
console.log(testIt(12,34))
// => 21

//You can solve it
console.log(testIt(123,45))
// => 54

/////
// Elegant solution

// function testIt(a,b){
//     return sum(a)*sum(b);
//   }
//   const sum = s => ('' + s).split('').reduce((a,n) => a + +n, 0)