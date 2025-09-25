const textField = document.getElementById('textField');
const inputField = document.getElementById('inputField');


var topp = [];
var inBtwTM = [];
var mid = [];
var inBtwMB = [];
var bot = [];


var int;
var strInt;


async function water() {
    topp = [];
    mid = [];
    bot = [];

    let midState1 =    ['                    |̾͟_̃~̲•͕              '];
    let midState2 =    ['                    |͟_̃̂~̲•͕              '];
    let midState3 =    ['                    |͟_̃*͇•͕              '];
    let midState4 =    ['                    |͟_̃~̲•͕              '];
    let btwmidState1 = ['            ∘∘=__̰__̰_̰_|_̰_̰___̰__༚=∘∘              '];
    let btwmidState2 = ['            ∘∘=_̰_̰___̰_|_̰__̰_̰___༚=∘∘              '];
    let btwmidState3 = ['            ∘∘=__̰_̰_̰__̰|_̰_̰___̰__༚=∘∘              '];
    let btwmidState4 = ['            ∘∘=__̰___̰_|__̰__̰_̰_̰_༚=∘∘              '];

    let waterState1 =  ['-҈⎽__⎽-҈⎻⎺⎺⎻--⎽_\\¯⎻--___--⎻͒⎻¯／-⎽⎽-҈⎻⎺⎺⎻-⎽__⎽--҈⎽_'];
    let waterState2 =  ['_⎽-҈⎻⎺⎺⎻-⎽__⎽-҈-\\¯⎻--__⎽͒--⎻⎻¯／⎻⎺⎻⎺⎻-⎽__⎽-⎽_҈_⎽-⎻'];
    let waterState3 =  ['⎻⎺⎺⎻-҈⎽__⎽--⎽⎽_\\¯⎻--_͒⎽_--⎻⎻¯／⎻⎻-⎽__⎽-҈--⎽__⎽-⎻⎺'];
    let waterState4 =  ['⎺⎻-҈⎽__⎽-҈-⎽__⎽-\\¯⎻͒--⎽__--⎻⎻¯／⎽__⎽--⎽_҈_⎽-⎻⎻⎺⎺⎻-҈'];


    let stateProgress = 1;

    strInt = setInterval(() => {
        if (stateProgress === 1) {

            mid = midState1;

            inBtwMB = btwmidState1;

            bot = waterState1;

            stateProgress = 2;
        } else if (stateProgress === 2) {

            mid = midState2;

            inBtwMB = btwmidState2;
            
            bot = waterState2;

            stateProgress = 3;
        } else if (stateProgress === 3) {

            mid = midState3;
            
            inBtwMB = btwmidState3;
            
            bot = waterState3;

            stateProgress = 4;
        } else if (stateProgress === 4) {

            mid = midState4;
            
            inBtwMB = btwmidState4;
            
            bot = waterState4;

            stateProgress = 1;
        }
        updateTextField();
    }, 250);
}

async function start() {
    if (strInt) {
        clearInterval(strInt)
    }
    topp = [];
    mid = [];
    bot = [];
    await drawC(topp, '~:', 25);
    await drawC(bot, '<>', 25);
    await drawC(mid, '`\'', 9);
    draw(mid, '^>type water<^');
    drawC(mid, '`\'', 9);
}

function handleInput() {
    if (inputField.value === 'start') {
        start();
    }
    if (inputField.value === 'water') {
        water();
    }
    if (inputField.value === 'init') {
        init();
    }
}


function updateTextField() {
    let outText = topp.join('') + '\n' + inBtwTM.join('') + '\n' + mid.join('') + '\n' + inBtwMB.join('') + '\n' + bot.join('');
    textField.textContent = outText;
}


function draw(pos, cont) {
    pos.push(cont);
    updateTextField();
}


function drawC(pos, cont, max) {
    return new Promise(resolve => {
        let num = 0;
        int = setInterval(() => {
            if (num < max) {
                draw(pos, cont);
                num++;
            } else {
                clearInterval(int);
                resolve();
            }
        }, 10);
    });
}


async function init() {
    if (strInt) {
        clearInterval(strInt)
    }
    topp = [];
    mid = [];
    bot = [];
    await drawC(topp, '~|', 25);
    await drawC(bot, '_-', 25);
    await drawC(mid, '*^', 9);
    draw(mid, '..type start..');
    drawC(mid, '*^', 9);
}


inputField.addEventListener('input', handleInput);


window.onload = init;
