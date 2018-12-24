var Darth = 
{
    name : "Darth Vader",
    life : 180,
    character :$("#CharacterDarth"),
    enemy : $("#EnemyDarth"),
    defender : $("#DefenderDarth")
}

var Luke = 
{
    name : "Luke SkyWalker",
    life : 100,
    character : $("#CharacterLuke"),
    enemy : $("#EnemyLuke"),
    defender : $("#DefenderLuke")
}

var Rey = 
{
    name : "Rey",
    life : 150,
    character : $("#CharacterRey"),
    enemy : $("#EnemyRey"),
    defender : $("#DefenderRey")
}

var Obi = 
{
    name : "Obi-Wan Kenobi",
    life : 120,
    character : $("#CharacterObi"),
    enemy : $("#EnemyObi"),
    defender : $("#DefenderObi")
}

var isCharacterChosen = false;
var characterChosen;
var isEnemyChosen = false;
var enemyChosen;

Darth.defender.hide();
Luke.defender.hide();
Rey.defender.hide();
Obi.defender.hide();

//Characters

$("#CharacterDarth").on("click",function(){

    if (isCharacterChosen){
        return false
    }
    Darth.enemy.hide();
    Luke.character.hide();
    Rey.character.hide();
    Obi.character.hide();

    isCharacterChosen = true;
    characterChosen = Darth.character;
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

    isCharacterChosen = true;
    characterChosen = Luke.character;
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

    isCharacterChosen = true;
    characterChosen = Rey.character;
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

    isCharacterChosen = true;
    characterChosen = Obi.character;
    $(this).addClass("characterChosen");
})

//Enemies

$("#EnemyDarth").on("click",function(){
    if (isEnemyChosen){
        return false
    }

    Darth.enemy.hide();
    Darth.defender.show();
    
    isEnemyChosen = true;
    enemyChosen = Darth.enemy;
    $(this).addClass("enemyChosen");
})

$("#EnemyLuke").on("click",function(){
    if (isEnemyChosen){
        return false
    }

    Luke.enemy.hide();
    Luke.defender.show();
    
    isEnemyChosen = true;
    enemyChosen = Luke.enemy;
    $(this).addClass("enemyChosen")
})

$("#EnemyRey").on("click",function(){
    if (isEnemyChosen){
        return false
    }

    Rey.enemy.hide();
    Rey.defender.show();
    
    isEnemyChosen = true;
    enemyChosen = Rey.enemy;
    $(this).addClass("enemyChosen")

})

$("#EnemyObi").on("click",function(){
    if (isEnemyChosen){
        return false
    }

    Obi.enemy.hide();
    Obi.defender.show();
    
    isEnemyChosen = true;
    enemyChosen = Obi.enemy;
    Obi.defender.addClass("enemyChosen")
})