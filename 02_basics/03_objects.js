// concept of singleton

// object.create - a way to create object which will be discussed later
// declaring symbols

const mani_symbol = Symbol("example")

// object literals

const mani = {
    name : "Mani",
    "full name" : "Manorath Bhatt",
    [mani_symbol] : "hero",
    age : 22,
    address : "Lalitpur",
    email : "mani@google.com",
}

console.log(mani.name) // a way of accesing objects

// another way of defining objects

console.log(mani["address"])  // it is necessary to use inverted commas for accessing in this method

// Now to access "full name" we can't use dot access method, we have to use the second method

console.log(mani["full name"])
console.log(mani[mani_symbol])

// changing values of objects

mani.email = "mani@yahoo.com"

console.log(mani)

Object.freeze(mani) // prevents any kind of change in objects

mani.email = "mani@youtube.com"
console.log(mani)
