const name = "Utkarsh"
const age = 50

 console.log(name + age + " NIT KKR");
 const repoCount=3
 
 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern approach

const gameName = new String('Utkarsh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   utkarsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://utkarsh.com/utkarsh%20vardhan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));