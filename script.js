const TYPE_DELAY = 60; // milliseconds
const LINE_DELAY = TYPE_DELAY * 9; 
const NATURAL_DELAY = TYPE_DELAY * 3;

const text_elem = document.getElementById("typewriter_1");
const cursor_elem = document.getElementById("cursor");

var phrases = ["> Oh, hey there.", 
               "> I'm Ali, and you are?", 
               "> Oh, you can't speak.", 
               "> Well then, let me tell you about myself."];

var complete = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeElement(element) {
    let op = 1; // intial opacity
    var timer = setInterval(function() {
        if(op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
}

function unfadeElement(element) {
    let op = 0.1; // intial opacity
    var timer = setInterval(function() {
        if(op >= 0.9) {
            clearInterval(timer);
            element.style.display = 'inline';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 50);
}

const writeText = async() => {
    text_elem.innerText = "";
    unfadeElement(text_elem);
    unfadeElement(cursor_elem);
    sleep(1200);
    let phrase = "";
    for(let i = 0; i < phrases.length; i++) {
        let curWord = phrases[i];
        for(let j = 0; j < curWord.length; j++) {
            text_elem.innerText = phrase + curWord.substring(0, j+1);
            if(curWord[j] === ',') {
                await sleep(NATURAL_DELAY);
            }
            await sleep(TYPE_DELAY);
        }
        await sleep(LINE_DELAY);

        phrase += curWord + "\n";
    }
    fadeElement(text_elem);
    fadeElement(cursor_elem);
    console.log(text_elem.innerText);
};

function testFunc() {
    text_elem.innerText = "";
    sleep(1200);
    let phrase = "";
    for(let i = 0; i < phrases_1.length; i++) {
        let curWord = phrases_1[i];
        for(let j = 0; j < curWord.length; j++) {
            text_elem.innerText = phrase + curWord.substring(0, j+1);
            if(curWord[j] === ',') {
                setTimeout(NATURAL_DELAY);
            }
            setTimeout(TYPE_DELAY);
        }
        setTimeout(LINE_DELAY);

        phrase += curWord + "\n";
    }

}

async function execute() {
    writeText();
    await sleep(11000);
    writeText();
}

execute();