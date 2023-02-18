import { Gameboard } from "./gameboard";

// Exporting the constructor function did not export the pbject methods need some fix

/**
 * create a ship and pass its length
 * @param {integer} length of ship
 */
export function Ship(length, name) {
  this.length = length;
  this.isSunk = false;
  this.hitCount = 0;
  this.direction = "inX";
  this.coordinates = null;
  this.name = name;

  this.hit = function () {
    this.hitCount = this.hitCount + 1;
  };
  this.sunk = function () {
    if (this.hitCount >= this.length) {
      this.isSunk = true;
    }
  };
}

/** ------------- I COULD NOT MAKE DEFINING FUNTIONS ON PROTOTYPE WORK -------*/

// /**
//  * increase hitcount
//  */
// Ship.prototype.hit = function () {
//   this.hitCount = this.hitCount + 1;
// };

// /**
//  * checks if boat has sunk
//  */
// Ship.prototype.sunk = function () {
//   if (this.hitCount >= this.length) {
//     this.isSunk = true;
//   }
// };

// ---------------- TEST ----------------------

// let testShip = new Ship(2);
// console.log(testShip.hit);

// let testGameboard = new Gameboard();
// let test = testGameboard.calculate([1, 3], 2);
// console.log(test);
