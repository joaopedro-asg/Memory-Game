let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const cards = document.querySelectorAll('.memory-card');

//MARK: - Verifica se a carta já foi virada e se não foi, é feito.
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

//MARK: Verifica se as cartas são iguais, se não, desvira
function checkForMatch() {
    if (firstCard.dataset.char === secondCard.dataset.char) {
        disableCards(); 
        checkAllCardsFlipped();
        return;
    }

    unflipCards();
}

//MARK: Após a carta estar virada, desabilita para virar para baixo
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//MARK: Desvira as cartas após um tempo
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//MARK: Reseta as cartas
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// MARK: - Função que verifica se todas as cartas deram match
function checkAllCardsFlipped() {
    const allFlipped = Array.from(cards).every(card => card.classList.contains('flip')); //aqui ele verifica se todas as cartas estão viradas, caso for verdadeira
    
    if (allFlipped) {
        setTimeout(resetGame, 2000); //se for verdadeiro, reinicia tudo depois de um delay de 2s (ms)
    }
}

//MARK: Reseta o jogo
function resetGame() {
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });

    resetBoard();
    shuffle();
}

// MARK: - Embaralha as cartas
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}

// MARK: - Inicio
(function initializeGame() {
    cards.forEach(card => card.addEventListener('click', flipCard));
    shuffle();
})();
