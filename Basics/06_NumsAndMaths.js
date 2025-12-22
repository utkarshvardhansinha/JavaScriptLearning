const score = 400
 console.log(score);  // 400

const balance = new Number(100)   // here new number object is created 
console.log(balance);  // Number: 100

console.log(balance.toString().length); // here the number is conveted into string and various properites of string can be applied here



console.log(balance.toFixed(1));  // for precise decimal point  {100.0}


{
const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));  // it gives prioroty to the left to right means first priority given to left side of the decimal   ---> 123.9

console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(2)); //  1.2e+2 😊

}



const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));// 10,00,00,000  -> sometimes it is difficult to count the numbers of zero in the number so this method provide a comma between the zero for easy counting by default it has US standard "en-In" for indian standard

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object Math
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random()); // always give value betwee 0 and 1;
console.log(Math.random(5))  // always between  0 and 1 no matter you pass any arguement   same for all other predefined functions which donot take arguements like {toString()}
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

