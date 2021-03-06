class Game {
  constructor(player1, player2, currentBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = this.player1;
    this.totalMoves = 0;
    this.gameBoard = currentBoard;
  }

  changeTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }

  updateGameBoard(currentBoard) {
    this.gameBoard = currentBoard;
  }

  checkWinPlayer1() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      if (this.gameBoard[i][0] === 1 && this.gameBoard[i][1] === 1 && this.gameBoard[i][2] === 1) {
        return "Player 1 wins";
      } else if (this.gameBoard[0][i] === 1 && this.gameBoard[1][i] === 1 && this.gameBoard[2][i] === 1) {
        return "Player 1 wins";
      }
    }
    if (this.gameBoard[0][0] === 1 && this.gameBoard[1][1] === 1 && this.gameBoard[2][2] === 1) {
      return "Player 1 wins";
    } else if (this.gameBoard[0][2] === 1 && this.gameBoard[1][1] === 1 && this.gameBoard[2][0] === 1) {
      return "Player 1 wins";
    }
  }

  checkWinPlayer2() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      if (this.gameBoard[i][0] === 2 && this.gameBoard[i][1] === 2 && this.gameBoard[i][2] === 2) {
        return "Player 2 wins";
      } else if (this.gameBoard[0][i] === 2 && this.gameBoard[1][i] === 2 && this.gameBoard[2][i] === 2) {
        return "Player 2 wins";
      }
    }
    if (this.gameBoard[0][0] === 2 && this.gameBoard[1][1] === 2 && this.gameBoard[2][2] === 2) {
      return "Player 2 wins";
    } else if (this.gameBoard[0][2] === 2 && this.gameBoard[1][1] === 2 && this.gameBoard[2][0] === 2) {
      return "Player 2 wins";
    }
  }
  checkCatsGame() {
    if (this.totalMoves >= 9) {
      return "Cats game";
    }
  }

  resetGame() {
    this.totalMoves = 0;
    this.turn = this.player1;
    this.gameBoard = [
      [0, 0, 0]
      [0, 0, 0]
      [0, 0, 0]
    ];
  }
}
