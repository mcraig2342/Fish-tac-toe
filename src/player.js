class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;

  }

  saveWinsToStorage() {
   localStorage.setItem(this.id, this.wins);
 }

 retrieveWinsFromStorage() {
   localStorage.getItem(this.id);
  }
}
