

function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("g");
    console.log("h");
    console.log("a");
    console.log("v");
}

// sayMyName()

function addTwoNumbers (number1, number2){
    console.log(number1 + number2);
    
}
const result = addTwoNumbers(3, 4)
console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name");
        return
        

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("raghav"))
 


//////////////////////////////////*****/////////////////////

function calculateCartPrice (val1, val2, ...num1) {
    return num1
    
}
//console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
    userName: "Raghav",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
//handleObject(user)


handleObject({
    username: "Lucky",
    price: "399"
})
