// Your solution goes here
const game = {
  lives: 3,
  coins: 0,

  // Getter for points
  get points() {
    return this.coins * 10;
  },

  // Method to subtract 1 from lives if lives > 0
  playerDies() {
    if (this.lives > 0) {
      this.lives -= 1;
    }
  },

  // Method to start a new game
  newGame() {
    this.lives = 3;
    this.coins = 0;
  }
};

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0