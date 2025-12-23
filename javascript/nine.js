// Reduce method()

const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function(acc, currval) {
  //  console.log(`acc: ${acc} and currval: ${currval}`);
    

    //return acc + currval
//}, 0)

//.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc+curr ,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2200
    },
    {
        itemName: "py course",
        price: 999
        
    }, 

    {
        itemName: "mobile dev course",
        price: 7777
    },

    {
        itemName: "Data science course",
        price: 9999
    } ,
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay);
