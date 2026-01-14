let score="56"
console.table([score,typeof score , typeof (score)]) // number


let age=786
console.table([age,typeof age , typeof (age)]) // string

let valueInt=Number(score)
console.table(["score",typeof score , typeof (score)])  // number 
console.table(["valueInt",typeof valueInt , typeof (valueInt)])  // number


let str='32abc'
console.table([typeof Number(str), Number(str)]);
// although the str is converted to the number but it is NaN -> Not a  Number

let str2=null
console.table([( typeof str2),typeof Number(str2), Number(str2),Number(undefined)]);


let bool1=1
let bool2=0
let bool3=""
let bool4="utkarsh"
let bool5=5
//console.table([typeof Boolean(b)])



//****************************OPERATION***********************************//

console.log("Operations")
let val=3
let negetiveValue=-val;
console.log(negetiveValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)




