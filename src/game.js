class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = this.player1;
    this.totalMoves = 0;
    this.gameBoard = [0,0,0
                      0,0,0
                      0,0,0]

  }

  nextTurn() {
    if (this.turn === this.player1) {
      this.turn = player2;
    } else {
      this.turn = player1;
    }
  }

  updateGameBoard(currentBoard) {
    this.gameBoard = currentBoard;
  }

  checkWin(winningBoardsPlayer1, winningBoardsPlayer2) {
    if (winningBoardsPlayer1.includes(this.gameBoard)) {
      this.player1.wins++
      return "Player 1 wins"
    } else if (winningBoardsPlayer2.includes(this.gameBoard)) {
      this.player2.wins++
      return "Player 2 wins"
    }
  }

}
