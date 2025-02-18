// Function to start the game
function startGame(gameId) {
    console.log(`Starting Game ${gameId}`);
    // Add your game starting logic here
}

// Get all game cards
const gameCards = document.querySelectorAll('.game-card');

// Add event listeners for mouse enter and leave
gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Slightly enlarge the card
        card.style.transition = 'transform 0.2s'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Reset to original size
    });

    // Add click event listener
    card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-game-id');
        startGame(gameId);
    });
});
