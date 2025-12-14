// 

// tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "raghav"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ramanku@gamil.com",
    fullname:{
        userFullname: {
            firstname: "raghav",
            lastname: "yadav"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users = [
    {
        id: "123abc",
        email: "raghav@gmail.com"
    },
    {
        id: 1,
        email: "raman@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring

const course = {
    courseName: "js in hindi",
    price: "555",
    courseInstructor: "raghav"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);



// API

 






