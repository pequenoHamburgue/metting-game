//import CardGame from "../../components/CardGame";
import CardFrontBack from "../../components/CardFrontBack"
import "./style.css";

function BoardGame(amuntCards){
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amuntCards)
    return `
    <section class="board-game">
        ${$htmlContent}
    </section>`;
}

export default BoardGame;