let score = 33
let count = "45"
console.log(typeof score)
console.log(typeof count)

let varchange = Number(count)
console.log(typeof varchange)

// "33" -> 33
// "abc33" -> NaN (not a number)
// true -> 1; false -> 0;


// number to boolean conversion

let isLoggedin = 1
 let booleanLog = Boolean(isLoggedin)
console.log(booleanLog)

// 1 -> true, 0 -> false
// "" -> false
// "anyvalue" -> true

// // number to string conversion

// let anyNum = 40
// let stringNum = String(anyNum)
// console.log(stringNum)
// console.log(typeof stringNum)


// //  operations //

// console.log(4**4) // double * acts as an exponent

// console.log(1+4+"4") // it's output will be 54
// console.log("4"+1+3) // it's output will be 423 since the first element 4 is string, 1 and 3 are also treated as string

// console.log(+true) // its output will be 1
// console.log(+"") // its output will be 0

let x=5;
let y=x++
console.log(x)
console.log(y)