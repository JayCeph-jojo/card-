  const card = document.querySelector('.card');
        function toggleCard() {
            const flipped = card.classList.toggle('is-flipped');
            card.setAttribute('aria-pressed', String(flipped));
        }

        card.addEventListener('click', toggleCard);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleCard();
            }
        });