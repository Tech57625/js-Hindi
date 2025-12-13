 // Dates

 let myDate = new Date()
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);


let myCreateDate = new Date (2025, 11, 13)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let myCreateDates = new Date("2025-01-13")

console.log(myCreateDates.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());


 
 
 