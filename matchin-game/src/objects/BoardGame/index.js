import CardGame from "../../components/CardGame";
import "./style.css";

function BoardGame(amuntCards){
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amuntCards)
    return `
    <section class="board-game">
        ${$htmlContent}
    </section>`;
}

export default BoardGame;