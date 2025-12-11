const accountId = 1232
let accountEmail = "raman8734@gmail.com"
var accountPassword = "13432"
let accountState;

accountCity = "Jaipur"

//accountId  = 2 // not allowed


/* 
prefer not to use var 
becouse of issue in block scope and functional scope
*/

accountEmail = "r@.com"
accountPassword = "121212"
accountCity = "Lucknow"
accountState


console.table([accountId, accountEmail, accountPassword, accountCity, accountState ]);
