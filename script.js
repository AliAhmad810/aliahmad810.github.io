function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['robotics.', 'mathematics.', 'computer science.'];

const type_elem = document.getElementById("typewriter");

let sleepTime = 90; 

let curPhraseIndex = 0;

const writeLoop = async() => {
    while (true) {
        let curWord = phrases[curPhraseIndex];
        
        for(let i = 0; i < curWord.length; i++) {
            type_elem.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 9);

        for(let i = curWord.length; i > 0; i--) {
            type_elem.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime * 0.9);
        }
        await sleep(sleepTime * 9);

        curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
};

writeLoop();