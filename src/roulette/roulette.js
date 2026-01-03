let balance = 100;
let betType = null; // red black or number
let betVal = null; // number value

const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];


function setBet(type) {
    betType = type;
    betVal = null;
    document.getElementById('current-bet').innerText = "Selected: " + type.toUpperCase();
    document.getElementById('spin').disabled = false;
}

function setNumberBet() {
    const val = parseInt(document.getElementById('num-input').value);
    if (val >= 0 && val <= 36) {
        betType = 'number';
        betVal = val;
        document.getElementById('current-bet').innerText = "Selected: #" + val;
        document.getElementById('spin').disabled = false;
    }
}

document.getElementById('spin').addEventListener('click', function () {
    const amount = parseInt(document.getElementById('bet-input').value);
    if (amount > balance)
        return alert("Not enough balance!");

    balance -= amount;
    document.getElementById('balance').innerText = balance;
    this.disabled = true;

    //Animation
    let count = 0;
    let timer = setInterval(() => {
        let rand = Math.floor(Math.random() * 37);
        document.getElementById('result').innerText = rand;
        count++;
        if (count > 20) { // ends after 20 number 
            clearInterval(timer);
            const winNum = Math.floor(Math.random() * 37);
            finishGame(winNum, amount);
        }
    }, 90);
});

function finishGame(winNum, amount) {
    const circle = document.getElementById('result');
    circle.innerText = winNum;

    let isRed = redNumbers.includes(winNum);
    circle.style.borderColor = winNum === 0 ? "green" : (isRed ? "#e94560" : "#1a1a2e");

    let won = false;
    if (betType === 'number' && winNum === betVal) won = true;
    else if (betType === 'red' && isRed && winNum !== 0) won = true;
    else if (betType === 'black' && !isRed && winNum !== 0) won = true;

    if (won) {
        let prize = betType === 'number' ? amount * 35 : amount * 2;
        balance += prize;
        document.getElementById('info').innerText = "YOU WON " + prize + "!";
        document.getElementById('info').style.color = "green";
    } else {
        document.getElementById('info').innerText = "You lost. Try again!";
        document.getElementById('info').style.color = "red";
    }

    document.getElementById('balance').innerText = balance;
    document.getElementById('spin').disabled = false;
}