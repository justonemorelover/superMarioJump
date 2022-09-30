const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    function removePulo() {
        mario.classList.remove("jump-mario")
    }

    setTimeout(removePulo, 500);
};

function gameOver() {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "")

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}`;

        mario.src = "./images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"

        clearInterval(loopGame)
    }
}

const loopGame = setInterval(gameOver, 10)

document.addEventListener("keydown", jump);

///.map .reduce .filter (estudar)