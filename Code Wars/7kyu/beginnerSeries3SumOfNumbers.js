// 



function getSum( a,b ){
    let nums = []
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        nums.push(i)
    }
    return nums.reduce((x,y) => x+y)
}


console.log(getSum(1, 0) )
// == 1   // 1 + 0 = 1
console.log(getSum(1, 2) )
// == 3   // 1 + 2 = 3
console.log(getSum(0, 1) )
// == 1   // 0 + 1 = 1
console.log(getSum(1, 1) )
// == 1   // 1 Since both are same
console.log(getSum(-1, 0))
//  == -1 // -1 + 0 = -1
console.log(getSum(-1, 2) )
// == 2  // -1 + 0 + 1 + 2 = 2 -->

