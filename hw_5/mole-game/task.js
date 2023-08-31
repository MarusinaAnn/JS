let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wins = parseInt(deadMole.textContent);
let lose = parseInt(lostMole.textContent);

function checkNumber(deadMole, lostMole) {
    console.log(deadMole, lostMole);
    if (deadMole === 10) {
        alert("You win");
        location.reload();
    } else if (lostMole === 5) {
        alert("You lose");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wins += 1;
            deadMole.textContent = wins;
        } else {
            lose += 1;
            lostMole.textContent = lose;
        };
        checkNumber(wins, lose);
    };
};