const textField = document.getElementById('textField');
const inputField = document.getElementById('inputField');


var topp = [];
var mid = [];
var bot = [];


var int;
var strInt;


async function water() {
    topp = [];
    mid = [];
    bot = [];

    let skyState1 = ['                                           '];
    let skyState2 = ['                                           '];
    let skyState3 = ['                                           '];
    let skyState4 = ['                                           '];
    let midState1 = ['                                           '];
    let midState2 = ['                                           '];
    let midState3 = ['                                           '];
    let midState4 = ['                                           '];

    let waterState1 = ['-⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎻⎺⎺⎻-⎽⎽-⎻⎺⎺⎻-⎽__⎽--⎽_'];
    let waterState2 = ['_⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽⎽-⎻⎺⎻⎺⎻-⎽__⎽-⎽__⎽-⎻'];
    let waterState3 = ['⎻⎺⎺⎻-⎽__⎽--⎽⎽__⎽-⎻⎺⎺⎻-⎽⎽-⎻⎺⎺⎻-⎽__⎽---⎽__⎽-⎻⎺'];
    let waterState4 = ['⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎻⎺⎺⎻-'];


    let stateProgress = 1;

    strInt = setInterval(() => {
        if (stateProgress === 1) {
            topp = skyState1;
            mid = midState1;
            bot = waterState1;
            stateProgress = 2;
        } else if (stateProgress === 2) {
            topp = skyState2;
            mid = midState2;
            bot = waterState2;
            stateProgress = 3;
        } else if (stateProgress === 3) {
            topp = skyState3;
            mid = midState3;
            bot = waterState3;
            stateProgress = 4;
        } else if (stateProgress === 4) {
            topp = skyState4;
            mid = midState4;
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
    let outText = topp.join('') + '\n\n' + mid.join('') + '\n\n' + bot.join('');
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
