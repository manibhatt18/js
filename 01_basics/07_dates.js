



/////     Date is an object in javascript    /////////


// const { Temporal } = require('@js-temporal/polyfill');

// const now = Temporal.Now.zonedDateTimeISO();
// console.log(now.toString());


let myDate = new Date() // this is an instance of a date object
console.log(myDate) // this prints 2024-11-18T13:56:11.418Z

// console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// declaring my own date//

let myOwndate = new Date (2023,0,5,13,6) //  month starts from 0 in javascript
// depending upon the number of parameters inside the parantheses, the date is defined. ie year,month,day,hour,minute,sec...so on
console.log(myOwndate.toLocaleString())


//// time stamps in JS///

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myOwndate.getTime())


myDate.toLocaleString('default',{
    weekday: "long"
})

console.log(myDate)

let userInput = prompt("enter here");