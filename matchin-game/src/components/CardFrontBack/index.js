import CardGame from "../CardGame";

function CardFrontBack(){
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-javascript 2",'Logo do javascript')}
        </article>
    `;
}

export default CardFrontBack;