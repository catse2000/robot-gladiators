// this creates a function named "fight"
var fight = function(enemy) {
    // repeat and execute as long as the enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        //This will prompt the user to decide to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            // if no (false) ask question again by running fight() again
            }
        }

            //Subtract the value of 'playerInfo.attack' fromt he value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            window.alert("Damage: " + damage);
            enemy.health = Math.max(0, enemy.health - damage);

            //Log a resulting message tot he console os we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!")

                //award player money for winning
                playerInfo.money = playerInfo.money + 20;

                //leave while() loop since enemy is dead
                break;
            }
            else {
                   window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
    
            //Subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable.
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            window.alert("Damage: " + damage);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            //Log a resulting message to the console so we know that it worked. 
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            )

            // check player's health
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }

        }
   
    };
    
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

//Your robots information
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100, 
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
        
    }
};

//Enemy robots information
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//function to start a new game
var startGame = function(){
    //Your robots information
    playerInfo.reset();

    

    for (var i = 0; i < enemyInfo.length; i++){
        // play this only if playerInfo.health is more than 0
        if(playerInfo.health > 0){
            // Alert users that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            //Store individual robot name
            var pickedEnemyObj = enemyInfo[i];
        
            //Enemy robots information
            pickedEnemyObj.health = randomNumber(40,60);
            window.alert("Enemy Health: " + pickedEnemyObj.health);

            // call fight fucntion with enemy robot
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                // ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them tot he store() function
                if (storeConfirm){
                    shop();
                }
                
            }
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
    
    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }

    //if player have more money than the high score, player has new high score
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else{
        alert(playerInfo.name + " di not beat hte high score of " + highScore + ". Maybe next time!");
    }
    // if player is still alive, player wins!
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

//shop function
var shop = function(){
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.").toLowerCase();

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill": 
            playerInfo.refillHealth();
            break;

        case "upgrade":
            playerInfo.upgradeAttack();
            break;
            
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

//start the game whent he page loads
startGame();
