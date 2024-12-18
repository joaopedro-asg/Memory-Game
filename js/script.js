let hasFlippedCard = false;
<<<<<<< HEAD
=======
let lockBoard = false;
>>>>>>> joaop
let firstCard, secondCard;

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
<<<<<<< HEAD
=======
    if (lockBoard) return;
>>>>>>> joaop
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

function checkForMatch() {
    if (firstCard.dataset.char === secondCard.dataset.char) {
      disableCards();
      return;
    }
 
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
<<<<<<< HEAD
=======
    lockBoard = true;
    
>>>>>>> joaop
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 10);
      card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));