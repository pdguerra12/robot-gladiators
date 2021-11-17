// window.alert("This is an alert! JavaScript is running!"); <--first js example.
// window.prompt("What is your robot's name?"); <-- second example allowing the user to enter data aka user input.

// var playerName = window.prompt("What is your robot's name?"); <--- Example using var. var playerName will equal whatever the user inputs. That way the system can refer to them by that name.

// Note the lack of quotation marks around playerName
// The console isn't part of the JavaScript language. It's another object like the window that's provided to us by the browser, which makes it a Web API. The console object has its own set of functions and properties that interface with the browser's console window (DevTools in Chrome).
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log(playerName + " is ready for battle!");

// function fight() {
//     window.alert("The fight has begun!");
// }
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 12;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } 
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();