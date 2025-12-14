 // singlonton 


 // object literals

 const mySym =  Symbol("key1")

 const jsUser = {
    name: "Raghav",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "raghav987@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 }

 console.log(jsUser.email);
 console.log(jsUser);
 console.log(jsUser[mySym]);

 jsUser.email = "lucky121@gamil.com"
 Object.freeze(jsUser)

jsUser.email = "abhiporwal123@gmail.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
    
}

console.log(jsUser.greeting);

 
 
 