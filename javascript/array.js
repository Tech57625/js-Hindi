const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);



const another_array = [1, 2, 3, [4, 5, 6],7,[6, 7][4, 5]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("raghav"));
console.log(Array.from("raghav"));
console.log(Array.from({name: "raghav"}));


let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1, score2, score3));





