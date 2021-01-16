// Complete Fibonacci Series - 6 kyu
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

function fibonacci(length){
    fibArr = []
    let x = 1
    let y = 1
    let z
    
    if (length <= 0) return fibArr
    
    for (let i = 0; i < length - 1; i++){        
        if (i === 0) fibArr.push(i)
        else if (i === 1 && i - 1 === 0){
            fibArr.push(i)
            fibArr.push(i)
        }else{
            z = x + y
            fibArr.push(z)
            y = x
            x = z            
        }        
    }
    return fibArr
}

console.log(fibonacci(4)) // should return  [0,1,1,2]
console.log(fibonacci(-1)) // should return []
console.log(fibonacci(29)) // [0,1,1,2,3,5,8,13,21]

console.log("oh hai")

testarr=[1,2,3]
testarr.push(4)
console.log(testarr)