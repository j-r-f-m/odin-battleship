import { crtNode } from "./domHelper";
import Gameboard from "./gameboard";
import { playerBoard } from "./index";
import crtSidebar from "./screenSidebar";
import { grid } from "./screenGrid";

/**
 * GAME PHASE
 * create placing screen
 * player is supposed to palce his ships during this phase of the game
 */
const screenPlacing = () => {
  console.log(playerBoard);
  // create content container
  const contentContainer = crtNode("#body", "div", "content");
  // create placing grid
  //   const placingGrid = crtNode(".content", "div", "placing-grid");
  grid();

  // create sidebar and display all available ships
  crtSidebar();

  // create rotate button
  const rotateBtn = crtNode(".content", "button", "btn-rotate");
  rotateBtn.textContent = "Rotate Ship";

  rotateBtn.addEventListener("click", () => {
    playerBoard.changePlacingDirection();
    console.log(playerBoard);
  });

  // create reset button
  const resetBtn = crtNode(".content", "button", "btn-reset");
  resetBtn.textContent = "Reset";

  resetBtn.addEventListener("click", () => {
    //cons
    playerBoard.resetGameboard();
    // delete start screen
    contentContainer.remove();
    // create placing screen
    screenPlacing();
  });

  // create start game button
  const startGame = crtNode(".content", "button", "btn-start-game");
  startGame.textContent = "Start Game";
};

export default screenPlacing;
