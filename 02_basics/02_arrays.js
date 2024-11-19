// const tmkoc = ['jethalal', 'babita', 'bhide','tarak']

// const cid = ['acp', 'daya', 'salunkhe','abhijit']

// // tmkoc.push(cid)
// // console.log(tmkoc)
// // this way of concatenation of arrays isn't suitable for practice, as it contains an array inside an array //

// let all_actors = tmkoc.concat(cid)
// console.log(JSON.stringify(all_actors)) // this is how 2 arrays can be concatenated

// // but the more efficient way is to use spread operator

// let all_new_actors = [... tmkoc, ... cid]

// console.log(JSON.stringify(all_new_actors));




const array1 = [ 1,2,3,[4,5],5,6,7,[8,9,0],4,1,2,[4,5]]
const array2 = array1.flat(5) //  can also write infinity in place of 5(although it isn't a good practice to write infinity)
console.log(array2)


console.log(Array.isArray("Mani"))
console.log(Array.from("Mani")) // converting a string into an array

let man1 = "Mani"
let man2 = "Mukesh"
let man3 = "Manish"

console.log(Array.of(man1,man2,man3))