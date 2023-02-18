import { crtNode } from "./domHelper";
import Gameboard from "./gameboard";
import { playerBoard } from "./index";
import crtSidebar from "./screenSidebar";
import grid from "./screenGrid";

/**
 * create placing screen
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
};

export default screenPlacing;