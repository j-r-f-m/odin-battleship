import { Ship } from "./ships";

let testShip = new Ship(3);

test("test object creation", () => {
  expect(testShip).toMatchObject({
    length: 3,
    sunk: false,
  });
});

testShip.hit();
testShip.hit();

test("ship gets hit", () => {
  expect(testShip.hits).toBe(2);
});

test("is sunk?", () => {
  expect(testShip.isSunk());
});
