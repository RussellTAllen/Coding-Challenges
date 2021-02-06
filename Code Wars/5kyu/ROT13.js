// ROT13 - 5 kyu

// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
// ALGORITHMSSTRINGSCIPHERSCRYPTOGRAPHYSECURITY

function rot13(str) {
    let result = []
    let cipher1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    let cipher2 = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
    let cipher3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
    let cipher4 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (let i = 0; i < str.length; i++){
        if (cipher1.includes(str[i])) result.push(cipher2[cipher1.indexOf(str[i])])
        else if (cipher2.includes(str[i])) result.push(cipher1[cipher2.indexOf(str[i])])     
        else if (cipher3.includes(str[i])) result.push(cipher4[cipher3.indexOf(str[i])])
        else if (cipher4.includes(str[i])) result.push(cipher3[cipher4.indexOf(str[i])])
        else result.push(str[i])
    }
    return result.join('')
}

console.log(rot13("EBG13 rknzcyr."))
// == "ROT13 example.";)
console.log(rot13("This is my first ROT13 excercise!"))
// == "Guvf vf zl svefg EBG13 rkprepvfr!"


/////////////
// Solution using regex 

function rot13(str) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz', rot13 = 'nopqrstuvwxyzabcdefghijklm';
    return str.replace(/[a-z]/gi, function(m) {
      var lower = m.toLowerCase();
      return lower == m ? rot13[alpha.indexOf(lower)] : rot13[alpha.indexOf(lower)].toUpperCase();
    });
  }

////////
// Solution using regex and fromCharCode / charCodeAt

function rot13(str) {
    return str.replace(/[a-z]/ig, function(x){
      return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
    });
  }

/////////
// Solution using map

function rot13(str) {
    var dict = {"A":"N","B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z","N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M","a":"n","b":"o","c":"p","d":"q","e":"r","f":"s","g":"t","h":"u","i":"v","j":"w","k":"x","l":"y","m":"z","n":"a","o":"b","p":"c","q":"d","r":"e","s":"f","t":"g","u":"h","v":"i","w":"j","x":"k","y":"l","z":"m"}
    return str.split("").map(x=> dict[x] ? dict[x] : x).join("");
  }