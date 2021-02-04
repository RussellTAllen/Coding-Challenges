// Perimeter of Squares in a Rectangle - 5 kyu

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216


function perimeter(n) {
    if (n === 0) return 4
    n++
    let nums = [1]
    let x = 1
    let y = 0
    let z = 1
    for(let i = 1; i < n; i++){
        nums.push(x)
        y = x
        x = x + z
        z = y
    }
    return (nums.reduce((a,b) => a+b)) * 4
}



/// first pass
// nums.push(1)

// y = x (1)
// x(2) = z(1) + x(1)
// z = y(1)


// nums.push(2)
// y = x(2)
// x() = z(1) + x (2)
// z = y


console.log(perimeter(0))
// 4
console.log(perimeter(5))
// 80
console.log(perimeter(7))
// 216
console.log(perimeter(20))
// 114624
console.log(perimeter(30))
// 14098308
