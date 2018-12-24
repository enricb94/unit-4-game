//Defining the objects of each character.
var Darth = 
{
    name : "Darth Vader",
    life : 180,
    attack : 5,
    counterAttack : 14,
    character :$("#CharacterDarth"),
    enemy : $("#EnemyDarth"),
    defender : $("#DefenderDarth")
}

var Luke = 
{
    name : "Luke SkyWalker",
    life : 100,
    attack : 12,
    counterAttack : 5,
    character : $("#CharacterLuke"),
    enemy : $("#EnemyLuke"),
    defender : $("#DefenderLuke")
}

var Rey = 
{
    name : "Rey",
    life : 150,
    attack :8,
    counterAttack : 13,
    character : $("#CharacterRey"),
    enemy : $("#EnemyRey"),
    defender : $("#DefenderRey")
}

var Obi = 
{
    name : "Obi-Wan Kenobi",
    life : 120,
    attack : 10,
    counterAttack : 9,
    character : $("#CharacterObi"),
    enemy : $("#EnemyObi"),
    defender : $("#DefenderObi")
}

//Defining variables.
var isCharacterChosen;
var characterChosen;
var isEnemyChosen;
var enemyChosen;
var nicknameCharacter;
var nicknameEnemy;
var lifeMultiplier;
var counter;
var box;

//Function to reset all parameters.
function reset(){

isCharacterChosen = false;
isEnemyChosen = false;
counter = 0;

characterChosen = false

Darth.attack = 5;
Luke.attack = 12;
Rey.attack = 8;
Obi.attack = 10;

Darth.life = 180;
$("#DarthLife").html(180);
$("#enemyDarthLife").html(180);

Luke.life = 100;
$("#LukeLife").html(100);
$("#enemyLukeLife").html(100);

Rey.life = 150;
$("#ReyLife").html(150);
$("#enemyReyLife").html(150);

Obi.life = 120;
$("#ObiLife").html(120);
$("#enemyObiLife").html(120);

Darth.character.show();
Luke.character.show();
Rey.character.show();
Obi.character.show();

Darth.enemy.hide();
Luke.enemy.hide();
Rey.enemy.hide();
Obi.enemy.hide();
$("#enemyPrompt").hide();
$(".fightPrompt").hide();

Darth.defender.hide();
Luke.defender.hide();
Rey.defender.hide();
Obi.defender.hide();

$("#comments1").html("");
$("#comments2").html("");
$("#comments3").html("");
}

reset()

//Character to be used by the user.
$("#CharacterDarth").on("click",function(){

    if (isCharacterChosen){
        return false
    }
    Darth.enemy.hide();
    Luke.character.hide();
    Rey.character.hide();
    Obi.character.hide();
    
    Luke.enemy.show();
    Rey.enemy.show();
    Obi.enemy.show();
    $("#enemyPrompt").show();

    isCharacterChosen = true;
    characterChosen = Darth;
    nicknameCharacter = "Darth";
    lifeMultiplier = 5;
    box = $(this);
    $(this).addClass("characterChosen");
})

$("#CharacterLuke").on("click",function(){

    if (isCharacterChosen){
        return false
    }

    Darth.character.hide();
    Luke.enemy.hide();
    Rey.character.hide();
    Obi.character.hide();

    Darth.enemy.show();
    Rey.enemy.show();
    Obi.enemy.show();
    $("#enemyPrompt").show();

    isCharacterChosen = true;
    characterChosen = Luke;
    nicknameCharacter = "Luke";
    lifeMultiplier = 12;
    box = $(this);
    $(this).addClass("characterChosen");
})

$("#CharacterRey").on("click",function(){

    if (isCharacterChosen){
        return false
    }

    Darth.character.hide();
    Luke.character.hide();
    Rey.enemy.hide();
    Obi.character.hide();

    Darth.enemy.show();
    Luke.enemy.show();
    Obi.enemy.show();
    $("#enemyPrompt").show();

    isCharacterChosen = true;
    characterChosen = Rey;
    nicknameCharacter = "Rey";
    lifeMultiplier = 7;
    box =  $(this);
    $(this).addClass("characterChosen");
})

$("#CharacterObi").on("click",function(){

    if (isCharacterChosen){
        return false
    }

    Darth.character.hide();
    Luke.character.hide();
    Rey.character.hide();
    Obi.enemy.hide();

    Darth.enemy.show();
    Luke.enemy.show();
    Rey.enemy.show();
    $("#enemyPrompt").show();

    isCharacterChosen = true;
    characterChosen = Obi;
    nicknameCharacter = "Obi";
    lifeMultiplier = 10;
    box = $(this);
    $(this).addClass("characterChosen");
})

//Enemies
$("#EnemyDarth").on("click",function(){
    if (isEnemyChosen || !isCharacterChosen){
        return false
    }

    Darth.enemy.hide();
    Darth.defender.show();
    $(".fightPrompt").show();
    
    isEnemyChosen = true;
    enemyChosen = Darth;
    nicknameEnemy = "Darth";
    Darth.defender.addClass("enemyChosen");
    $("#comments1").html("");
})

$("#EnemyLuke").on("click",function(){
    if (isEnemyChosen || !isCharacterChosen){
        return false
    }

    Luke.enemy.hide();
    Luke.defender.show();
    $(".fightPrompt").show();
    
    isEnemyChosen = true;
    enemyChosen = Luke;
    nicknameEnemy = "Luke";
    Luke.defender.addClass("enemyChosen");
    $("#comments1").html("");
})

$("#EnemyRey").on("click",function(){
    if (isEnemyChosen || !isCharacterChosen){
        return false
    }

    Rey.enemy.hide();
    Rey.defender.show();
    $(".fightPrompt").show();
    
    isEnemyChosen = true;
    enemyChosen = Rey;
    nicknameEnemy = "Rey";
    Rey.defender.addClass("enemyChosen");
    $("#comments1").html("");

})

$("#EnemyObi").on("click",function(){
    if (isEnemyChosen || !isCharacterChosen){
        return false
    }

    Obi.enemy.hide();
    Obi.defender.show();
    $(".fightPrompt").show();
    
    isEnemyChosen = true;
    enemyChosen = Obi;
    nicknameEnemy = "Obi";
    Obi.defender.addClass("enemyChosen");
    $("#comments1").html("");
})

//Attack button
$("#Attack").on("click",function(){

if ($("div.defender:visible").length === 0){
    return false
}

characterChosen.life -= enemyChosen.counterAttack
enemyChosen.life -= characterChosen.attack;
$("#"+nicknameCharacter+"Life").html(characterChosen.life);
$("#enemy"+nicknameEnemy+"Life").html(enemyChosen.life);
$("#comments1").html("You attacked " + enemyChosen.name + " for " + characterChosen.attack + " damage.");
$("#comments2").html(enemyChosen.name + " attacked you back for " + enemyChosen.counterAttack + " damage.");
characterChosen.attack += lifeMultiplier;

if (enemyChosen.life < 1){
    $("#comments1").html("You have defeated " + enemyChosen.name + ", you can choose to fight another character.");
    $("#comments2").html("");
    isEnemyChosen = false;
    enemyChosen.defender.hide();
    counter +=1;
}

if (characterChosen.life <1){
    $("#comments3").html("You Lost!");
    $("#comments1").html("");
    setTimeout(function() {
        box.removeClass("characterChosen");
        reset()
    }, 3000)
}

if (counter == 3){
    $("#comments3").html("You Won!");
    $("#comments1").html("");
    setTimeout(function() {
        box.removeClass("characterChosen");
        reset()
    }, 3000)
    
}
})