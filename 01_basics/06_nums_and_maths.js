let myBalance = 45.45643
// console.log(myBalance.toFixed(2)) // output is 45.46


const aNum = 3453.34543234
// console.log(aNum.toPrecision(4)) // output is 3453

const thousands = 23545534543
// console.log(thousands.toLocaleString()) // output will be in US standard i.e 23,545,534,543

// console.log(thousands.toLocaleString('en-IN')) // output will be in indian i.e. standard 23,54,55,34,543


//// maths ////////////////

console.log(Math.random()) // it gives a number between 0 and 1

// suppose I want to make a ludo program which means the minimum value is 1 and maximum value is 6

let min = 1 
let max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min)