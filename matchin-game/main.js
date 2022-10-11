
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/settings/elements/base.css';
import BoardGame from "./src/objects/BoardGame";

import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",`
    ${PlayerName('Player1')},
    ${PlayerName('Player2')},   
    ${BoardGame(6)}`
);



