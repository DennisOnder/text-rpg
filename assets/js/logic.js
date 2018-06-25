// Variables;
var mainScreen = document.getElementById('mainScreen');
var warning = document.getElementById('warning');
var confirm = document.getElementById('confirm');
var header = '<h1 class="screen-text" id="screen-header">';
var closeHeader = '</h1>';
var combatText = '<p class="screen-text" style="font-size: 12px; color: red">';
var text = '<p class="screen-text">';
var textRed = '<p class="screen-text" style="color: red">';
var textGreen = '<p class="screen-text" style="color: rgb(53, 202, 53)">';
var closeText = '</p>';
var combatTextDiv = '<div id="combatText">';
var closeDiv = '</div>';
var buttonOne = '<button class="rpgui-button" style="color: #fff" id="optionOne">';
var buttonTwo = '<button class="rpgui-button" style="color: #fff" id="optionTwo">';
var buttonContinue = '<button class="rpgui-button" style="color: #fff" id="optionContinue">';
var buttonAttack = '<button class="rpgui-button" style="color: #fff" id="optionAttack">';
var buttonEndChapter = '<button class="rpgui-button" style="color: #fff" id="optionEnd">';
var closeButton = '</button>';
var chapterOneHeader = header + 'Chapter 1' + closeHeader;
var intro = '<h1 id="screen-header" class="screen-text">Welcome!</h1>' + 
            '<p class="screen-text">This is a text-based RPG made in JavaScript</p>' + 
            '<input id="screen-input" type="text" placeholder="Enter your character name">' +
            '<div class="selector">' + 
            '<select name="Class" id="class-select" class="rpgui-list" size="4">' + 
                '<option value="0" selected="selected">Choose your class:</option>' + 
                '<option value="Warrior">Warrior</option>' + 
                '<option value="Mage">Mage</option>' + 
                '<option value="Ranger">Ranger</option>' + 
            '</select>' +
            '</div>' + 
            '<button id="screen-button" class="rpgui-button">' +
            '<p>Create your character!</p>' +
            '</button>' +
            '<div id="confirm" style="visibility: hidden;">' + 
            '<p class="screen-text" style="color: rgb(53, 202, 53)">Your character has been created!</p>' + 
            '</div>' + 
            '<div id="warning" style="visibility: hidden;">' + 
              '<p class="screen-text" style="color: red;">' + 
                '<span style="color: red; font-size: 1.25em; margin-right: 5px;">&times;</span>You did not create your character!' + 
               '<span style="color: red; font-size: 1.25em; margin-left: 5px;">&times;</span>' + 
             '</p>' + 
             '</div>';

// Functions
function attackBear() {
    clear();
    damageRoll();
    mainScreen.innerHTML += 
        chapterOneHeader + 
        text + 'The Battle has begun!' + closeText + 
        textGreen + 'You have ' + character.health + ' HP.' + closeText + 
        textRed + 'The foe has ' + bear.health + ' HP.' + closeText + 
        buttonAttack + 'Attack' + closeButton;
    if (character.attack === 0) {
        mainScreen.innerHTML +=
            combatTextDiv + textGreen + 'You attempt to attack the foe. You miss by a longshot!' + closeText + closeDiv;
    } else {
        bear.health = bear.health - character.attack;
        mainScreen.innerHTML +=
            combatTextDiv + textGreen + 'You attempt to attack the foe. You hit the foe, dealing ' + character.attack + ' damage!' + closeText + closeDiv;
    }
    document.getElementById('optionAttack').disabled = true;
    setTimeout(function () {
        if (bear.attack === 0) {
            mainScreen.innerHTML +=
                combatTextDiv + textRed + 'The foe attempts to attack you. The attack missed!' + closeText + closeDiv;
        } else {
            character.health = character.health - bear.attack;
            mainScreen.innerHTML +=
                combatTextDiv + textRed + 'The foe attempts to attack you. The attack is a hit, dealing ' + bear.attack + ' damage!' + closeText + closeDiv;
        }
        document.getElementById('optionAttack').disabled = false;
        document.getElementById('optionAttack').addEventListener('click', attackBear);
        checkHealth();
    }, 1500);
}

function attackBearTwo() {
    clear();
    damageRoll();
    mainScreen.innerHTML += 
        chapterOneHeader + 
        text + 'The Battle has begun!' + closeText + 
        textGreen + 'You have ' + character.health + ' HP.' + closeText + 
        textRed + 'The foe has ' + bear.health + ' HP.' + closeText + 
        buttonAttack + 'Attack' + closeButton;
    if (character.attack === 0) {
        mainScreen.innerHTML +=
            combatTextDiv + textGreen + 'You attempt to attack the foe. You miss by a longshot!' + closeText + closeDiv;
    } else {
        bear.health = bear.health - character.attack;
        mainScreen.innerHTML +=
            combatTextDiv + textGreen + 'You attempt to attack the foe. You hit the foe, dealing ' + character.attack + ' damage!' + closeText + closeDiv;
    }
    document.getElementById('optionAttack').disabled = true;
    setTimeout(function () {
        if (bear.attack === 0) {
            mainScreen.innerHTML +=
                combatTextDiv + textRed + 'The foe attempts to attack you. The attack missed!' + closeText + closeDiv;
        } else {
            character.health = character.health - bear.attack;
            mainScreen.innerHTML +=
                combatTextDiv + textRed + 'The foe attempts to attack you. The attack is a hit, dealing ' + bear.attack + ' damage!' + closeText + closeDiv;
        }
        document.getElementById('optionAttack').disabled = false;
        document.getElementById('optionAttack').addEventListener('click', attackBearTwo);
        checkHealthTwo();
    }, 1500);
}

function checkHealth() {
    if (bear.health <= 0) {
        document.getElementById('optionAttack').disabled = true;
        clear();
        mainScreen.innerHTML =
            chapterOneHeader +
            text + 'The battle has ended!' + closeText +
            textGreen + 'You have won!' + closeText +
            buttonContinue + 'Continue' + closeButton;
            document.getElementById('optionContinue').addEventListener('click', proceedOne);
    } else if (character.health <= 0) {
        document.getElementById('optionAttack').disabled = true;
        clear();
        mainScreen.innerHTML =
            chapterOneHeader +
            text + 'The battle has ended!' + closeText +
            textRed + 'You have lost.' + closeText +
            buttonContinue + 'Continue' + closeButton;
            document.getElementById('optionContinue').addEventListener('click', function() {
                clear();
                mainScreen.innerHTML += intro;
            });
    }
}

function checkHealthTwo() {
    if (bear.health <= 0) {
        document.getElementById('optionAttack').disabled = true;
        clear();
        mainScreen.innerHTML =
            chapterOneHeader +
            text + 'The battle has ended!' + closeText +
            textGreen + 'You have won!' + closeText +
            buttonContinue + 'Continue' + closeButton;
            document.getElementById('optionContinue').addEventListener('click', proceedTwo);
    } else if (character.health <= 0) {
        document.getElementById('optionAttack').disabled = true;
        clear();
        mainScreen.innerHTML =
            chapterOneHeader +
            text + 'The battle has ended!' + closeText +
            textRed + 'You have lost.' + closeText +
            buttonContinue + 'Continue' + closeButton;
            document.getElementById('optionContinue').addEventListener('click', function() {
                clear();
                mainScreen.innerHTML += intro;
            });
    }
}

function damageRoll() {
    character.attack = Math.floor(Math.random() * 5) * character.power / 4;
    bear.attack = Math.floor(Math.random() * 5) * bear.power / 4;
}

function clear() {
    mainScreen.innerHTML = '';
}