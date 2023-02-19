import {
  crtNode,
  crtTile,
  getCoor,
  projectingShip,
  deleteProjection,
  placeShipOnBoard,
  removeEventsFromTiles,
} from "./domHelper";
import { playerBoard } from "./index";

/**
 * create a 10x10 grid using x-y-coordinates
 */
const grid = () => {
  // create grid-container
  const gridDom = crtNode(".content", "div", "grid-container");

  // create a 10x10 x-y-grid using two loops to calculate the coordinates for
  // each tile
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let currTile = crtTile(".grid-container", "div", `x:${j}y:${k}`, "tile");

      // create projection of ship
      currTile.addEventListener("mouseenter", eventProjection);

      // delete projection of ship
      currTile.addEventListener("mouseleave", eventDeleteProjection);

      // place ship by clicking
      currTile.addEventListener("click", eventPlaceShip);
    }
  }
};

function eventPlaceShip(e) {
  //console.log(event.target);
  const currCoor = getCoor(e.target.id);
  // mark ships on dom
  placeShipOnBoard(currCoor, playerBoard.availableShips[0].length);

  // save length of current ship before it gets deleted from available ships
  //array
  let currLengthShip = playerBoard.availableShips[0].length;

  // place ship in gameboard object
  playerBoard.placeShips(currCoor);
  //
  //console.log(e.target);
  removeEventsFromTiles(currCoor, currLengthShip);
}

function eventDeleteProjection(e) {
  // console.log(event.target.id);
  // get coordinates mouse is hovering over from the tile's id
  // turn the string into an array [x,y]
  const currCoor = getCoor(e.target.id);
  // calculate the coordinates of the tiles the ship is going to occupy
  const shipCoor = playerBoard.calculate(
    currCoor,
    playerBoard.availableShips[0].length
  );
  deleteProjection(shipCoor);
}

function eventProjection(e) {
  // get coordinates mouse is hovering over from the tile's id
  // turn the string into an array [x,y]
  const currCoor = getCoor(e.target.id);
  // console.log(currCoor);

  // calculate the coordinates of the tiles the ship is going to occupy
  const shipCoor = playerBoard.calculate(
    currCoor,
    playerBoard.availableShips[0].length
  );
  // console.log(shipCoor);
  // change color of tiles the ship is going to occupy if player clicks
  // tile the mouse is hovering over
  projectingShip(shipCoor);
}

export { grid, eventProjection, eventDeleteProjection, eventPlaceShip };
