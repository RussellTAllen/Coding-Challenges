// https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e

function barista(coffees){
    if (!coffees.length) return 0
    const waitTimes = []
    let oneWait = 0
    let prevTimes = 0
    coffees.sort((a,b) => a-b)

    for (let i = 0; i < coffees.length; i++){
        oneWait = coffees[i]
        
        if (i !== 0) {
            oneWait += 2
            prevTimes = waitTimes[i-1]
        }
        
        waitTimes.push(oneWait + prevTimes)
    }

    return waitTimes.reduce((a, c) => a+c, 0)
}


// first waits 2min
// second waits 2+2+3 = 7min
// third waits 7+2+4 = 13min
// total wait time === 22min

console.log(barista([]), 0);
console.log(barista([2,10,5,3,9]), 85);
console.log(barista([4,3,2]),22);
console.log(barista([20,5]),32);
console.log(barista([20,5,4,3,1,5,7,8]),211);
console.log(barista([5,4,3,2,1]),55);