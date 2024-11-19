// const myArr = [1,2,3,4,5,6,7,8]
// // console.log(myArr)

// let batsmen = ["Virat", 'Rohit', 'Shikhar']
// // console.log(batsmen)
// // console.log(batsmen[2])


// // array methods //

// let myarray = [1,2,3,4,5]
// console.log(`the array before push operation is : ${myarray}`)

// myarray.push(6)
// console.log(`the array after push operation is: ${myarray}`)
// myarray.pop()
// console.log(`the array after pop operation is : ${myarray}`)


// console.log(myarray.includes(8))
// console.log(myarray.indexOf(5))

// /// ++++++++++++ to convert arrya into a string ///

// const newArray = myarray.join()
// console.log(myarray)
// console.log(newArray)
// console.log(typeof newArray)

/// +++ concept of slice and splice +++++++++////
//slice
let   a1 = [0,1,2,3,4,5,6]
let b1 = a1.slice(1,3)
console.log(a1)
console.log(b1)
// splice 

// remember that the difference isn't only of the range
// but also of the array manipulation
let a2 = [0,1,2,3,4,5,6]
let b2 = a2.splice(1,3)
console.log(a2)
console.log(b2)