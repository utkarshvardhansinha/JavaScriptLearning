// comparisons

console.log(2>1);
console.log(2==1);
console.log(2!=3);


console.log("2">1);  // true
console.log(2>"1");  // true
console.log(56<5+6); // false
console.log(56=="5"+"6"); // true
console.log(true == 1);   // true


//---avoid these types of comparisons------
console.log(null== 0);  // false
console.log(null> 0);   // false
console.log(null < 0);  // false
console.log(null>= 0);  // true
console.log(null<= 0);  // true

console.log(undefined== 0);  // false
console.log(undefined> 0);   // false
console.log(undefined < 0);  // false
console.log(undefined>= 0);  // false
console.log(undefined<= 0);  // false





// ---Strict check-----(===)
console.log("2"===2);  // false 



const num=56
num=23    // you cannot assign num again bcz num is const
console.log(num);


