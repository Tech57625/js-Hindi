// Nested scope

function one() {
    const username = "Raghav"

    function two() {
        const website = "www.com"
        //console.log(username);
        
    }
    console.log(website);

    two ()
    

}

//one()

if (true) {
    const username = "Raghav"
    if (username === "raghav")  {
        const website = "www.com"
        //console.log(website + website);
        
    }
    //console.log(website);
    

}
//console.log(username);


// ++++++++++++++++++++++++interesting function+++++++++++++++++++++++++++




function addone(num) {
    return num + 1
}
console.log(addone(5));



const addTwo = function(num) {
    return num + 2
}

addTwo(5)
console.log(addTwo(5));




