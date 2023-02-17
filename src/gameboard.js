// import { Ship } from "./ships";

/**
 * create a ship and pass its length
 * @param {integer} length of ship
 */
function Ship(length, name) {
  this.length = length;
  this.isSunk = false;
  this.hitCount = 0;
  this.direction = "inX";
  this.coordinates = null;
  this.name = name;
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

function Gameboard() {
  /** ----------------------------Properties ----------------------------- */
  // array containing dummy objects that represent all the ships a player has
  // whenever a player places a ship the first element of the array will be removed
  this.availableShips = [
    { name: "Patrol Boat", length: 2, direction: "inX" },
    { name: "Cruiser1", length: 3, direction: "inX" },
    { name: "Cruiser2", length: 3, direction: "inX" },
    { name: "Battleship", length: 4, direction: "inX" },
    { name: "Carrier", length: 5, direction: "inX" },
  ];

  // placed ships
  this.placedShips = [];
  // default placing direction
  this.placingDirection = "inX";
  //
  this.shotsMissed = [];
  this.shotsHit = [];
}

/** ---------------------------------- METHODS ------------------------------ */

/**
 * places a ship on the gameboard starting from the coordinates a player clicked
 * on
 * @param {array} startCoor contians coordinates player clicked on
 * return array with palced ships
 */
Gameboard.prototype.placeShips = function (startCoor) {
  // create instance of ship
  let currShip = new Ship(
    this.availableShips[0].length,
    this.availableShips[0].name
  );
  //   console.log(currShip.hit);
  /**
   * calculates the coordinates the ship occupies
   * if a player clicks on a starting point that would place parts of the ship
   * outside of the board calculate() returns a string
   */
  currShip.coordinates = this.calculate(startCoor, currShip.length);
  // if ship placement is legal place ship and return array with all placed ships
  // if ship placement is illegal reutrn false
  if (currShip.coordinates !== false) {
    this.availableShips.shift();
    this.placedShips.push(currShip);
    return this.placedShips;
  } else if (currShip.coordinates === false) {
    return false;
  }
};

/**
 * depending on the palcingDirection of the gameboard a player can place a ship
 *
 * @param {array} startCoor contains coordinates player clicked on
 * @param {integer} shipLength length of ship that player wants to place
 * @returns array with all coordinates the ship occupies or string that points
 * out that placement is illegal
 */
Gameboard.prototype.calculate = function (startCoor, shipLength) {
  // array that contains all the coordinates the ship occupies
  const shipCoor = [];
  // calculate endpoint of ship that player wants to place
  // check of all parts of the ship will be on the board
  const endPointX = startCoor[0] + shipLength;
  const endPointY = startCoor[1] + shipLength;
  // check for illegal moves
  if (this.placingDirection === "inX" && endPointX > 10) {
    return false;
  } else if (this.placingDirection === "inY" && endPointY > 10) {
    return false;
  } else if (this.placingDirection === "inX") {
    // calculate all coordinates that ship will occupy in X-direction
    for (let i = 0; i < shipLength; i++) {
      let currCoor = [startCoor[0] + i, startCoor[1]];
      shipCoor.push(currCoor);
    }
    return shipCoor;
  } else if (this.placingDirection === "inY") {
    // calculate all coordinates that ship will occupy in Y-direction
    for (let i = 0; i < shipLength; i++) {
      let currCoor = [startCoor[0], startCoor[1] + i];
      shipCoor.push(currCoor);
    }
    return shipCoor;
  }
};

/**
 *
 * @param {array} targetCoor x- and y-coordinates of tile that user fired on
 * @returns ship object that got hit or null if no ship was hit
 */
Gameboard.prototype.searchShips = function (targetCoor) {
  for (let i = 0; i < this.placedShips.length; i++) {
    // coordinate array of current ship object
    let currCoor = this.placedShips[i].coordinates;
    for (let j = 0; j < currCoor.length; j++) {
      // if target hits
      if (
        currCoor[j][0] === targetCoor[0] &&
        currCoor[j][1] === targetCoor[1]
      ) {
        // if target hits a ship return that ship
        return this.placedShips[i];
      }
    }
  }
  // if shot misses
  return null;
};

/**
 * delete ship that was destroyed from placedShip-array
 * @param {string} nameShip name of ship that was destroyed 

 */
Gameboard.prototype.deleteShip = function (nameShip) {
  for (let i = 0; i < this.placedShips.length; i++) {
    if (this.placedShips[i].name === nameShip) {
      this.placedShips.splice(i, 1);
    }
  }
  return this.placedShips;
};

Gameboard.prototype.receiveAttack = function (targetCoor) {
  // search all placed ships for matching coordinates
  let targetHit = this.searchShips(targetCoor);

  if (targetHit === null) {
    // shot missed
    // mark tile in dom with an x
    // push coordinates that missed into an array
    this.shotsMissed.push(targetCoor);
    return null;
  } else {
    // shot hit
    this.shotsHit.push(targetCoor);
    // mark tile in dom
    console.log(targetHit.hit);
    targetHit.hit();
    targetHit.sunk();
    if (targetHit.isSunk === true) {
      // delete ship from placedShip array
      this.deleteShip(targetHit.name);
    }
  }

  if (this.placedShips.length === 0) {
    // end game
  }
  return this.placedShips;
};

let board = new Gameboard();
board.placeShips([2, 2]);
board.placeShips([2, 4]);
board.placeShips([2, 6]);
board.placeShips([2, 8]);
board.placeShips([2, 10]);

board.receiveAttack([2, 2]);
board.receiveAttack([3, 2]);
console.log(board.shotsMissed);
console.log(board.shotsHit);

console.log(board);
// console.log("asdfassadfasdf");

export { Gameboard };
