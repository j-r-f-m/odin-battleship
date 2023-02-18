import { crtNode } from "./domHelper";

const startScreen = () => {
  // create content container
  const contentContainer = crtNode("#body", "div", "content");
  // create header
  crtNode(".content", "div", "header", "Battleship");
  // player board
  crtNode(".content", "div", "player-board", "Player vs. A.I.");
  // create button
  const startBtn = crtNode(".content", "button", "btn-start", "Start Game");
  startBtn.addEventListener("click", () => {
    // delete start screen
    contentContainer.remove();
    // create placing screen
    console.log("start button");
  });
};

export default startScreen;
