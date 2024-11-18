string1 = "my name is mani"
console.log(string1)

string2 = 'mani'


// using backtick characters is the modern way of writing strings in javascripts
string3 = `this is the modern way of writing strings`

console.log(string3)

let mani = `
    hello guys, 
    this is mani bhatt, 
    I hope you all are okay
`
console.log(mani)

let a=8,b=6
console.log(`the sum of ${a} and ${b} is ${a+b}`)

let name = 'sampada'
let sname='joshi'

console.log(`hey my name is ${name} ${sname}`)

console.log(`He said to me,"Javascript is awesome."`)

// above things can be accomplished using backtick notations

let animal = 'cat'
console.log(animal.charAt(1))

let badlySpaced = '    hey    this is      me     '
console.log(badlySpaced)
console.log(badlySpaced.trimStart())
console.log(badlySpaced.toUpperCase())

let s = "GeeksforGeeks";
const ans = s.split('').reverse().join('');
console.log(ans);

let stringreverse = 'manorath'
let reversedstring = stringreverse.split('').reverse('').join('')
console.log(reversedstring)