import "./styles.css";
import screenStart from "./screenStart";
import screenPlacing from "./screenPlacing";
import Gameboard from "./gameboard";

// --------------------- initilize objects --------------------------
// create gameboard for player
const playerBoard = new Gameboard("player");

//screenStart();
screenPlacing();
// create ship objects for placement

export { playerBoard };
