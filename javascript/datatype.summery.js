// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
constoutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1234567654321n




// Reference (Non primitve)

// Array, Objects, Functions

const heros = ["shaktimaan","naagraj","doga"]
let myObj = {
    name: "Raghav",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
