const roll=124103018
let name="utkarsh"   // while declaring a string we need to put " "
var school= "gurukul kurukshetra"
let balance=45


//In modern JavaScript, the choice between var and let comes down to how strictly you want to control your data. While both create variables, let was introduced in 2015 (ES6) to fix several "weird" behaviors of var.


if (true) {
    var leakingVar = "I escaped!";
    let trappedLet = "I am stuck in here!";
}

console.log(leakingVar); // Outputs: "I escaped!"
// console.log(trappedLet); // ReferenceError: trappedLet is not defined


// roll=124103011111  const value cannot be re-assigned

school= "GURUKUL KURUKSHETRA"

city= "kurukshetra"
city="changed to patna"
balance=56
balance="454545"  
console.log(typeof(balance)) 
balance=23





console.log(roll);
console.log(name);
console.log(school);
console.table([roll,name, school,city,balance])  // things can be printed using tables


