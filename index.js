let playerTurnText = document.getElementById("player-turn-text")
let cells = Array.from(document.getElementsByClassName("cell"))
let restart = document.getElementById("restart")
let winningText = document.getElementById("winning-text")

const PlayerX = "X"
const PlayerO = "O"
let currPlayer = PlayerX
let cellsArray = new Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
}

function cellClicked(e) {
    let id = e.target.id
    if (cellsArray[id] == null)
    {
        cellsArray[id] = currPlayer
        cells[id].innerHTML = currPlayer
    
        if (currPlayer == PlayerX)
            currPlayer = PlayerO
        else
            currPlayer = PlayerX
    }
    winningText.innerHTML = ifWon()
        
    playerTurnText.innerHTML = "Turn " + currPlayer
    console.log("Turn " + currPlayer)  
}

function ifWon() {
    for (const conditions of winningConditions)//לופ על מערכי אופציות הנצחונות
    {
        let [a,b,c] = conditions

        if (cellsArray[a] == currPlayer && cellsArray[b] == currPlayer && cellsArray[c] == currPlayer)
            return "The winner is Player " + currPlayer + "!"
    }
}

startGame()