import deck from "../scripts/deck.js";

console.log(deck);


const suitColors = {
    hearts: "red",
    diamonds: "red",
    clubs: "black",
    spades: "black"
};

deck.cards.map(card => {
    const { rank, suit, icon, color } = card;


    const cardHtml = `
        <div class="card-container face-up">
            <div class="card ${color}">
                <div class="card-front">
                    <div class="card-rank">${rank}</div>
                    <div class="card-suit">${icon}</div>
                </div>
                <div class="card-back">⚔️</div>
            </div>
        </div>
    `;

    const container = document.querySelector(`.cards-view.${suit}`);
    if (container) {
        container.insertAdjacentHTML('beforeend', cardHtml);
    }
});