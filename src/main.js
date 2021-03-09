var currentBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var player1 = new Player(1, "🐠");
var player2 = new Player(2, "🐡");
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
var player1Wins = document.getElementById("player1Wins");
var player2Wins = document.getElementById("player2Wins");
var popupWrapper = document.getElementById("popupWrapper");
var winningPlayer = document.getElementById("winningPlayer");
var clearP1Wins = document.getElementById("clearP1Wins");
var clearP2Wins = document.getElementById("clearP2Wins");
var countDown = document.getElementById("countDown");
var turnDisplay = document.getElementById("turnDisplay");

window.addEventListener("load", updatePlayerScore)
square1.addEventListener("click", clickSquare);
square2.addEventListener("click", clickSquare);
square3.addEventListener("click", clickSquare);
square4.addEventListener("click", clickSquare);
square5.addEventListener("click", clickSquare);
square6.addEventListener("click", clickSquare);
square7.addEventListener("click", clickSquare);
square8.addEventListener("click", clickSquare);
square9.addEventListener("click", clickSquare);
clearP1Wins.addEventListener("click", function() {
  clearWins(1)
});
clearP2Wins.addEventListener("click", function() {
  clearWins(2)
});


function clickSquare() {
  updateCurrentBoard();
  newGame.updateGameBoard(currentBoard);
  newGame.totalMoves++;
  event.target.innerHTML += `<p class="new-token">${newGame.turn.token}</p>`;
  event.target.removeEventListener("click", clickSquare)
  newGame.changeTurn();
  updatePlayerTurn();
  checkWins();
  checkForDraw();
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
  } else if (event.target.id === "square9") {
    currentBoard[2].splice(2, 1, newGame.turn.id);
  }
}

function updatePlayerScore() {
  player1Wins.innerText = `${player1.wins} Wins`;
  player2Wins.innerText = `${player2.wins} Wins`;
}

function showWinnerPopup(player) {
  winningPlayer.innerText = `${player.token} Wins!`
  popupWrapper.classList.remove("hidden")
}

function clearWins(player) {
  if (player === 1) {
    localStorage.setItem(1,0)
    player1.wins = 0
    updatePlayerScore();
  } else {
    localStorage.setItem(2,0)
    player2.wins = 0
    updatePlayerScore();
  }
}

function startCountDown() {
  var timeleft = 10;
  var timer = setInterval(function() {
      countDown.innerHTML = timeleft;
      timeleft -= 1;
  }, 1000);
}

function updatePlayerTurn() {
  if (newGame.turn.id === 1) {
    turnDisplay.innerText = "🐠's Turn";
  } else if (newGame.turn.id === 2){
    turnDisplay.innerText = "🐡's Turn";
  }
}

function reload() {
  location.reload()
}

function checkWins() {
  if(newGame.checkWin() === 1) {
    player1.wins++
    newGame.showWin();
    updatePlayerScore();
    setTimeout(reload, 11 * 1000);
    showWinnerPopup(player1);
  } else if (newGame.checkWin() === 2) {
    player2.wins++
    newGame.showWin();
    updatePlayerScore();
    setTimeout(reload, 11 * 1000);
    showWinnerPopup(player2);
  }
}


function checkForDraw() {
  if (newGame.checkCatsGame()) {
    turnDisplay.innerText = "Draw!";
    setTimeout(newGame.resetGame, 5 * 1000);
    setTimeout(reload, 5 * 1000);
  }
}
