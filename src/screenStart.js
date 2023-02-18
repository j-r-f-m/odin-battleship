import { crtNode } from "./domHelper";
import screenPlacing from "./screenPlacing";
import Gameboard from "./gameboard";

/**
 * create starting screen
 */
const screenStart = () => {
  // create content container
  const contentContainer = crtNode("#body", "div", "content");
  // create header
  const header = crtNode(".content", "div", "header");
  header.textContent = "Battleship";

  // player board
  const adversariesBoard = crtNode(".content", "div", "adversaries");
  adversariesBoard.textContent = "Player vs. A.I.";
  // create button
  const startBtn = crtNode(".content", "button", "btn-start");
  startBtn.textContent = "Start Game";

  startBtn.addEventListener("click", () => {
    // delete start screen
    contentContainer.remove();
    // create placing screen
    screenPlacing();
  });
};

export default screenStart;
