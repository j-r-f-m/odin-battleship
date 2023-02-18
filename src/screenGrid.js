import { crtNode, crtTile } from "./domHelper";
const grid = () => {
  // create grid-container
  const gridDom = crtNode(".content", "div", "grid-container");

  for (let i = 0; i < 100; i++) {
    let currTile = crtTile(".grid-container", "div", `tile-${i}`, "tile");
    currTile.addEventListener("click", () => {
      console.log("click");
    });
  }
};

export default grid;
