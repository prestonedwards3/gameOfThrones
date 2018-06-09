/* 
    1. display charcters 
    2. on click play sound, set clicked character as user character, set other characters to red border and enemy options
    3. on click set clicked chracter as enemy character move other characters to remote area on screen
    4. 
*/

let attacker = {};
let defender = {};
let gameOver = false;
let strikes = 1;

var jon = { 
    name: "Jon Snow",
    hp: 140, 
    ap: 6, 
    base: 6,
    cap: 10 
};

var arya = { 
    name: "Arya Stark",
    hp: 120, 
    ap: 5, 
    base: 5,
    cap: 15 
};

var dany = { 
    name: "Danearys Targaryen",
    hp: 100 , 
    ap: 8, 
    base: 8,
    cap: 20 
};

var nightKing = { 
    name: "The Night King",
    hp: 160, 
    ap: 10, 
    base: 10,
    cap: 25 }
    ;

    

    $(document).ready(function() { 
        $("#attack").hide()
     
        








        

        // on click set clicked character to user character
        $(".options").on("click", function(activeCharacter){
         // run character selected animation and sound 
            $(this).attr("class", "wrap activeCharacter");
            $(this).css("border", "3px solid rgb(8, 97, 30)");
            $(".options").addClass("enemyOptions");
            $("div").removeClass("options");
            $("h2").fadeOut(750, function(){
                $("h2").text("Chose Your Opponent");
                $("h2").fadeIn(750, function(){
                });
            });   
        //change remaining character options border red
        //on click set clicked character to defender
        $(".enemyOptions").on("click", function(enemyCharacter){
            console.log("This is the start Player has this person as the new defender: ",defender)
            $(this).addClass("activeEnemy");
            $(this).removeClass("activeCharacter");
            $(this).css("border", "3px solid rgb(211, 14, 14)");
            $("h2").fadeOut(750, function(){
                $("h2").text("Let's Fight!");
                $("h2").fadeIn(750, function(){
                    $("#characterSelect").removeClass("row")
                    
          
        //run defender animation and sound
        //reset gameboard to show character and enemy battling and unselected characters at the bottom
                    $("#fightSection").css({
                        position: "fixed",
                        top: "175px",
                        left: "445px"       
                    });
                    $(".user").append($(".activeCharacter"));
                    $(".enemy").append($(".activeEnemy"));
                    $("#rest").css({
                        position: "fixed",
                        top: "400px",
                        left: "485px"
                    });
                    $("#rest").append($(".enemyOptions"));
                    $(".enemyOptions").css({
                        float: "left",
                        left: "auto"
                    })
                    $("#attack").show()
        });
        // new function for on attack button
        

        if ($("#jon").attr("class") === "wrap activeCharacter"){
            attacker = jon
           
        }
        else if ($("#arya").attr("class") === "wrap activeCharacter"){
            attacker = arya
        }
        else if ($("#dany").attr("class") === "wrap activeCharacter"){
            attacker = dany
        }
        else if ($("#nightKing").attr("class") === "wrap activeCharacter"){
            attacker = nightKing
        }
        
        if ($("#jon").attr("class") === "wrap activeEnemy"){
            defender = jon
        }
        else if ($("#arya").attr("class") === "wrap activeEnemy"){
            defender = arya
        }
        else if ($("#dany").attr("class") === "wrap activeEnemy"){
            defender = dany
        }
        else if ($("#nightKing").attr("class") === "wrap activeEnemy"){
            defender = nightKing


        }

        console.log("This is the end Player has this person as the new defender: ",defender)
        $("#attack").off().on("click", function(){
          
            console.log(attacker.hp);
            console.log(defender.hp);
                if (attacker.hp > 0 && defender.hp > 0){
                    defender.hp = defender.hp - attacker.ap;
                    attacker.hp = attacker.hp - defender.ap; 
                    attacker.ap = attacker.ap + attacker.base; 
                    $("#gameCast1").text("You attacked "+ defender.name+ " for "+attacker.ap+" damage!");
                    $("#gameCast").text(" "+ defender.name+ " attacked you back for "+ defender.cap +" damage!");
                    console.log(attacker.ap);
                    console.log(defender);
                    $("#jon").children(".health").html(jon.hp);
                    $("#arya").children(".health").html(arya.hp);
                    $("#dany").children(".health").html(dany.hp);
                    $("#nightKing").children(".health").html(nightKing.hp);
                       
            } 
            if (defender.hp <= 0 && attacker.hp > 0){
                    
                    $(".activeEnemy").remove()
                    // check if there are opponents left
                    // if there are
                        // let the player pick a new opponent
                        // run the fight again
                    // else
                        // the player won the game
            }
            else  (attacker.hp <= 0); {
                // if the player hp is less than 0
                    // Player loses
                    // ask if they want to play again
            
            };
         
           
    
        })
        });
    });
}); 

});