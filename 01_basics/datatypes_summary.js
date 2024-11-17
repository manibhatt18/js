/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

// stack is used for primitive data types

// heap is used for non primitive data types

let channelName = "sportshala"

let Name = channelName

Name = "mani_things"

console.log(channelName)
console.log(Name)

let userOne ={
       email: "mani@google.com",
       esewa: "12345"
}

let userTwo= userOne

userTwo.email="doctor@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)