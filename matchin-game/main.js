
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/settings/elements/base.css';
import BoardGame from "./src/objects/BoardGame";

import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from './src/objects/BoardGame/ScoreBoard';
import CardFrontBack from './src/components/CardFrontBack';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",`
    ${ScoreBoard()},
    ${BoardGame(2)},
    `
);



