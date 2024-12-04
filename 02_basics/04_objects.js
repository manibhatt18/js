// declaring objects with help of constructors

// singleton

const tinderUser = new Object() // singleton object 
const tinderUser2 = {} // non singleton object
console.log(tinderUser)
console.log(tinderUser2)

tinderUser.name = "Manorath"
tinderUser.id = "078bei021"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: 'mani@gmail.com',
    fullname:{
        userfullname:{
            firstname : "Manorath",
            lastname : "Bhatt"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) // accessing nested objects


// combining 2 objects together

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2} // not an ideal way to do this


// const obj4 = Object.assign({},obj1,obj2)// {} ensures that it is the target and obj1,obj2 and the rest are source 
// console.log(obj4)

// the method of combining objects which is used more than 90% of the time is as follows

const obj5 = {...obj1, ...obj2}
console.log(obj5)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('by')) // checks whether the object has mentioned property or not