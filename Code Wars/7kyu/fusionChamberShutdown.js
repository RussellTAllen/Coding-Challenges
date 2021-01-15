// Fusion Chamber Shutdown - 7 kyu
// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4
// FOR EXAMPLE:
// (C,H,O) = (45,11,100)
// return no. of water, carbon dioxide and methane molecules
// Output should be like:
// (5,45,0)

function burner(C,H,O){
    let water = 0
    let co2 = 0
    let methane = 0
    while (O > 0 && H >= 2) {
        water++
        H-=2
        O--
    }
    while (C > 0 && O >= 2){
        co2++
        O-=2
        C--
    }
    while (C > 0 && H >= 4){
        methane++
        H-=4
        C--
    }
    return [water, co2, methane]
}


console.log(burner(45,11,100))
// no. of water, carbon dioxide and methane molecules 
// (5, 45, 0)
console.log(burner(50,550,100))
// no. of water, carbon dioxide and methane molecules 
// 


////
// Clever shorthand -
// function burner(c, h, o) {
//     const water = Math.min(~~(h / 2), o)
//     const carbon = Math.min(~~((o - water) / 2), c)
//     const methane = Math.min(~~((h - water * 2) / 4), c - carbon)
//     return [water, carbon, methane]
// }