
// refer MDN Plus

 /*

 JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

 */
// Dates

let myDate = new Date()

// let myDate= Date()  --> ouput will be same as myDate.toString()


/*
Difference between new Date() and Date() in JavaScript

✅ new Date()
------------------

-> Acts as a constructor
-> Returns a Date object
-> Can be used to work with time (getYear, getTime, formatting, etc.)
_______________________________________________
let myDate = new Date();
console.log(myDate);        // Date object
console.log(typeof myDate); // "object"
________________________________________________

✅ Date()
-------------
-> Called as a normal function
-> Returns a string
-> Just gives the current date & time text (same as new Date().toString())

_______________________________________________________________________________
let myDate = Date();
console.log(myDate);        // "Wed Dec 22 2025 17:05:12 GMT+0530 ..."
console.log(typeof myDate); // "string"
________________________________________________________________________________
*/

console.log(myDate);//  2025-12-22T12:52:41.846Z obviously this is not readable so we need certain metods to make it readable

console.log(myDate.toString()); // Mon Dec 22 2025 12:56:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // Mon Dec 22 2025  -> here only date is the output
console.log(myDate.toLocaleString()); // 12/22/2025, 1:10:11 PM  -> format is mm/dd/yy and time in 12 hour
 



// there are various method related with date explore it



console.log("\nNow for createdDate variable -> ")

let myCreatedDate1 = new Date(2023, 0, 23)  // for these types of arguements months are numbered from 0
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate1.toLocaleDateString()); //    1/23/2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3,56) // additionnal time arguement is also there 5:03:56 hh/mm/ss
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14") // here months start  from 1 
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("11-11-2011")
console.log(myCreatedDate4.toDateString());



let myTimeStamp = Date.now()  // here myTimeStamp is the total millisecond from jan 1 1970
console.log(myTimeStamp);    // 1766410866845
console.log(myCreatedDate4.getTime());  // 1320969600000  total millisecond till  Nov 11 2011
console.log(Math.floor(Date.now()/1000));  // today's date converted into seconds from jan 1 1970


console.log("For newdate-> ");

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());




 //`${newDate.getDay()} and the time `



console.log(newDate.toLocaleString('en-IN', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Kolkata",
  timeZoneName: "short"
}));


console.log(newDate.toLocaleString());

