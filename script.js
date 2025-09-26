const textField = document.getElementById('textField');
const inputField = document.getElementById('inputField');


var topp = [];
var inBtwTM = [];
var mid = [];
var inBtwMB = [];
var bot = [];


var int;
var strInt;


async function star() {
    if (strInt) {
        clearInterval(strInt)
    }
    topp = [];
    inBtwTM = [];
    mid = [];
    inBtwMB = [];
    bot = [];


    let starTop1 = ['                    ⡿⢦⣄ ⢀⣠⣴⣶                 '];
    let starTM1 = ['                    ⠘⣷ ⠉⠛⠛⠉⢰⣷                 '];
    let starM1 = ['                    ⡀⣴⣁⡀  .  ⢿⣦⡀              '];
    let starMB1 = ['                    ⠉⠉⠛⣿⡀ ⣰⠟⠛⠛⠉               '];
    let starBot1 = ['                       ⠈⢿⠏                    '];

    let starTop2 = ['                      ⢸⡿⢦⢀⣠⣰                  '];
    let starTM2 = ['                      ⣷⠛   ⠉⣷                  '];
    let starM2 = ['                   ⡀⣴⣿⡀  .  ⢿⣦⡀               '];
    let starMB2 = ['                    ⠉⠛⣿  ⣰⠟⠛⠉                '];
    let starBot2 = ['                      ⠈⢿⠏                     '];

    let starTop3 = ['                       ⡀⣰⣼⠀                   '];
    let starTM3 = ['                    ⢳⣶⣶⠉  ⣿⣇⣀             '];
    let starM3 = ['                     ⣹⣇ .  ⣿⠿⠋⠁            '];
    let starMB3 = ['                     ⢰⠿⠛⠛⠻⢿⡇⠀⠀            '];
    let starBot3 = ['                     ⠈ ⠀⠀⠀⠀⠋⠀             '];

    let starTop4 = ['                    ⢸⢦⣄ ⢀⣠⣴⣇                  '];
    let starTM4 = ['                     ⠘⣷⠉⠛ ⠉⣷⡀             '];
    let starM4 = ['                   ⡀⣴⣁⡀   .  ⣷⣄⡀           '];
    let starMB4 = ['                   ⠉⠉⠛⢿⡀ ⣰⠟⠛⠉             '];
    let starBot4 = ['                       ⠈⠏                 '];



    let stateProgress = 1;

    strInt = setInterval(() => {
        if (stateProgress === 1) {
            topp = starTop1;
            inBtwTM = starTM1
            mid = starM1;
            inBtwMB = starMB1;
            bot = starBot1;

            stateProgress = 2;
        } else if (stateProgress === 2) {
            topp = starTop2;
            inBtwTM = starTM2;
            mid = starM2;
            inBtwMB = starMB2;
            bot = starBot2;

            stateProgress = 3;
        } else if (stateProgress === 3) {
            topp = starTop3;
            inBtwTM = starTM3;
            mid = starM3;
            inBtwMB = starMB3;
            bot = starBot3;

            stateProgress = 4;
        } else if (stateProgress === 4) {
            topp = starTop4;
            inBtwTM = starTM4;
            mid = starM4;
            inBtwMB = starMB4;
            bot = starBot4;

            stateProgress = 1;
        }
        updateTextField();
    }, 250);
}

async function water() {
    if (strInt) {
        clearInterval(strInt)
    }
    topp = [];
    inBtwTM = [];
    mid = [];
    inBtwMB = [];
    bot = [];

    let midState1 = ['                    |̾͟_̃~̲•͕              '];
    let midState2 = ['                    |͟_̃̂~̲•͕              '];
    let midState3 = ['                    |͟_̃*͇•͕              '];
    let midState4 = ['                    |͟_̃~̲•͕              '];
    let btwmidState1 = ['            ∘∘=__̰__̰_̰_|_̰_̰___̰__༚=∘∘              '];
    let btwmidState2 = ['            ∘∘=_̰_̰___̰_|_̰__̰_̰___༚=∘∘              '];
    let btwmidState3 = ['            ∘∘=__̰_̰_̰__̰|_̰_̰___̰__༚=∘∘              '];
    let btwmidState4 = ['            ∘∘=__̰___̰_|__̰__̰_̰_̰_༚=∘∘              '];

    let waterState1 = ['-҈⎽__⎽-҈⎻⎺⎺⎻--⎽_\\¯⎻--___--⎻͒⎻¯／-⎽⎽-҈⎻⎺⎺⎻-⎽__⎽--҈⎽_'];
    let waterState2 = ['_⎽-҈⎻⎺⎺⎻-⎽__⎽-҈-\\¯⎻--__⎽͒--⎻⎻¯／⎻⎺⎻⎺⎻-⎽__⎽-⎽_҈_⎽-⎻'];
    let waterState3 = ['⎻⎺⎺⎻-҈⎽__⎽--⎽⎽_\\¯⎻--_͒⎽_--⎻⎻¯／⎻⎻-⎽__⎽-҈--⎽__⎽-⎻⎺'];
    let waterState4 = ['⎺⎻-҈⎽__⎽-҈-⎽__⎽-\\¯⎻͒--⎽__--⎻⎻¯／⎽__⎽--⎽_҈_⎽-⎻⎻⎺⎺⎻-҈'];


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
    inBtwTM = [];
    mid = [];
    inBtwMB = [];
    bot = [];
    await drawC(topp, '~:', 25);
    await drawC(bot, '<>', 25);
    await drawC(mid, '`\'', 6);
    draw(mid, '>type: "water" or "star" <');
    drawC(mid, '`\'', 6);
}

function handleInput(event) {
    if (event.key === 'Enter') {
        if (inputField.value === 'start') {
            inputField.value = '';
            start();
        }
        if (inputField.value === 'star') {
            inputField.value = '';
            star();
        }
        if (inputField.value === 'water') {
            inputField.value = '';
            water();
        }
        if (inputField.value === 'init') {
            inputField.value = '';
            init();
        }
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
    inBtwTM = [];
    mid = [];
    inBtwMB = [];
    bot = [];
    await drawC(topp, '~|', 25);
    await drawC(bot, '_-', 25);
    await drawC(mid, '*^', 9);
    draw(mid, '..type start..');
    drawC(mid, '*^', 9);
}



inputField.addEventListener('keydown', handleInput);


window.onload = init;
