let score=33
console.table([typeof score , typeof (score)]) // number


let age="56"
console.table([typeof age , typeof (age)]) // string

let valueInt=Number(score)
console.table([typeof score , typeof (score)])  // number 
console.table([typeof valueInt , typeof (valueInt)])  // number


let str='32abc'
console.table([typeof Number(str), Number(str)]);
// although the str is converted to the number but it is NaN -> Not a  Number

let str2=null
console.table([( typeof str2),typeof Number(str2), Number(str2)]);


let bool1=1
let bool2=0
let bool3=""
let bool4="utkarsh"
let bool5=5



