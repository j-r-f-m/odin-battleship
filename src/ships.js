function Ship(length) {
  this.length = length;
  this.sunk = false;
  this.hits = 0;
}

Ship.prototype.hit = function () {
  this.hits = this.hits + 1;
};

Ship.prototype.isSunk = function () {
  if (this.hits >= this.length) {
    this.sunk = true;
  }
};

// ---------------- TEST ----------------------
const testShip = new Ship(3, false);
console.log(testShip);
testShip.hit();
testShip.hit();
console.log(testShip);

export { Ship };
