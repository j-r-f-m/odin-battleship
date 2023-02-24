import Ship from "./ships";

function Gameboard(owner) {
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
  // owner of board
  this.owner = owner;
  // placed ships
  this.placedShips = [];
  // default placing direction
  this.placingDirection = "inX";
  //
  this.shotsMissed = [];
  this.shotsHit = [];

  /**
   * places a ship on the gameboard starting from the coordinates a player clicked
   * on
   * @param {array} startCoor contians coordinates player clicked on
   * return array with palced ships
   */
  this.placeShips = function (startCoor) {
    // console.log("place ship");
    // create instance of ship
    let currShip = new Ship(
      this.availableShips[0].length,
      this.availableShips[0].name
    );
    //   console.log(currShip.hit);
    /**
     * calculates the coordinates the ship occupies
     * if a player clicks on a starting point that would place parts of the ship
     * outside of the board calculate() returns a false
     */
    currShip.coordinates = this.calculate(startCoor, currShip.length);
    // check for collision

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
   * calculate all positions the ship will occupy
   * @param {array} startCoor containg x-y-coordinates of starting point of ship
   * @param {int} shipLength length of ship
   * @returns array with all the coordinates the ship occupies
   */
  this.calculate = function (startCoor, shipLength) {
    // console.log(startCoor);
    // array that contains all the coordinates the ship occupies
    const shipCoor = [];
    // calculate endpoint of ship that player wants to place
    // check if all parts of the ship will be on the board
    const endPointX = startCoor[0] + shipLength - 1;
    const endPointY = startCoor[1] + shipLength - 1;
    // check for illegal moves -> part of ship outside of board
    if (this.placingDirection === "inX" && endPointX > 9) {
      return false;
    } else if (this.placingDirection === "inY" && endPointY > 9) {
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
  this.searchShips = function (targetCoor) {
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
  this.deleteShip = function (nameShip) {
    for (let i = 0; i < this.placedShips.length; i++) {
      if (this.placedShips[i].name === nameShip) {
        this.placedShips.splice(i, 1);
      }
    }
    return this.placedShips;
  };

  this.receiveAttack = function (targetCoor) {
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

  /**
   * change placing direction
   */
  this.changePlacingDirection = function () {
    if (this.placingDirection === "inX") {
      this.placingDirection = "inY";
    } else if (this.placingDirection === "inY") {
      this.placingDirection = "inX";
    }
    console.log("rotateShip");
  };

  /**
   * reset Gameboard so palyer can replace his ships
   */
  this.resetGameboard = function () {
    this.availableShips = [
      { name: "Patrol Boat", length: 2, direction: "inX" },
      { name: "Cruiser1", length: 3, direction: "inX" },
      { name: "Cruiser2", length: 3, direction: "inX" },
      { name: "Battleship", length: 4, direction: "inX" },
      { name: "Carrier", length: 5, direction: "inX" },
    ];
    this.placedShips.length = 0;
    this.placingDirection = "inX";
  };

  this.aiShipPlacement = function () {
    // array that will hold different placesShips array
    let globalArr = [];
    const placement1 = this.aiPlacedShips1();
    globalArr.push(placement1);
    const placement2 = this.aiPlacedShips2();
    globalArr.push(placement2);
    const placement3 = this.aiPlacedShips3();
    globalArr.push(placement3);

    const randNum = Math.floor(Math.random() * 3);
    return globalArr[randNum];
  };

  this.aiPlacedShips1 = function () {
    let shipsArr = [];
    let patrolBoat = new Ship(2, "Patrol Boat");
    patrolBoat.coordinates = [
      [6, 0],
      [6, 1],
    ];
    shipsArr.push(patrolBoat);

    let cruiser1 = new Ship(3, "Cruiser1");
    cruiser1.coordinates = [
      [1, 5],
      [2, 5],
      [3, 5],
    ];
    shipsArr.push(cruiser1);

    let cruiser2 = new Ship(3, "Cruiser1");
    cruiser2.coordinates = [
      [6, 7],
      [7, 7],
      [8, 7],
    ];
    shipsArr.push(cruiser2);

    let battleship = new Ship(4, "Battleship");
    battleship.coordinates = [
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ];
    shipsArr.push(battleship);

    let carrier = new Ship(5, "Carrier");
    carrier.coordinates = [
      [0, 8],
      [1, 8],
      [2, 8],
      [3, 8],
      [4, 8],
    ];
    shipsArr.push(carrier);
    return shipsArr;
  };

  this.aiPlacedShips2 = function () {
    let shipsArr = [];
    let patrolBoat = new Ship(2, "Patrol Boat");
    patrolBoat.coordinates = [
      [0, 0],
      [1, 0],
    ];
    shipsArr.push(patrolBoat);

    let cruiser1 = new Ship(3, "Cruiser1");
    cruiser1.coordinates = [
      [5, 1],
      [6, 1],
      [7, 1],
    ];
    shipsArr.push(cruiser1);

    let cruiser2 = new Ship(3, "Cruiser1");
    cruiser2.coordinates = [
      [5, 7],
      [5, 8],
      [5, 9],
    ];
    shipsArr.push(cruiser2);

    let battleship = new Ship(4, "Battleship");
    battleship.coordinates = [
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
    ];
    shipsArr.push(battleship);

    let carrier = new Ship(5, "Carrier");
    carrier.coordinates = [
      [8, 5],
      [8, 6],
      [8, 7],
      [8, 8],
      [8, 9],
    ];
    shipsArr.push(carrier);
    console.log(shipsArr);
    return shipsArr;
  };

  this.aiPlacedShips3 = function () {
    let shipsArr = [];
    let patrolBoat = new Ship(2, "Patrol Boat");
    patrolBoat.coordinates = [
      [3, 0],
      [3, 1],
    ];
    shipsArr.push(patrolBoat);

    let cruiser1 = new Ship(3, "Cruiser1");
    cruiser1.coordinates = [
      [4, 4],
      [4, 5],
      [4, 6],
    ];
    shipsArr.push(cruiser1);

    let cruiser2 = new Ship(3, "Cruiser1");
    cruiser2.coordinates = [
      [0, 9],
      [1, 9],
      [2, 9],
    ];
    shipsArr.push(cruiser2);

    let battleship = new Ship(4, "Battleship");
    battleship.coordinates = [
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
    ];
    shipsArr.push(battleship);

    let carrier = new Ship(5, "Carrier");
    carrier.coordinates = [
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
      [9, 4],
    ];
    shipsArr.push(carrier);
    console.log(shipsArr);
    return shipsArr;
  };

  /**
   *create a random direction
   * @returns "inX" or "inY"
   */
  // this.randomDirection = function () {
  //   let directionArr = ["inX", "inY"];
  //   let ranNumber = Math.floor(Math.random() * 2);

  //   return directionArr[ranNumber];
  // };

  /**
   *
   * @param {int} max upper border
   * @returns int between 0 and max excluding max
   */
  // this.getRandomInt = function (max) {
  //   return Math.floor(Math.random() * max);
  // };

  // this.randomShips = function () {
  //   let initDirection = this.randomDirection();
  //   // create random number between 0 and 10 excluding 10
  //   let initRandX = this.getRandomInt(10);
  //   let initRandY = this.getRandomInt(10);
  //   console.log(initRandX);
  //   console.log(initRandY);
  //   // create patrol boat
  //   let shipStr = this.randomPatrolBoat(initRandX, initRandY, initDirection);
  //   console.log(shipStr);

  //   let counter = shipStr.length;
  //   console.log(counter);

  // while (counter <= 32) {
  //   // create randomd irection
  //   let direction = this.randomDirection();
  //   let randX = this.getRandomInt(10);
  //   let randY = this.getRandomInt(10);

  //   // make sure ship stay on board by calculating endpoint

  //   // create cruiser 1
  //   if (shipStr.length === 8) {
  //     let cruiser1 = this.randomCruiser(randX, randY, direction, shipStr);
  //     if (cruiser1 === false) {
  //       counter = shipStr.length;
  //       continue;
  //     } else {
  //       shipStr += cruiser1;
  //       console.log(shipStr);
  //       console.log(shipStr.length);
  //     }
  //   }

  //   if (shipStr.length === 20) {
  //     let cruiser2 = this.randomCruiser(randX, randY, direction, shipStr);
  //     if (cruiser2 === false) {
  //       counter = shipStr.length;
  //       continue;
  //     } else {
  //       shipStr += cruiser2;
  //       console.log(shipStr);
  //     }
  //   }

  //   counter = shipStr.length;
  // }
  // };

  /**
   * create a string containing the coordinates of a patrol boat
   * @param {int} coorX x-coordinate
   * @param {int} coorY y-coordinate
   * @param {str} direction "inY" or "inX"
   * @returns string containing coordinates of patrol boat
   */
  // this.randomPatrolBoat = function (coorX, coorY, direction) {
  //   if (direction === "inX") {
  //     return `x${coorX}y${coorY}x${coorX + 1}y${coorY}`;
  //   } else if (direction === "inY") {
  //     return `x${coorX}y${coorY}x${coorX}y${coorY + 1}`;
  //   }
  // };

  /**
   * create a string containing the coordinates of a cruiser
   * @param {int} coorX x-coordinate
   * @param {int} coorY y-coordinate
   * @param {str} direction "inX" or "inY"
   * @param {str} shipStrCoor string containing all the valid coordinates
   * @returns return string containing the coordinates of a cruiser or false
   * if coordinates are already taken by another ship
   */
  // this.randomCruiser = function (coorX, coorY, direction, shipStrCoor) {
  //   // create cruiser 1

  //   let currStr1 = "";
  //   let currStr2 = "";
  //   let currStr3 = "";
  //   if (direction === "inX") {
  //     currStr1 = `x${coorX}y${coorY}`;
  //     if (shipStrCoor.includes(currStr1)) {
  //       return false;
  //     }

  //     currStr2 = `x${coorX + 1}y${coorY}`;
  //     if (shipStrCoor.includes(currStr2)) {
  //       return false;
  //     }

  //     currStr3 = `x${coorX + 2}y${coorY}`;
  //     if (shipStrCoor.includes(currStr3)) {
  //       return false;
  //     }

  //     return currStr1 + currStr2 + currStr3;
  //   }
  //   if (direction === "inY") {
  //     currStr1 = `x${coorX}y${coorY}`;
  //     if (shipStrCoor.includes(currStr1)) {
  //       return false;
  //     }

  //     currStr2 = `x${coorX}y${coorY + 1}`;
  //     if (shipStrCoor.includes(currStr2)) {
  //       return false;
  //     }

  //     currStr3 = `x${coorX}y${coorY + 2}`;
  //     if (shipStrCoor.includes(currStr3)) {
  //       return false;
  //     }

  //     return currStr1 + currStr2 + currStr3;
  //   }
  // };
}

export default Gameboard;

/** ---------------------------------- METHODS ------------------------------ */
// const testAiGamebaord = new Gameboard();
// testAiGamebaord.availableShips.length = 0;
// testAiGamebaord.placedShips = testAiGamebaord.aiShipPlacement();
// const golbArr = testAiGamebaord.aiShipPlacement();
// console.log(testAiGamebaord);
// console.log(golbArr);
