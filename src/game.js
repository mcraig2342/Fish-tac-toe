class Game {
  constructor(player1, player2, currentBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = this.player1;
    this.totalMoves = 0;
    this.gameBoard = currentBoard;
  }

  changeTurn() {
    if (this.turn.id === 1) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }

  updateGameBoard(currentBoard) {
    this.gameBoard = currentBoard;
  }

  checkWin() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      if (this.gameBoard[i][0] === this.gameBoard[i][1] && this.gameBoard[i][2] === this.gameBoard[i][0] && this.gameBoard[i][0] !== 0) {
         if(this.gameBoard[i][0] === 1) {
           return 1
         } else {
           return 2
         }
      } else if (this.gameBoard[0][i] === this.gameBoard[1][i] && this.gameBoard[2][i] === this.gameBoard[0][i] && this.gameBoard[0][i] !== 0) {
          if(this.gameBoard[i][0] === 1) {
            return 1
        }  else {
          return 2
        }
      }
    if (this.gameBoard[0][0] === this.gameBoard[1][1] && this.gameBoard[2][2] === this.gameBoard[0][0] && this.gameBoard[0][0] !== 0) {
      if(this.gameBoard[0][0] === 1) {
        return 1
    }  else {
      return 2
     }
   } else if (this.gameBoard[0][2] === this.gameBoard[1][1] && this.gameBoard[2][0] === this.gameBoard[0][2] && this.gameBoard[0][2] !== 0) {
      if(this.gameBoard[0][2] === 1) {
        return 1
    }  else {
      return 2
     }
    }
  }
}

  checkCatsGame() {
    if (this.totalMoves >= 9) {
      return true;
    }
  }

  resetGame() {
    this.totalMoves = 0;
    this.turn = this.player1;
    this.gameBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }

  showWin() {
  startCountDown();
  this.player1.saveWinsToStorage();
  this.player2.saveWinsToStorage();
  setTimeout(this.resetGame, 11 * 1000);
  }
}
