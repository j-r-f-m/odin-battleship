import { playerBoard } from "./index";
import {
  eventProjection,
  eventDeleteProjection,
  eventPlaceShip,
} from "./screenGrid";

/**
 * select a parent dom-element create a dom-element and append the created
 * element
 * @param {string} parent select parent using css selector
 * @param {string} typeOfEle type of dom element
 * @param {string} nameClass class name
 * @param {string} txt text contetn
 *
 */
const crtNode = (parent, typeOfEle, nameClass, txt) => {
  // select parent
  const parentEle = document.querySelector(parent);
  // create element
  const crtEle = document.createElement(typeOfEle);
  crtEle.className = nameClass;
  //   crtEle.textContent = txt;
  // append created element
  parentEle.appendChild(crtEle);
  return crtEle;
};

/**
 * create a grid tile
 * @param {string} parent select parent using css selector
 * @param {string} typeOfEle type of dom element
 * @param {string} nameId id name
 * @param {string} nameClass class name
 * @returns created dom element
 */
const crtTile = (parent, typeOfEle, nameId, nameClass) => {
  // select parent
  const parentEle = document.querySelector(parent);
  // create element
  const crtEle = document.createElement(typeOfEle);
  crtEle.setAttribute("id", nameId);
  crtEle.className = nameClass;
  //   crtEle.className = coorClass;

  // append created element
  parentEle.appendChild(crtEle);
  return crtEle;
};

/**
 * extract x-y-coordinates from id-string of a tile
 * @param {string} string get a string containing the x-y-coordinates of a tile
 * @returns array [x,y]
 */
const getCoor = (string) => {
  return [parseInt(string[2]), parseInt(string[5])];
};

/**
 *show possible location of ship if mouse hover over a tile
 * @param {array} shipCoor array with x-y-coordinates of possible ship location
 */
const projectingShip = (shipCoor) => {
  for (let i = 0; i < shipCoor.length; i++) {
    // turn current [x,y] array into a string containing the coordinates
    let stringHelp = `x:${shipCoor[i][0]}y:${shipCoor[i][1]}`;
    // give tile id with created string
    let currTile = document.getElementById(stringHelp);
    console.log(currTile.classList);
    if (currTile.classList.contains("ship")) {
      //
    } else {
      currTile.style.backgroundColor = "yellow";
    }
  }
};

/**
 * delte projection of ship by turning the tiles the ship is projected upon
 * to lightblue again
 * @param {array} shipCoor array with x-y-coordinates for tiles that need to
 * change its color
 */
const deleteProjection = (shipCoor) => {
  for (let i = 0; i < shipCoor.length; i++) {
    // turn current [x,y] array into an id-string
    let stringHelp = `x:${shipCoor[i][0]}y:${shipCoor[i][1]}`;
    let currTile = document.getElementById(stringHelp);

    if (currTile.classList.contains("ship")) {
    } else {
      currTile.style.backgroundColor = "lightblue";
    }
  }
};

const placeShipOnBoard = (coor, length) => {
  // console.log(coor);
  // calculate location of ship
  const shipCoor = calculate(coor, length);

  for (let i = 0; i < shipCoor.length; i++) {
    // turn current [x,y] array into a string containing the coordinates
    let stringHelp = `x:${shipCoor[i][0]}y:${shipCoor[i][1]}`;
    let currTile = document.getElementById(stringHelp);
    //
    currTile.classList.add("ship");
    currTile.style.backgroundColor = "black";
  }
};

const removeEventsFromTiles = (coor, length) => {
  //console.log("remove");
  const shipCoor = calculate(coor, length);
  //console.log(shipCoor);
  for (let i = 0; i < shipCoor.length; i++) {
    //console.log(i);
    // turn current [x,y] array into an id-string
    let stringHelp = `x:${shipCoor[i][0]}y:${shipCoor[i][1]}`;
    let currTile = document.getElementById(stringHelp);
    console.log(currTile);
    currTile.removeEventListener("mouseenter", eventProjection);
    currTile.removeEventListener("mouseleave", eventDeleteProjection);
    currTile.removeEventListener("click", eventPlaceShip);
  }
};

/**
 * Same function as in gameboard.js i want it to be separete from the
 * objects since it is used for dom manipulation
 *
 * calculate all positions the ship will occupy
 * @param {array} startCoor containg x-y-coordinates of starting point of ship
 * @param {int} shipLength length of ship
 * @returns array with all the coordinates the ship occupies
 */
const calculate = function (startCoor, shipLength) {
  //console.log(startCoor);
  // array that contains all the coordinates the ship occupies
  const shipCoor = [];
  // calculate endpoint of ship that player wants to place
  // check of all parts of the ship will be on the board
  const endPointX = startCoor[0] + shipLength - 1;
  const endPointY = startCoor[1] + shipLength - 1;
  // check for illegal moves
  if (playerBoard.placingDirection === "inX" && endPointX > 9) {
    return false;
  } else if (playerBoard.placingDirection === "inY" && endPointY > 9) {
    return false;
  } else if (playerBoard.placingDirection === "inX") {
    // calculate all coordinates that ship will occupy in X-direction
    for (let i = 0; i < shipLength; i++) {
      let currCoor = [startCoor[0] + i, startCoor[1]];
      shipCoor.push(currCoor);
    }
    //console.log("x");
    return shipCoor;
  } else if (playerBoard.placingDirection === "inY") {
    // calculate all coordinates that ship will occupy in Y-direction
    for (let i = 0; i < shipLength; i++) {
      let currCoor = [startCoor[0], startCoor[1] + i];
      shipCoor.push(currCoor);
    }
    console.log("shipCoor");
    console.log(shipCoor);
    return shipCoor;
  }
};

export {
  crtNode,
  crtTile,
  getCoor,
  projectingShip,
  deleteProjection,
  placeShipOnBoard,
  removeEventsFromTiles,
};
