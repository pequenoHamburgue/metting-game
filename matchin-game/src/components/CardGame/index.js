import "./style.css";
function CardGame(icon = "alura-pixel 1", alt = "Logo da alura"){
    return `
    <article class="card-game" onclick=""> 
        <img src="images/${icon}.png" alt="${alt}">
    </article>`
}


export default CardGame;