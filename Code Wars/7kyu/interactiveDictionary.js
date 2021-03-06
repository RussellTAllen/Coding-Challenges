// Interactive Dictionary - 7 kyu

// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana
// Good luck and happy coding!

class Dictionary {
    constructor() {

    }
    
    newEntry(key, value) {
        this[key] = value
    }
    
    look(key) {
        if (this[key]) return this[key]
        else return "Can't find entry for "+key
    }
  }

let d = new Dictionary();

d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple'))
// => 'A fruit'

d.newEntry('Soccer', 'A sport');
console.log(d.look('Soccer'))
// => 'A sport'
console.log(d.look('Hi'))
// => 'Can\'t find entry for Hi'
console.log(d.look('Ball'))
// => 'Can\'t find entry for Ball'

d.newEntry('soccer', 'a sport');
console.log(d.look('soccer'))
// => 'a sport'