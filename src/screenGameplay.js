import { playerBoard, aiBoard } from ".";
import { crtNode, crtTile, crtTileGame } from "./domHelper";
import screenPlacing from "./screenPlacing";

/**
 * create screen for gamepaly
 * create two grids
 * 1. grid:
 *  - represent gameboard of player
 *  - the positions of the players ships are shown
 *  - the missed shots from enemy player are shown
 * 2. grid:
 *  - represent gameboard of ai
 *  - the positions of the ai's ships are shown
 *  - the missed shots from enemy player are shown
 *
 */
const screenGameplay = () => {
  console.log(playerBoard);
  console.log(aiBoard);

  // create content container
  const contentContainer = crtNode("#body", "div", "content-gameplay");
  contentContainer.setAttribute("id", "content-container");
  // create container for player interface
  const playerGrid = crtNode(
    ".content-gameplay",
    "div",
    "grid-container-player"
  );

  // create name plate for palyer
  const playerNamePlate = crtNode(
    ".content-gameplay",
    "div",
    "player-name-plate"
  );

  // create name plate for ai
  playerNamePlate.textContent = "Player";
  createTilesPlayer("player", 1);
  placeShipsDomPlayer();

  // create ai interface
  const playerAi = crtNode(".content-gameplay", "div", "grid-container-ai");
  const aiNamePlate = crtNode(".content-gameplay", "div", "ai-name-plate");
  aiNamePlate.textContent = "A.I.";
  createTilesAi("ai", 2);
  placeShipsDomAi();
};

/**
 * create tiles for the grid of  the ai
 * pass owner und correesponfing number
 * @param {string} nameOwner name of owner of tiles -> player or tile
 * @param {int} numOwner number corresponding to  tiles in dom
 */
const createTilesPlayer = (nameOwner, numOwner) => {
  // create a 10x10 x-y-grid using two loops to calculate the coordinates for
  // each tile
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let currTile = crtTileGame(
        `.grid-container-${nameOwner}`,
        "div",
        `x${numOwner}:${j}y${numOwner}:${k}`,
        `tile-${nameOwner}`
      );
    }
  }
};

/**
 * create tiles for the grid of  the ai
 * pass owner und correesponfing number
 * @param {string} nameOwner name of owner of tiles -> player or tile
 */
const createTilesAi = (nameOwner, numOwner) => {
  // create a 10x10 x-y-grid using two loops to calculate the coordinates for
  // each tile
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let currTile = crtTileGame(
        `.grid-container-${nameOwner}`,
        "div",
        `x${numOwner}:${j}y${numOwner}:${k}`,
        `tile-${nameOwner}`
      );

      // fireShot
      currTile.addEventListener("click", fireShot);
    }
  }
};

function fireShot(e) {
  // extract coordinates from string
  let coorString = e.target.classList[0];

  const allContentCon = document.getElementById("content-container");

  let winnerBtn = null;
  let replayBtn = null;

  let coorArr = [parseInt(coorString[3]), parseInt(coorString[7])];

  // check if coordinate is occupied by a ship
  let hit = aiBoard.receiveAttack(coorArr);
  // console.log(hit);
  if (hit === true) {
    // mark hit on dom
    e.target.style.backgroundColor = "red";
  } else if (hit === false) {
    // mark miss on dom
    e.target.style.backgroundColor = "blue";
  } else if (hit === "gameover player wins") {
    console.log("gameover player wins");
    e.target.style.backgroundColor = "red";
    // create winner message
    winnerBtn = crtNode(".content-gameplay", "div", "btn-winner");
    winnerBtn.textContent = "YOU WIN";

    replayBtn = crtNode(".content-gameplay", "button", "btn-replay");
    replayBtn.textContent = "Replay";

    replayBtn.addEventListener("click", () => {
      // delete start screen
      allContentCon.remove();
      // create placing screen
      screenPlacing();
      playerBoard.resetGameboard();
      aiBoard.availableShips.length = 0;
      aiBoard.placedShips = aiBoard.aiShipPlacement(); //
    });

    deletAllEventsGameplayScreen();
  }
  // remove eventlistener
  e.target.removeEventListener("click", fireShot);

  /** ------------------- ai attack------------------------- */
  const aiAttackCoor = randomAiAttack();
  // aiBoard.shotsMissed.push(aiAttackCoor);

  // turn coordinates array into coordinate string class name
  const coorStr = `x1:${aiAttackCoor[0]}y1:${aiAttackCoor[1]}`;

  let hitAi = playerBoard.receiveAttack(aiAttackCoor);

  let tileAttckPlayerGrid = document.getElementsByClassName(coorStr);

  if (hitAi === true) {
    tileAttckPlayerGrid[0].style.backgroundColor = "red";
  } else if (hitAi === false) {
    tileAttckPlayerGrid[0].style.backgroundColor = "blue";
  } else if (hit === "gameover ai wins") {
    tileAttckPlayerGrid[0].style.backgroundColor = "red";
    winnerBtn = crtNode(".content-gameplay", "div", "btn-winner");
    winnerBtn.textContent = "YOU LOOSE";

    replayBtn = crtNode(".content-gameplay", "button", "btn-replay");
    replayBtn.textContent = "Replay";

    replayBtn.addEventListener("click", () => {
      // delete start screen
      allContentCon.remove();
      // create placing screen
      screenPlacing();
      playerBoard.resetGameboard();
      aiBoard.availableShips.length = 0;
      aiBoard.placedShips = aiBoard.aiShipPlacement(); //
    });

    deletAllEventsGameplayScreen();
  }
}

/**
 * attack player at random coordinate
 * @returns array with x-y-coordinate where the ai wants to attack
 */
const randomAiAttack = () => {
  let randX = Math.floor(Math.random() * 10);
  let randY = Math.floor(Math.random() * 10);

  let coorArr = [randX, randY];

  return coorArr;
};

/**
 * check if all shipt are placed
 * if all ships are placed remove all eventlisteners
 * @param {int} lenghtSipArr length of availableShipsArray
 */
const deletAllEventsGameplayScreen = () => {
  //

  const parent = document.getElementsByClassName("grid-container-ai");

  for (const child of parent[0].children) {
    child.removeEventListener("click", fireShot);
  }
};

/**
 *place ships of player in dom
 */
const placeShipsDomPlayer = () => {
  const placedShipsArr = playerBoard.placedShips;
  // console.log(placedShipsArr);
  for (let i = 0; i < placedShipsArr.length; i++) {
    const currShipArr = playerBoard.placedShips[i].coordinates;
    // console.log(playerBoard.placedShips[i].coordinates);
    for (let j = 0; j < currShipArr.length; j++) {
      // console.log(playerBoard.placedShips[i].coordinates[j]);

      let stringHelp = `x1:${currShipArr[j][0]}y1:${currShipArr[j][1]}`;
      let currTile = document.getElementsByClassName(stringHelp);
      currTile[0].classList.add("ship");
      currTile[0].style.backgroundColor = "black";
    }
  }
};

/**
 * place ships of ai in dom
 * only for testing purposes
 * I do not want the palyer to see the ships
 */
/* const placeShipsDomAi = () => {
  const placedShipsArr = aiBoard.placedShips;
  // console.log(placedShipsArr);
  for (let i = 0; i < placedShipsArr.length; i++) {
    const currShipArr = aiBoard.placedShips[i].coordinates;
    // console.log(playerBoard.placedShips[i].coordinates);
    for (let j = 0; j < currShipArr.length; j++) {
      // console.log(playerBoard.placedShips[i].coordinates[j]);

      let stringHelp = `x2:${currShipArr[j][0]}y2:${currShipArr[j][1]}`;
      let currTile = document.getElementsByClassName(stringHelp);
      currTile[0].classList.add("ship");
      currTile[0].style.backgroundColor = "black";
      // give tile name of ship
      currTile[0].setAttribute("id", aiBoard.placedShips[i].name);
    }
  }
}; */

export default screenGameplay;
