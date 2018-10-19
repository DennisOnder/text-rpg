function startOne() {
    clear();
    mainScreen.innerHTML =
        chapterOneHeader +
        text + 'You wake up in the middle of a forest, on a small dirt road going north to south relative from you.' + closeText +
        text + 'In the distance you can hear a loud noise from a person yelling: "Help!"' + closeText +
        text + 'As far as you can see, you have two options, ' + character.name + '.' + closeText +
        text + 'You can either continue walking down the road, in a southern direction, or go north towards the loud noise.' + closeText;
    mainScreen.innerHTML +=
        buttonOne + 'Continue walking down the road' + closeButton +
        buttonTwo + 'Walk towards the noise' + closeButton;
    document.getElementById('optionOne').addEventListener('click', episodeOne);
    document.getElementById('optionTwo').addEventListener('click', episodeTwo);
}

function episodeOne() {

    clear();
    mainScreen.innerHTML =
        chapterOneHeader +
        text + 'As you are walking deeper into the forest, you can hear branches cracking and quiet footsteps.' + closeText +
        text + 'You start suspecting that something is following you.' + closeText +
        text + 'Afraid of the noises, your fear grows ever larger due to the lack of a weapon to defend yourself.' +
        buttonContinue + 'Continue' + closeButton;

    document.getElementById('optionContinue').addEventListener('click', function () {
        clear();
        mainScreen.innerHTML =
            chapterOneHeader +
            text + 'Laying next to a tree, right beside the road, you can see an open chest.' + closeButton +
            text + 'You approach the chest with curiosity of what hides inside.' + closeText +
            text + 'As you are sure that no danger lies around the chest itself, you take a look inside.' + closeText +
            buttonContinue + 'Continue' + closeButton;

        document.getElementById('optionContinue').addEventListener('click', function () {
            clear();
            mainScreen.innerHTML =
                chapterOneHeader +
                text + 'Inside of the chest, you have found a ' + inventory.weapon + ', and a ' + inventory.armor + '.' +
                text + 'Wielding the acquired weapon and armor, your morale has raised, feeling more comfortable whilst roaming in the woods.' + closeText +
                text + 'You proceed with walking deeper into the forest.' + closeText +
                buttonContinue + 'Continue' + closeButton;

            document.getElementById('optionContinue').addEventListener('click', function () {
                clear();
                mainScreen.innerHTML =
                    chapterOneHeader +
                    text + 'From a distance, you can see a dark figure approaching you at a fast speed.' + closeText +
                    text + 'You draw your weapon, but you still take a moment to think about your next action.' + closeText +
                    text + 'Choose wisely.' + closeText +
                    buttonOne + 'Charge and attack' + closeButton +
                    buttonTwo + 'Try to run away' + closeButton;
                bear = new Enemy('Bear', 5);

                document.getElementById('optionOne').addEventListener('click', function () {
                    clear();
                    mainScreen.innerHTML =
                        chapterOneHeader +
                        text + 'As you charge violently towards the figure, you can see clearly that it is a bear that is charging towards you.' + closeText +
                        text + 'You tumble over a large rock, and the bear runs you over.' + closeText +
                        text + 'The bear ran past you, but you took 10 points of damage,' + closeText;
                    character.health = character.health - 10;
                    mainScreen.innerHTML +=
                        text + 'You have no other option than to fight the bear.' + closeText +
                        buttonContinue + 'Fight the bear' + closeButton;
                    document.getElementById('optionContinue').addEventListener('click', function () {
                        clear();
                        mainScreen.innerHTML +=
                            chapterOneHeader +
                            text + 'The battle has begun!' + closeText +
                            buttonAttack + 'Attack!' + closeButton;
                        document.getElementById('optionAttack').addEventListener('click', attackBear);
                    });
                });
                document.getElementById('optionTwo').addEventListener('click', function () {
                    clear();
                    mainScreen.innerHTML +=
                        chapterOneHeader +
                        text + 'You try running away, but tough luck.' + closeText +
                        text + 'The bear runs you over with tremendous force, dealing 10 damage to you.' + closeText +
                        text + 'You have 90 HP remaining, and no other choice but to fight the bear.' + closeText +
                        buttonAttack + 'Fight the bear' + closeButton;
                    character.health = character.health - 10;
                    document.getElementById('optionAttack').addEventListener('click', attackBear);
                });
            });
        });
    });
}

function episodeTwo() {
    clear();
    mainScreen.innerHTML +=
        chapterOneHeader +
        text + 'As you run towards the sound, you can see an old man facing a bear, standing on two feet and growling at him.' + closeText +
        text + 'The man throws you a ' + inventory.weapon + ' and a ' + inventory.armor + '.' + closeText +
        text + "He shouts: 'What the hell are you waiting for? Put that on and help me!'" + closeText +
        text + 'You equip the provided gear, and charge the bear.' + closeText +
        buttonAttack + 'Fight the bear' + closeButton;
    bear = new Enemy('Bear', 5);
    document.getElementById('optionAttack').addEventListener('click', attackBearTwo);
}

function proceedOne() {
    clear();
    mainScreen.innerHTML +=
        chapterOneHeader +
        text + "As you've slain the bear, you proceed walking down the road to a clearing in the forest." + closeText +
        text + 'You can, in the distance, see a small village.' + closeText +
        text + 'The village looks rustic, and there are two armed soldiers guarding the entrance.' + closeText +
        buttonContinue + 'Continue' + closeButton;
    document.getElementById('optionContinue').addEventListener('click', function () {
        clear();
        mainScreen.innerHTML +=
            chapterOneHeader +
            text + "You approach the guards, asking: 'Where am I?'" + closeText +
            text + 'One of the guards replied to you saying: "Welcome back to Aroonshire, ' + character.name + '!"' + closeText +
            text + 'Disturbed by the fact that the guards knew who you are, you enter the village after the guards opened the gate.' + closeText +
            buttonEndChapter + 'End Chapter One' + closeButton;
        document.getElementById('optionEnd').addEventListener('click', endChapterOne);
    });
}

function proceedTwo() {
    clear();
    mainScreen.innerHTML +=
        chapterOneHeader +
        text + "It was about time, wasn't it " + character.name + "?" + closeText +
        text + 'Disturbed by the fact that the old man knew who you are, you tried to avoid him, turning aroud and heading down the road.' + closeText +
        text + "The man shouted: 'Where are you going, " + character.userClass + "?'" + closeText +
        text + 'You turned back around, and you have decided to walk down the road with him' + closeText +
        buttonContinue + 'Continue' + closeButton;
    document.getElementById('optionContinue').addEventListener('click', function () {
        clear();
        mainScreen.innerHTML +=
            chapterOneHeader +
            text + 'You are truly a hero. You are not just an ordinary ' + character.userClass + ', said the man.' + closeText +
            text + 'Well, since you do not know me, my name is Tibbald Harding, a trader from the village of Aroonshire.' + closeText +
            text + 'This road will take us to the village. It is near, just outside of the forest.' + closeText +
            text + 'You decide to follow along to the village, so you can find out more about what happened to you.' + closeText +
            buttonContinue + 'Continue' + closeText;
        document.getElementById('optionContinue').addEventListener('click', function () {
            clear();
            mainScreen.innerHTML +=
                chapterOneHeader +
                text + 'As you approach the village, you can see two armed guards protecting the gate.' + closeText + 
                text + 'When you arrive at the gates, the guards cheerfully salute you, shouting as they open the gates: Welcome back ' +  character.name + '!' + closeText +
                text + 'You arrive at the village, not remembering the place, eager to find out more about yourself, and what happened prior to you waking up in the forest.' + closeText + 
                buttonEndChapter + 'End Chapter One' + closeButton; 
            document.getElementById('optionEnd').addEventListener('click', endChapterOne);
        });
    });
}

function endChapterOne() {
    clear();
    mainScreen.innerHTML +=
        text + 'Thank you for playing!' + closeText +
        text + 'Chapter Two is in the making at the moment, so stay tuned for that!' + closeText +
        buttonContinue + 'Back to menu' + closeButton;
    document.getElementById('optionContinue').addEventListener('click', function () {
        clear();
        mainScreen.innerHTML += intro;
        document.getElementById('screen-button').addEventListener('click', createCharacter);
    });
}
