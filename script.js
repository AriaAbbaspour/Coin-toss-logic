document.addEventListener('DOMContentLoaded', function() {
    const headsBtn = document.getElementById('heads-btn');
    const tailsBtn = document.getElementById('tails-btn');
    const playerGuessSpan = document.getElementById('player-guess');
    const coinResultSpan = document.getElementById('coin-result');
    const gameResultSpan = document.getElementById('game-result');
    const attemptsSpan = document.getElementById('attempts');
    const winsSpan = document.getElementById('wins');
    const lossesSpan = document.getElementById('losses');

    let attempts = 0;
    let wins = 0;
    let losses = 0;

    function flipCoin(playerGuess) {
        playerGuessSpan.textContent = playerGuess;
        const flipResult = Math.floor(Math.random() * 2);
        const coinResult = flipResult === 0 ? 'Heads' : 'Tails';
        coinResultSpan.textContent = coinResult;
        const gameResult = playerGuess === coinResult ? 'Win!' : 'Loss';
        gameResultSpan.textContent = gameResult;

        // Update counters
        attempts++;
        if (gameResult === 'Win!') {
            wins++;
        } else {
            losses++;
        }

        // Update UI
        attemptsSpan.textContent = attempts;
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
    }

    headsBtn.addEventListener('click', function() {
        flipCoin('Heads');
    });

    tailsBtn.addEventListener('click', function() {
        flipCoin('Tails');
    });
});