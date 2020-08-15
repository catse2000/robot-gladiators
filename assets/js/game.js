//Your robots information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy robots information
var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealths = 50;
var enemyAttack = 12;

// this creates a function named "fight"
var fight = function(enemyName, enemyHealth) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0) {
        //This will prompt the user to decide to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player choses to fight, then fight
        if (promptFight === "FIGHT"||promptFight === "fight"||promptFight === "Fight") {
            //Subtract the value of 'playerAttack' fromt he value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message tot he console os we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!")
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    
            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the console so we know that it worked. 
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            )

            // check player's health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        //if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }

            // if no (false) ask question again by running fight() again
            else{
                fight();
            }


        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
   
    }
    
}

for (var i = 0; i < enemyNames.length; i++){
    //Store individual robot name
    var pickedEnemyName = enemyNames[i];
    
    // reset enemy health
    enemyHealth = 50;

    // call fight fucntion with enemy robot
    fight(pickedEnemyName);
}