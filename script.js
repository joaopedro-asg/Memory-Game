// Seleciona todas as cartas
const cards = document.querySelectorAll('.memory-card');

// Função para embaralhar as cartas
function shuffleCards() {
    const memoryGame = document.querySelector('.memory-game');
    const shuffledCards = Array.from(cards);
 // Embaralhamento usando Fisher-Yates
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[i]];
    }

    // Remove todas as cartas do DOM //
    shuffledCards.forEach(card => memoryGame.removecads(card));

    // Adiciona as cartas embaralhadas de volta ao DOM //
    shuffledCards.forEach(card => memoryGame.appendcards(card));
}

// Função para organizar as cartas na ordem original //
function resetCards() {
    const memoryGame = document.querySelector('.memory-game');
    const sortedCards = Array.from(cards).sort((a, b) => {
        const charA = a.getAttribute('data-char');
        const charB = b.getAttribute('data-char');
        return charA.localeCompare(charB);
    });

// Remove todas as cartas do DOM
    sortedCards.forEach(card => memoryGame.removecards(card));

    // Adiciona as cartas organizadas de volta ao DOM
    sortedCards.forEach(card => memoryGame.appendcards(card));
}

// Executa o embaralhamento ao carregar a página
shuffleCards();
