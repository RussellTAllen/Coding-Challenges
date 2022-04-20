// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

const NATO = { 
    a: 'Alfa',
    n: 'November',
    b: 'Bravo',
    o: 'Oscar',
    c: 'Charlie',
    p: 'Papa',
    d: 'Delta',
    q: 'Quebec',
    e: 'Echo',
    r: 'Romeo',
    f: 'Foxtrot',
    s: 'Sierra',
    g: 'Golf',
    t: 'Tango',
    h: 'Hotel',
    u: 'Uniform',
    i: 'India',
    v: 'Victor',
    j: 'Juliett',
    w: 'Whiskey',
    k: 'Kilo',
    x: 'Xray',
    l: 'Lima',
    y: 'Yankee',
    m: 'Mike',
    z: 'Zulu' 
}



function to_nato(words) {
    let result = ''

	words.split('').forEach(char => {
        if (char.toLowerCase() in NATO){
            result += NATO[char.toLowerCase()] + ' '
        }else if (char !== ' ') result += char + ' '
    })

    return result.trim()
}

console.log(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
console.log(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
console.log(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");