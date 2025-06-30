import deck from "../scripts/deck.js";

console.log(deck);


const suitColors = {
    hearts: "red",
    diamonds: "red",
    clubs: "black",
    spades: "black"
};

deck.cards.map(card => {
    const { rank, suit, icon, color, faceUp } = card;


    const cardHtml = `
        <div class="card-container ${faceUp ? 'face-up' : 'face-down'}">
            <div class="card ${color} ${faceUp ? '' : 'down'}">
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