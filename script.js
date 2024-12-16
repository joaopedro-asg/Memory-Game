// Seleciona todas as cartas
const cards = document.querySelectorAll('.memory-card');

// Função para embaralhar as cartas
function shuffleCards() {
    const memoryGame = document.querySelector('.memory-game');
    const shuffledCards = Array.from(cards);
