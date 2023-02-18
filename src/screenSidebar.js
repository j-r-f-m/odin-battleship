import { crtNode } from "./domHelper";

/**
 * create the sidebar for the placing screen with all the available ships
 */
const crtSidebar = () => {
  // create sidebar
  const sidebar = crtNode(".content", "div", "sidebar");

  // create boats
  const patrolBoatHeader = crtNode(".sidebar", "div", "patrol-boat-header");
  patrolBoatHeader.textContent = "Patrol Boat";
  const patrolBoat = crtNode(".sidebar", "div", "patrol-boat");

  const cruiser1Header = crtNode(".sidebar", "div", "cruiser-1-header");
  cruiser1Header.textContent = "Cruiser 1";
  const cruiser1 = crtNode(".sidebar", "div", "cruiser-1");

  const cruiser2Header = crtNode(".sidebar", "div", "cruiser-2-header");
  cruiser2Header.textContent = "Cruiser 2";
  const cruiser2 = crtNode(".sidebar", "div", "cruiser-2");

  const battleshipHeader = crtNode(".sidebar", "div", "battleship-header");
  battleshipHeader.textContent = "Battleship";
  const battleship = crtNode(".sidebar", "div", "battleship");

  const carrierHeader = crtNode(".sidebar", "div", "carrier-header");
  carrierHeader.textContent = "Carrier";
  const carrier = crtNode(".sidebar", "div", "carrier");
};

export default crtSidebar;
