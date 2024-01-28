let turnSwitcher = true;
let gameStatus = new Array(9).fill("");
const allCells = document.querySelectorAll(".game-cell");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellClicked(cell, index) {
    if (cell.textContent == "") {
        const newCellContent = turnSwitcher ? "X" : "O";
        cell.textContent = newCellContent;
        gameStatus[index] = newCellContent;
        turnSwitcher = !turnSwitcher;

        checkWinner();
    }
}

function checkWinner() {
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            document.querySelectorAll(".game-cell")[a].style.backgroundColor = "green";
            document.querySelectorAll(".game-cell")[b].style.backgroundColor = "green";
            document.querySelectorAll(".game-cell")[c].style.backgroundColor = "green";
        }
    });
}

function resetGame() {
    gameStatus = new Array(9).fill("");
    allCells.forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.textContent = "";
    });
}

window.onload = function() {
    const gameCells = document.querySelectorAll(".game-cell"); 

    gameCells.forEach((cell, index) => { 
        cell.addEventListener("click", () => { 
            cellClicked(cell, index);
        });
    });
}


