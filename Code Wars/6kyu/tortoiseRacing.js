// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript


function race(v1, v2, g){
    if (v1 > v2) return null
    let result = []

    let s1 = v1/60/60
    let s2 = v2/60/60

    console.log(s1)
    console.log(s2)

    let p1 = g
    let p2 = 0

    let seconds = 0

    while (p1 >= p2){
        p1 += s1
        p2 += s2
        g = p1 - p2
        seconds++
    }

    let hours, minutes, secs

    if (seconds/60 < 60)
        hours = 0
    else
        hours = Math.floor(seconds/60/60)
    
        
    minutes = Math.floor(60 * (seconds/60/60 - Math.floor(seconds/60/60)))
    secs = Math.floor(60 * (60 * (seconds/60/60 - Math.floor(seconds/60/60)) - minutes))
         
    result.push(hours, minutes, secs-1)

    return result
}

console.log(race(720, 850, 70), [0, 32, 18])
console.log(race(80, 91, 37), [3, 21, 49])
console.log(race(80, 100, 40), [2, 0, 0])