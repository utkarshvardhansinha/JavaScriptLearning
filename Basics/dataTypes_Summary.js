//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// all these are (call by value)
// Symbols are used to make something unique

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // null means KHALI
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // to prove both are unique (===)

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];



let myObj = {
    name: "hitesh",
    age: 22,
}

console.log(myObj);


const myFunction = function(){
    console.log("Hello world");
    
}



console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

////////////////////////////////////////////////////////////////////////////



// Stack(primitive) ---> copy of the value  ,   Heap(non primitive)----> reference milta hai


let myName="utkarsh"
let anotherName=myName
anotherName="lucky"
console.log(myName);
console.log(anotherName);


let user1={
    name:"Ankush Mujahiddin",
    college:"NIT KKR",
    email:"ankush@google.com"

}
let user2= user1;

user2.college="IIT BOMBAY"
console.log(user1.college);
console.log(user2.college);





