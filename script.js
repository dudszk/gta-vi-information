// 1. CONTADOR REGRESSIVO DINÂMICO
function updateCountdown() {
    // Definindo a data aproximada de lançamento
    const releaseDate = new Date('December 31, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = releaseDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }
}

// Atualiza a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();


// 2. SISTEMA DE FILTRO DOS LOCAIS DE LEONIDA
const filterButtons = document.querySelectorAll('.filter-btn');
const locationCards = document.querySelectorAll('.location-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        locationCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});