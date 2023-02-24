import "./styles.css";
import screenStart from "./screenStart";
import screenPlacing from "./screenPlacing";
import Gameboard from "./gameboard";
import screenGameplay from "./screenGameplay";

// --------------------- initilize objects --------------------------
// create gameboard for player
const playerBoard = new Gameboard("player");
const aiBoard = new Gameboard("ai");
aiBoard.availableShips.length = 0;
aiBoard.placedShips = aiBoard.aiShipPlacement();
// console.log(aiBoard.availableShips);
//screenStart();
// screenPlacing();
screenGameplay();

// create ship objects for placement

export { playerBoard, aiBoard };
