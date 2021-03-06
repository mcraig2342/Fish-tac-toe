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
}
