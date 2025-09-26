const textField = document.getElementById('textField');
const inputField = document.getElementById('inputField');


var topp = [];
var inBtwTM = [];
var mid = [];
var inBtwMB = [];
var bot = [];


var int;
var strInt;

async function plane() {
    if (strInt) {
        clearInterval(strInt)
    }
    topp = [];
    inBtwTM = [];
    mid = [];
    inBtwMB = [];
    bot = [];

    let topWWing1 = ['           ̄\\                   |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing2 = ['              ̄\\                |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing3 = ['                 ̄\\             |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing4 = ['                    ̄\\          |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing5 = ['                       ̄\\       |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing6 = ['                          ̄\\    |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing7 = ['                             ̄\\ |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|      '];
    let topWWing8 = ['                               |҈̅ ꙰̅ ̅ ҈̅ ꙰̅|҈  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB1 =   ['        ̗̀>-̶=>͕͐=-                 |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB2 =   ['           ̗̀>-̶=>͕͐=-              |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB3 =   ['              ̗̀>-̶=>͕͐=-           |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB4 =   ['                 ̗̀>-̶=>͕͐=-        |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB5 =   ['                    ̗̀>-̶=>͕͐=-     |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB6 =   ['                       ̗̀>-̶=>͕͐=-  |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB7 =   ['                          ̗̀>-̶=>͕͐꙰=- ꙰  ҈ |҈  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let topMWB8 =   ['                               >꙰-꙰=꙰҈>͕͐꙰=-꙰҈|꙰  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing1 = ['           ̠/                   |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing2 = ['              ̠/                |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing3 = ['                 ̠/             |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing4 = ['                    ̠/          |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing5 = ['                       ̠/       |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing6 = ['                          ̠/    |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing7 = ['                             ̠/ |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let midWWing8 = ['                               |꙰ ҈/꙰  ҈|  ҈|   |       '];
    let towM1 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM2 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM3 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM4 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM5 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM6 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM7 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towM8 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB1 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB2 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB3 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB4 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB5 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB6 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB7 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];
    let towB8 =     ['                               |͇̿ ͇̿ ͇̿ ͇̿|  |͇̿ ͇̿ ͇̿ ͇̿|       '];



    let stateProgress = 1;

    strInt = setInterval(() => {
        if (stateProgress === 1) {
            topp = topWWing1;
            inBtwTM = topMWB1;
            mid = midWWing1;
            inBtwMB = towM1;
            bot = towB1;

            stateProgress = 2;
        } else if (stateProgress === 2) {
            topp = topWWing2;
            inBtwTM = topMWB2;
            mid = midWWing2;
            inBtwMB = towM2;
            bot = towB2;

            stateProgress = 3;
        } else if (stateProgress === 3) {
            topp = topWWing3;
            inBtwTM = topMWB3;
            mid = midWWing3;
            inBtwMB = towM3;
            bot = towB3;

            stateProgress = 4;
        } else if (stateProgress === 4) {
            topp = topWWing4;
            inBtwTM = topMWB4;
            mid = midWWing4;
            inBtwMB = towM4;
            bot = towB4;

            stateProgress = 5;
        } else if (stateProgress === 5) {
            topp = topWWing5;
            inBtwTM = topMWB5;
            mid = midWWing5;
            inBtwMB = towM5;
            bot = towB5;

            stateProgress = 6;
        } else if (stateProgress === 6) {
            topp = topWWing6;
            inBtwTM = topMWB6;
            mid = midWWing6;
            inBtwMB = towM6;
            bot = towB6;

            stateProgress = 7;
        } else if (stateProgress === 7) {
            topp = topWWing7;
            inBtwTM = topMWB7;
            mid = midWWing7;
            inBtwMB = towM7;
            bot = towB7;

            stateProgress = 8;
        } else if (stateProgress === 8) {
            topp = topWWing8;
            inBtwTM = topMWB8;
            mid = midWWing8;
            inBtwMB = towM8;
            bot = towB8;

            stateProgress = 1;
        }
        updateTextField();
    }, 100);
}



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
    draw(topp, '~:~:~:~:~:~:~:~:~:~:~:͇c͇o͇m͇m͇a͇n͇d͇s͇:~:~:~:~:~:~:~:~:~:~');
    await drawC(bot, '<>', 25);
    await drawC(mid, '`\'', 7);
    draw(mid, '|̲̅b̲̅o̲̅a̲̅t̲̅|̲̅w̲̅a̲̅t̲̅e̲̅r̲̅|̲̅s̲̅t̲̅a̲̅r̲̅|̲̅p̲̅l̲̅a̲̅n̲̅e̲̅|');
    drawC(mid, '`\'', 7);
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
        if (inputField.value === 'boat') {
            inputField.value = '';
            water();
        }
        if (inputField.value === 'plane') {
            inputField.value = '';
            plane();
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
    await drawC(topp, '-̲̅-', 25); // -̲̅--̲̅--̲̅--̲̅-
    await drawC(bot, '_̅-', 25);
    await drawC(mid, '\'̮v̑', 9);
    draw(mid, '.̊.type start.̊.');
    drawC(mid, '\'̮v̑', 9);
}

inputField.addEventListener('keydown', handleInput);

window.onload = init;
