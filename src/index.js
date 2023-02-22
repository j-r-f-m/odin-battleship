import "./styles.css";
import screenStart from "./screenStart";
import screenPlacing from "./screenPlacing";
import Gameboard from "./gameboard";
import screenGameplay from "./screenGameplay";

// --------------------- initilize objects --------------------------
// create gameboard for player
const playerBoard = new Gameboard("player");

//screenStart();
screenPlacing();
// screenGameplay();

// create ship objects for placement

export { playerBoard };
