/**
 * create a ship and pass its length
 * @param {integer} length of ship
 */
function Ship(length) {
  this.length = length;
  this.isSunk = false;
  this.hitCount = 0;
}

/**
 * increase hitcount
 */
Ship.prototype.hit = function () {
  this.hitCount = this.hitCount + 1;
};

/**
 * checks if boat has sunk
 */
Ship.prototype.sunk = function () {
  if (this.hitCount >= this.length) {
    this.isSunk = true;
  }
};

// ---------------- TEST ----------------------

let testArr = [];
console.log(testArr[0]);

export { Ship };
