class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];

  }

  saveWinsToStorage() {
   localStorage.setItem(this.id, this.wins);
 }

 retrieveWinsFromStorage() {
   localStorage.getItem(this.id);
  }
}
