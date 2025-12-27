// let myName = "Raghav......"
// 
// console.log(myName.length);
// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.raghav = function() {
    console.log(`raghav is present in all object`);
    
}


Array.prototype.heyRaghav = function() {
    console.log(`Raghav says Hello`);
    
}
//heroPower.raghav()
myHeroes.raghav()
myHeroes.heyRaghav()



// inheritance

const User = {
    name: "Raghav",
    email: "raghav121@gmail.com"
}
const Student = {
    makeVideo: true
}
const StudentSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:StudentSupport
}

Student.__proto__ = User

// Modern syntax

Object.setPrototypeOf(StudentSupport, Student)

let anotherUserName = "raghavkumar"

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`)
    console.log(`true length is ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
"raghav".trueLength()
