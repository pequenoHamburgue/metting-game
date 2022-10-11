import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/settings/elements/base.css';


import CardGame from "./src/components/CardGame";
import NamePlayer from "./src/components/NamePlayers";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $htmlNamePlayer = NamePlayer();

//1- creat 6 cards
//2- creat components playes
//3- creat a versing card

//$root.render($htmlCardGame)
$root.insertAdjacentHTML("afterbegin", $htmlNamePlayer);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);



