// Catelog - 6 kyu

// You are given a small extract of a catalog:

// s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

// <prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

// <prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

// <prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

// <prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

// ...
// (prx stands for price, qty for quantity) and an article i.e "saw".

// The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

// "table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
// If the article is not in the catalog return "Nothing".

// Notes
// There is a blank line between two lines of the catalog.

// The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).

// The line separator of results may depend on the language \nor \r\n.

// In Pascal \n is replaced by LineEnding.

// You can see examples in the "Sample tests".

function catalog(s, article) {
    if (!s.includes(article)) return 'Nothing'
    let result = ''
    let list = s.split('</prod>')
    let item = list.filter(element => {
        return element.includes(article)
    });
    item = item.toString()
    while(item.includes(article)){
        if (result !== '') result += '\r\n'
        let name = item.slice(item.indexOf('<name>')+6, item.indexOf('</name>'))
        let price = item.slice(item.indexOf('<prx>')+5, item.indexOf('</prx>'))
        let quantity = item.slice(item.indexOf('<qty>')+5, item.indexOf('</qty>'))
        result += `${name} > prx: $${price} qty: ${quantity}`
        item = item.slice(item.indexOf('</qty>')+7)
    }
    return result
}
  
const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>
<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>
<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>
<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>
<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>
<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>
<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>
<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>
<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>
<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>
<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>
<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>
<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>
<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>
<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>
<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>
<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>
<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>
<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>
<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>
<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>
<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>
<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`

const s2 = `<prod><name>platform</name><prx>19.00</prx><qty>26</qty></prod>
<prod><name>window fan</name><prx>128.00</prx><qty>32</qty></prod>
<prod><name>big hammer</name><prx>54.00</prx><qty>2</qty></prod>
<prod><name>saw</name><prx>128.00</prx><qty>6</qty></prod>
<prod><name>platform</name><prx>54.00</prx><qty>33</qty></prod>
<prod><name>wheel</name><prx>13.1</prx><qty>9</qty></prod>
<prod><name>big hammer</name><prx>17.6</prx><qty>33</qty></prod>
<prod><name>platform</name><prx>120.3</prx><qty>15</qty></prod>
<prod><name>circular fan</name><prx>13.1</prx><qty>8</qty></prod>
<prod><name>saw</name><prx>17.5</prx><qty>7</qty></prod>
<prod><name>hammer</name><prx>12.2</prx><qty>12</qty></prod>
<prod><name>exhaust fan</name><prx>71.4</prx><qty>16</qty></prod>
<prod><name>window fan</name><prx>17.6</prx><qty>51</qty></prod>
<prod><name>wheel</name><prx>93.5</prx><qty>9</qty></prod>
<prod><name>hammer</name><prx>54.00</prx><qty>14</qty></prod>`




console.log(catalog(s2, 'saw'))
// console.log(catalog(s3, 'saw'))
// console.log(catalog(s2, 'platform'))
// console.log(catalog(s, 'saw'))
// => 'table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\nsaw for metal > prx: $13.80 qty: 32')
// console.log(catalog(s, 'ladder'))
// => 'ladder > prx: $112 qty: 12')
// console.log(catalog(s, 'wood pallet'))
// => 'wood pallet > prx: $65 qty: 21')

          