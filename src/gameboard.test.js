import Gameboard from "./gameboard";
import Ship from "./ships";

// if the state of an object changes, tests that passed before the change might
// not pass after the change

/**--------------------- TESTING DUMMY OBJECTS ------------------------------ */
let testGameboard3 = new Gameboard();
test("test dummy objects", () => {
  expect(testGameboard3).toMatchObject({
    availableShips: [
      { name: "Patrol Boat", length: 2, direction: "inX" },
      { name: "Cruiser1", length: 3, direction: "inX" },
      { name: "Cruiser2", length: 3, direction: "inX" },
      { name: "Battleship", length: 4, direction: "inX" },
      { name: "Carrier", length: 5, direction: "inX" },
    ],
  });
});

// test object creation
let testGameboard = new Gameboard();
testGameboard.placeShips([1, 3]);
let testShip = new Ship(2);

/** ------------------ TESTING CALCULATE ----------------------------------- */

// testGameboard hat its direction set to "inX"

test("test calculate illegal move in X-direction", () => {
  expect(testGameboard.calculate([9, 1], 2)).toBe(false);
});

// testGameboard hat its direction set to "inY"
let testGameboard2 = new Gameboard();
testGameboard2.placingDirection = "inY";

test("change placing direction", () => {
  expect(testGameboard2.placingDirection).toBe("inY");
});

test("test calculate illegal move in Y-direction", () => {
  expect(testGameboard2.calculate([1, 9], 2)).toBe(false);
});

test("ship placement in X-Direction", () => {
  expect(testGameboard.calculate([1, 3], 2)).toStrictEqual([
    [1, 3],
    [2, 3],
  ]);
});

test("ship placement in Y-Direction", () => {
  expect(testGameboard2.calculate([1, 3], 2)).toStrictEqual([
    [1, 3],
    [1, 4],
  ]);
});

//** -------------------------- TESTING placeShips() ------------------------ */
// create all ship a player can have with the placeShips() funciton

let gameboardPlaceShips = new Gameboard();

test("test patrol boat", () => {
  expect(gameboardPlaceShips.placeShips([2, 2])).toMatchObject([
    {
      name: "Patrol Boat",
      length: 2,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 2],
        [3, 2],
      ],
    },
  ]);
});

test("test Cruiser1", () => {
  expect(gameboardPlaceShips.placeShips([2, 4])).toMatchObject([
    {
      name: "Patrol Boat",
      length: 2,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 2],
        [3, 2],
      ],
    },
    {
      name: "Cruiser1",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    },
  ]);
});

test("test Cruiser2", () => {
  expect(gameboardPlaceShips.placeShips([2, 6])).toMatchObject([
    {
      name: "Patrol Boat",
      length: 2,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 2],
        [3, 2],
      ],
    },
    {
      name: "Cruiser1",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    },
    {
      name: "Cruiser2",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 6],
        [3, 6],
        [4, 6],
      ],
    },
  ]);
});

test("test battleship", () => {
  expect(gameboardPlaceShips.placeShips([2, 8])).toMatchObject([
    {
      name: "Patrol Boat",
      length: 2,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 2],
        [3, 2],
      ],
    },
    {
      name: "Cruiser1",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    },
    {
      name: "Cruiser2",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 6],
        [3, 6],
        [4, 6],
      ],
    },
    {
      name: "Battleship",
      length: 4,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 8],
        [3, 8],
        [4, 8],
        [5, 8],
      ],
    },
  ]);
});

test("test carrier", () => {
  expect(gameboardPlaceShips.placeShips([2, 10])).toMatchObject([
    {
      name: "Patrol Boat",
      length: 2,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 2],
        [3, 2],
      ],
    },
    {
      name: "Cruiser1",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    },
    {
      name: "Cruiser2",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 6],
        [3, 6],
        [4, 6],
      ],
    },
    {
      name: "Battleship",
      length: 4,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 8],
        [3, 8],
        [4, 8],
        [5, 8],
      ],
    },
    {
      name: "Carrier",
      length: 5,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 10],
        [3, 10],
        [4, 10],
        [5, 10],
        [6, 10],
      ],
    },
  ]);
});

/** -------------------------- TESTING SEARCH ------------------------------- */
test("testing search if shot hits", () => {
  expect(gameboardPlaceShips.searchShips([2, 4])).toMatchObject({
    direction: "inX",
    hitCount: 0,
    isSunk: false,
    length: 3,
    name: "Cruiser1",
  });
});

// test
test("testing search if shot misses", () => {
  expect(gameboardPlaceShips.searchShips([2, 3])).toBe(null);
});

/** -------------------------------TESTING receiveAttack -------------------- */
test.skip("testing receive attack target hit", () => {
  expect(gameboardPlaceShips.receiveAttack([2, 2])).toMatchObject({
    direction: "inX",
    isSunk: false,
    length: 2,
    name: "Patrol Boat",
  });
});

test.skip("testing receive attack target hit", () => {
  expect(gameboardPlaceShips.receiveAttack([3, 2])).toMatchObject({
    direction: "inX",
    isSunk: false,
    hitCount: 2,
    isSunk: true,
    length: 2,
    name: "Patrol Boat",
  });
});

test("testing receive attack missed", () => {
  expect(gameboardPlaceShips.receiveAttack([2, 3])).toBe(null);
});

/** ------------------------------- TESTING deleteShip ---------------------- */
test.skip("delete ship from placedShip array", () => {
  expect(gameboardPlaceShips.deleteShip("Patrol Boat")).toMatchObject([
    // {
    //   name: "Patrol Boat",
    //   length: 2,
    //   direction: "inX",
    //   isSunk: false,
    //   hitCount: 0,
    //   coordinates: [
    //     [2, 2],
    //     [3, 2],
    //   ],
    // },
    {
      name: "Cruiser1",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    },
    {
      name: "Cruiser2",
      length: 3,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 6],
        [3, 6],
        [4, 6],
      ],
    },
    {
      name: "Battleship",
      length: 4,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 8],
        [3, 8],
        [4, 8],
        [5, 8],
      ],
    },
    {
      name: "Carrier",
      length: 5,
      direction: "inX",
      isSunk: false,
      hitCount: 0,
      coordinates: [
        [2, 10],
        [3, 10],
        [4, 10],
        [5, 10],
        [6, 10],
      ],
    },
  ]);
});

/* ----------------------------- TESTING randomShipPlacement() ---------------*/

let ggameBoard = new Gameboard();

test.skip("test random number between 0 and 10 ", () => {
  expect(ggameBoard.randomShips()).toBeLessThan(10);
});
