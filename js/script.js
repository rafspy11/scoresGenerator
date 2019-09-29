function drawResult() {
    let homeScore = null;
    let awayScore = null;
    let drawButtons = document.querySelectorAll('.draw__button');

    for (let i = 0; i < drawButtons.length; i++) {

        drawButtons[i].addEventListener("click", e => {

            let sportType = parseInt(e.target.getAttribute('data-sport'));

            switch (sportType) {
                case 1:
                    drawResultFootball();
                    break;
                case 2:
                    console.log();
                    break;
                case 3:
                    console.log();
                    break;
                default:
                    drawResultFootball();
            }

        }, false);
    }

}

function drawResultFootball() {
    let minScore = 0;
    let maxScore = 2; // oznacza granicę po której zmniejsza się prawdopodobieństwo

    let rand = null;
    let homeScore = 0;
    let awayScore = 0;

    let scoreHome = document.querySelector('.score--home');
    let scoreAway = document.querySelector('.score--away');

    do {
        rand = getRandomInt(minScore, maxScore + 1);
        homeScore += rand;
    } while (rand == maxScore);
    do {
        rand = getRandomInt(minScore, maxScore + 1);
        awayScore += rand;
    } while (rand == maxScore);

    scoreHome.textContent = homeScore;
    scoreAway.textContent = awayScore;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

(function initFunctions() {
    drawResult();
})();
