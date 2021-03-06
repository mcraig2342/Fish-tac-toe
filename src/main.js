var currentBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var player1 = new Player(1, "❌");
var player2 = new Player(2, "⭕️");
var newGame = new Game(player1, player2, currentBoard);

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");



square1.addEventListener("click", clickSquare);
square2.addEventListener("click", clickSquare);
square3.addEventListener("click", clickSquare);
square4.addEventListener("click", clickSquare);
square5.addEventListener("click", clickSquare);
square6.addEventListener("click", clickSquare);
square7.addEventListener("click", clickSquare);
square8.addEventListener("click", clickSquare);
square9.addEventListener("click", clickSquare);


function clickSquare() {
  updateCurrentBoard();
  // newGame.updateGameBoard();
  newGame.totalMoves++;
  event.target.innerHTML += newGame.turn.token;
  event.target.removeEventListener("click", clickSquare)
  newGame.changeTurn();
  if (newGame.turn.id === 2) {
    newGame.checkWinPlayer1();
  } else {
    newGame.checkWinPlayer2();
  }
  newGame.checkCatsGame();
}

function updateCurrentBoard() {
   if (event.target.id === "square1") {
     currentBoard[0].splice(0, 1, newGame.turn.id);
   } else if (event.target.id === "square2") {
     currentBoard[0].splice(1, 1, newGame.turn.id);
   } else if (event.target.id === "square3") {
     currentBoard[0].splice(2, 1, newGame.turn.id);
   } else if (event.target.id === "square4") {
     currentBoard[1].splice(0, 1, newGame.turn.id);
   } else if (event.target.id === "square5") {
     currentBoard[1].splice(1, 1, newGame.turn.id);
   } else if (event.target.id === "square6") {
     currentBoard[1].splice(2, 1, newGame.turn.id);
   } else if (event.target.id === "square7") {
     currentBoard[2].splice(0, 1, newGame.turn.id);
   } else if (event.target.id === "square8") {
     currentBoard[2].splice(1, 1, newGame.turn.id);
   } else if (event.target.id === "square2") {
     currentBoard[2].splice(2, 1, newGame.turn.id);
   }
}
