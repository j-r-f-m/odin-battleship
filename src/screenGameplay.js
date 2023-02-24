import { playerBoard, aiBoard } from ".";
import { crtNode, crtTile } from "./domHelper";

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
  // create player interface
  const playerGrid = crtNode(
    ".content-gameplay",
    "div",
    "grid-container-player"
  );

  const playerNamePlate = crtNode(
    ".content-gameplay",
    "div",
    "player-name-plate"
  );
  playerNamePlate.textContent = "Player";
  createTiles("player");
  placeShipsDom();

  // create ai interface
  const playerAi = crtNode(".content-gameplay", "div", "grid-container-ai");
  const aiNamePlate = crtNode(".content-gameplay", "div", "ai-name-plate");
  aiNamePlate.textContent = "A.I.";
  createTiles("ai");
};

/**
 * create tiles for the grid of the player or the ai
 * pass player or ai
 * @param {string} nameOwner name of owner of tiles -> player or tile
 */
const createTiles = (nameOwner) => {
  // create a 10x10 x-y-grid using two loops to calculate the coordinates for
  // each tile
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let currTile = crtTile(
        `.grid-container-${nameOwner}`,
        "div",
        `x:${j}y:${k}`,
        `tile-${nameOwner}`
      );

      //   // create projection of ship
      //   currTile.addEventListener("mouseenter", eventProjection);

      //   // delete projection of ship
      //   currTile.addEventListener("mouseleave", eventDeleteProjection);

      //   // place ship by clicking
      //   currTile.addEventListener("click", eventPlaceShip);
    }
  }
};

const placeShipsDom = () => {
  const placedShipsArr = playerBoard.placedShips;
  // console.log(placedShipsArr);
  for (let i = 0; i < placedShipsArr.length; i++) {
    const currShipArr = playerBoard.placedShips[i].coordinates;
    // console.log(playerBoard.placedShips[i].coordinates);
    for (let j = 0; j < currShipArr.length; j++) {
      // console.log(playerBoard.placedShips[i].coordinates[j]);

      let stringHelp = `x:${currShipArr[j][0]}y:${currShipArr[j][1]}`;
      let currTile = document.getElementById(stringHelp);
      currTile.classList.add("ship");
      currTile.style.backgroundColor = "black";
    }
  }
};

export default screenGameplay;
