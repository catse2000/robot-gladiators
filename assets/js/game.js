//Your robots information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy robots information
var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealths = [50, 70, 60];
var enemyAttacks = [12, 8, 18];

// this creates a function named "fight"
var fight = function(enemyName, enemyHealth, enemyAttack) {
    
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        //This will prompt the user to decide to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            // if no (false) ask question again by running fight() again
            }
        }

            //Subtract the value of 'playerAttack' fromt he value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message tot he console os we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // check enemy's health
            if (enemyHealth <= 0) {
                 window.alert(enemyName + " has died!")

                 //award player money for winning
                 playerMoney = playerMoney + 20;

                 //leave while() loop since enemy is dead
                break;
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
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        }
   
    };
    

//function to start a new game
var startGame = function(){
    // reset players stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++){
        // play this only if playerHealth is more than 0
        if(playerHealth > 0){
            // Alert users that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            //Store individual robot name
            var pickedEnemyName = enemyNames[i];
            var pickedEnemyHealth = enemyHealths[i];
            var pickedEnemyAttack = enemyAttacks[i];
        
            // call fight fucntion with enemy robot
            fight(pickedEnemyName, pickedEnemyHealth, pickedEnemyAttack);
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
}

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    
    // if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.")
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    
}

//start the game whent he page loads
startGame();
