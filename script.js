document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            cards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const role = this.querySelector('.role').innerText;
            console.log('Link clicado: ' + role);
        });
    });
});