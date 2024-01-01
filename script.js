const TYPE_DELAY = 60; // milliseconds
const LINE_DELAY = TYPE_DELAY * 9; 
const NATURAL_DELAY = TYPE_DELAY * 3;
const NATURAL_STOPS = ",.;!?";

const beginning_phrases = ["> Oh, hey there.", 
                           "> I'm Ali, and you are?", 
                           "> Oh, you can't speak.", 
                           "> Well then, let me tell you a little about myself."];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['robotics.', 'mathematics.', 'computer science.'];

const type_elem_1 = document.getElementById("typewriter_1");

const writeBeginningLoop = async() => {
    let phrase = "";
    for(let i = 0; i < beginning_phrases.length; i++) {
        let curWord = beginning_phrases[i];
        for(let j = 0; j < curWord.length; j++) {
            type_elem_1.innerText = phrase + curWord.substring(0, j+1);
            if(curWord[j] === ',') {
                await sleep(NATURAL_DELAY);
            }
            await sleep(TYPE_DELAY);
        }
        await sleep(LINE_DELAY);

        phrase += curWord + "\n";
    }
};

writeBeginningLoop();