const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector(".game-over");
const restart = document.querySelector(".restart");

const scoreElement = document.querySelector(".score-number");
let score = 0;

let cont = 0;
let fixedCont = 0;
const contador = setInterval(() => {
    cont += 0.05;
    Math.round(cont);
    fixedCont = cont.toFixed(2);
}, 50);

const gameLevel = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    if (fixedCont == 19.35) {

        pipe.style.animation = "pipe-animation-score 1.2s infinite linear";
    }

}, 10);

const marioScore = () => {

    const pipePosition = pipe.offsetLeft;

    if (pipePosition > 159 && pipePosition < 600) {
        score += 5;
        scoreElement.innerHTML = score;
    }
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.style.display = "block";
        restart.style.display = "block";

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener("keydown", marioScore);