const name = "Raghav"
const repoCount = 30

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Raghav yadav")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,9)
console.log(newString);

const anotherString  = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    raghav    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raghav.com/raghav%20yadav"

console.log(url.replace('%20', '-'));


console.log(url.includes('raghav'));






