// ***Bootcamp H.W 4***



// Set some effects for images
function opacityChange(img) {
    img.attr("style", "opacity: 0.2;");
}
function opacityNone(img) {
    img.attr("style", "opacity: 1;");
}
function ShowCharacter(chara) {
    chara.attr("style", "display: flex;")
}
function HideCharacter(chara) {
    chara.attr("style", "display: none;")
}
function clearCharacter(chara) {
    $(chara, "h4").text("");
    $(chara).removeClass();
}
function clearBox(chara) {
    $(chara).empty();
}


// Choosing a side
var Sith = $(".sith_logo");
var Jedi = $(".jedi_logo");

$(Sith).on("click", function () {
    opacityChange(Jedi);
    opacityNone(Sith);
    ShowCharacter(Darth_Maul);
    ShowCharacter(Darth_Vader);
    ShowCharacter(Kylo_Ren);
    ShowCharacter(Emperor_Palpatine);
    HideCharacter(Obi_Wan)
    HideCharacter(Luke_Skywalker)
    HideCharacter(Rey)
    HideCharacter(Master_Yoda)
    $("#lineTwo").text("Pick your character");
});
$(Jedi).on("click", function () {
    opacityChange(Sith);
    opacityNone(Jedi);
    ShowCharacter(Obi_Wan);
    ShowCharacter(Luke_Skywalker);
    ShowCharacter(Rey);
    ShowCharacter(Master_Yoda);
    HideCharacter(Darth_Maul)
    HideCharacter(Darth_Vader)
    HideCharacter(Kylo_Ren)
    HideCharacter(Emperor_Palpatine)
    $("#lineTwo").text("Pick your character");
});


// Choosing a character/opement
var Darth_Maul = $(".Darth_Maul");
var Darth_Vader = $(".Darth_Vader");
var Kylo_Ren = $(".Kylo_Ren");
var Emperor_Palpatine = $(".Emperor_Palpatine");
var Obi_Wan = $(".Obi_Wan");
var Luke_Skywalker = $(".Luke_Skywalker");
var Rey = $(".Rey");
var Master_Yoda = $(".Master_Yoda");

function sithEnemyLine() {
    clearBox(Sith);
    clearBox(Jedi);
    ShowCharacter(Obi_Wan);
    ShowCharacter(Luke_Skywalker);
    ShowCharacter(Rey);
    ShowCharacter(Master_Yoda);
    clearCharacter(Darth_Maul);
    clearCharacter(Darth_Vader);
    clearCharacter(Kylo_Ren);
    clearCharacter(Emperor_Palpatine);
    $("#lineOne").text("");
    $("#lineTwo").text("Choose your opponent");
}
function jediEnemyLine() {
    clearBox(Sith);
    clearBox(Jedi);
    ShowCharacter(Darth_Maul);
    ShowCharacter(Darth_Vader);
    ShowCharacter(Kylo_Ren);
    ShowCharacter(Emperor_Palpatine);
    clearCharacter(Obi_Wan);
    clearCharacter(Luke_Skywalker);
    clearCharacter(Rey);
    clearCharacter(Master_Yoda);
    $("#lineOne").text("");
    $("#lineTwo").text("Choose your opponent");
}
var userCharacterIsChosen = false;
var enemyCharacterIsChosen = false;

// Sith
$(Darth_Maul).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine();
        $("#user_character").addClass("Darth_Maul");
        $(".Darth_Maul").attr("style", "display: flex;");
        $("#user_character_name").text("Darth Maul");
        opacityNone(Jedi);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Darth_Maul");
        $(".Darth_Maul").attr("style", "display: flex;");
        secondPick("Darth Maul");
        showAttackButton();
        chracterHP = 120;
        chracterATK = 5;
        characterID = 1;
        showStatus();
    }
});
$(Darth_Vader).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Darth_Vader");
        $(".Darth_Vader").attr("style", "display: flex;");
        $("#user_character_name").text("Darth Vader");
        opacityNone(Jedi);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Darth_Vader");
        $(".Darth_Vader").attr("style", "display: flex;");
        secondPick("Darth Vader");
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        characterID = 2;
        showStatus();
    }
});
$(Kylo_Ren).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Kylo_Ren");
        $(".Kylo_Ren").attr("style", "display: flex;");
        $("#user_character_name").text("Kylo Ren");
        opacityNone(Jedi);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Kylo_Ren");
        $(".Kylo_Ren").attr("style", "display: flex;");
        secondPick("Kylo Ren");
        showAttackButton();
        chracterHP = 240;
        chracterATK = 20;
        characterID = 3;
        showStatus();
    }
});
$(Emperor_Palpatine).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Emperor_Palpatine");
        $(".Emperor_Palpatine").attr("style", "display: flex;");
        $("#user_character_name").text("Emperor Palpatine");
        opacityNone(Jedi);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Emperor_Palpatine");
        $(".Emperor_Palpatine").attr("style", "display: flex;");
        secondPick("Emperor Palpatine");
        showAttackButton();
        chracterHP = 300;
        chracterATK = 25;
        characterID = 4;
        showStatus();
    }
});

// Jedi
$(Obi_Wan).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Obi_Wan");
        $(".Obi_Wan").attr("style", "display: flex;");
        $("#user_character_name").text("Obi Wan");
        opacityNone(Sith);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Obi_Wan");
        secondPick("Obi Wan");
        $(".Obi_Wan").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 120;
        chracterATK = 5;
        characterID = 1;
        showStatus();
    }
});
$(Luke_Skywalker).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Luke_Skywalker");
        $(".Luke_Skywalker").attr("style", "display: flex;");
        $("#user_character_name").text("Luke Skywalker");
        opacityNone(Sith);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Luke_Skywalker");
        secondPick("Luke Skywalker");
        $(".Luke_Skywalker").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        characterID = 2;
        showStatus();
    }
});
$(Rey).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Rey");
        $(".Rey").attr("style", "display: flex;");
        $("#user_character_name").text("Rey");
        opacityNone(Sith);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Rey");
        secondPick("Rey");
        $(".Rey").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 240;
        chracterATK = 20;
        characterID = 3;
        showStatus();
    }
});
$(Master_Yoda).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Master_Yoda");
        $(".Master_Yoda").attr("style", "display: flex;");
        $("#user_character_name").text("Master Yoda");
        opacityNone(Sith);
    } else if (enemyCharacterIsChosen === false) {
        enemyCharacterIsChosen = true;
        $("#enemy_character").addClass("Master_Yoda");
        secondPick("Master Yoda");
        $(".Master_Yoda").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 300;
        chracterATK = 25;
        characterID = 4;
        showStatus();
    }
});

function secondPick(name) {
    var newH4name = $("<h4>");
    $(newH4name).text(name)
    $("#enemy_character").append(newH4name);
}

// Fighting mode
function showAttackButton() {
    $("#ATK_button").attr("style", "display: flex;");
    $("#lineTwo").text("");
}
function hideAttackButton() {
    $("#ATK_button").attr("style", "display: none;");
}
function showRestartButton() {
    $("#RST_button").attr("style", "display: flex;");
}
function hideRestartButton() {
    $("#RST_button").attr("style", "display: none;");
}
function clearAllCharacters() {
    clearCharacter(Obi_Wan);
    clearCharacter(Luke_Skywalker);
    clearCharacter(Rey);
    clearCharacter(Master_Yoda);
    clearCharacter(Darth_Maul);
    clearCharacter(Darth_Vader);
    clearCharacter(Kylo_Ren);
    clearCharacter(Emperor_Palpatine);
}

var user_HP = 160;
var chracterHP;
var chracter_1HP = 120;
var chracter_2HP = 180;
var chracter_3HP = 240;
var chracter_4HP = 300;
var user_ATK = 0;
var chracter_1ATK = 5;
var chracter_2ATK = 10;
var chracter_3ATK = 20;
var chracter_4ATK = 25;


function userATKgrow() {
    user_ATK = user_ATK + 6;
}
function userHPlower() {
    user_HP = user_HP - chracterATK;
}
function charHPlower() {
    chracterHP = chracterHP - user_ATK;
}
var btnClick = $("#ATK_button");
var characterID;

function userStatusChange() {
    // User status
    clearBox("#user_status")

    u_HP = $("<h4>");
    $(u_HP).text("your HP: " + user_HP);
    $("#user_status").append(u_HP);
    userHPlower()

    userATKgrow();
    u_ATK = $("<h4>");
    $(u_ATK).text("your ATK: " + user_ATK);
    $("#user_status").append(u_ATK);


    // User Die
    if (user_HP <= 0) {
        $("#user_status").html("<h2>You Died</h2>");
        hideAttackButton();
        clearAllCharacters()
        setTimeout(function () { showRestartButton() }, 2000);
    }
}

function enemyStatusChange(params) {
    // Caracter status
    clearBox("#enemy_status")

    c_HP = $("<h4>");
    $(c_HP).text("enemy's HP: " + chracterHP);
    $("#enemy_status").append(c_HP);
    charHPlower()

    c_ATK = $("<h4>");
    $(c_ATK).text("enemy's ATK: " + chracterATK);
    $("#enemy_status").append(c_ATK);

    // Caracter Die
    if (chracterHP <= 0) {
        clearBox("#enemy_character")
        $("#enemy_character").removeClass();
        $("#enemy_status").html("<h2>Enemy Died</h2>");
        //enemyIDdie(characterDeath);
        hideAttackButton();
        enemyCharacterIsChosen = false;
        chracterATK = 0;
    }
}
function showStatus() {
    // User status
    clearBox("#user_status")
    u_HP = $("<h4>");
    $(u_HP).text("your HP: " + user_HP);
    $("#user_status").append(u_HP);
    u_ATK = $("<h4>");
    $(u_ATK).text("your ATK: " + user_ATK);
    $("#user_status").append(u_ATK);
    // Caracter status
    clearBox("#enemy_status")
    c_HP = $("<h4>");
    $(c_HP).text("enemy's HP: " + chracterHP);
    $("#enemy_status").append(c_HP);
    c_ATK = $("<h4>");
    $(c_ATK).text("enemy's ATK: " + chracterATK);
    $("#enemy_status").append(c_ATK);
}

$(btnClick).on("click", function () {

    enemyStatusChange();
    userStatusChange();

});