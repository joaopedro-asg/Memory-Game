function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;

            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }, 1000);
        }

        function resetBoard() {
            [firstCard, secondCard, lockBoard] = [null, null, false];
        }
