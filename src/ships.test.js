import { Ship } from "./ships";

// if the state of an object changes, tests that passed before the change might
// not pass after the change

// test object creation
let testShip = new Ship(3);
let testShip2 = new Ship(3);

//
test("test object creation", () => {
  expect(testShip2).toMatchObject({
    length: 3,
    isSunk: false,
  });
});

// is sunk()-function -> false
test("is sunk?", () => {
  expect(testShip2).toMatchObject({ isSunk: false });
});

// test hit()-function
testShip.hit();
testShip.hit();
testShip.hit();

test("ship gets hit", () => {
  expect(testShip).toMatchObject({ hitCount: 3 });
});

testShip.sunk();
// is sunk()-function -> true
test("is sunk?", () => {
  expect(testShip).toMatchObject({ isSunk: true });
});
