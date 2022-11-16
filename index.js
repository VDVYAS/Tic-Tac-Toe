console.log("tic tac toe");
let turn = "X";
let gameover = false;
var vd = 0;
const audio = new Audio('ting.mp3');
const winning = new Audio('win.wav');

const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            winning.play();
            document.querySelector('p').innerText = boxtext[e[0]].innerText + " Won"
            boxtext[e[0]].style.fontSize = "350%";
            boxtext[e[1]].style.fontSize = "350%";
            boxtext[e[2]].style.fontSize = "350%";
            gameover = true

        }
    })

}

let boxs = document.getElementsByClassName("box");
Array.from(boxs).forEach(element => {

    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        audio.play();
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeturn();
            checkwin();
            if (!gameover) {
                document.getElementsByTagName("p")[0].innerHTML = "Turn for " + turn;
                vd = vd + 1;
                if (vd == '9') {
                    document.getElementsByTagName("p")[0].innerHTML = "Match Is Tie";
                }
            }
        }
    })
})
