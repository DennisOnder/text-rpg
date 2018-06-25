// Character Variables, values declared by functions;
var characterName;
var characterClass;
var character;
var inventory;

// Constructor that creates a character using the information from the beginning;
function User(name,userClass) {
    this.name = name;
    this.userClass = userClass;
    this.health = 100;
    this.power = 20;
    this.attack = Math.floor(Math.random() * 5) * this.power / 4;
}

function Equipment(chosenClass) {
    if(chosenClass === "Warrior") {
        this.weapon = 'Claymore Sword';
        this.armor = 'Platemail Chestpiece';
    } else if(chosenClass === "Mage") {
        this.weapon = 'Enchanted Staff';
        this.armor = 'Cloth Robe';
    }
    else {
        this.weapon = 'Shortbow and a Quiver';
        this.armor = 'Leather Chestpiece';
    }
}

function createCharacter() {

    characterName = document.getElementById('screen-input').value;
    characterClass = document.getElementById('class-select').value;
    character = new User(characterName, characterClass);
    inventory = new Equipment(characterClass);

    if(character === undefined) {
        confirm.style.visibility = 'hidden';
        warning.style.visibility = 'visible';
    } 
    
    else if(character.name === '' || character.userClass === '0') {
        confirm.style.visibility = 'hidden';
        warning.style.visibility = 'visible';
    }

    else {
        warning.style.visibility = 'hidden';
        confirm.style.visibility = 'visible';
        
        setTimeout(function() {
        confirm.style.visibility = 'hidden';
        }, 3000);

        document.getElementById('screen-button').firstElementChild.innerHTML = 'Start your adventure!';
        document.getElementById('screen-button').setAttribute('onclick', 'startOne()');
}
}

// Take the user values, and create the character; Check if character has been created; If created, change functions;
document.getElementById('screen-button').addEventListener('click', createCharacter);
