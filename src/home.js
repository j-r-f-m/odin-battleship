import { crtNode } from "./domHelper";

const home = () => {
  // create content container
  crtNode("#body", "div", "content");
  // create header
  crtNode(".content", "div", "header", "Battleship");
  // player board
  crtNode(".content", "div", "player-board", "Player vs. A.I.");
  // create button
  const startBtn = crtNode(".content", "button", "btn-start", "Start Game");
  startBtn.addEventListener("click", () => {
    // delete start screen
    // create placing screen
    console.log("start button");
  });
};

export default home;
