const user_guess = document.getElementById('user_guess');
const guess_button = document.getElementById('guess_button');
const up_or_down = document.getElementById('up_or_down');
const attempt = document.getElementById('attempt');
const again = document.getElementById('again');

let random = Math.floor(Math.random() * 100) + 1;
let sum = 0;

guess_button.addEventListener('click', () => {
    const user_value = parseInt(user_guess.value);

    if (isNaN(user_value) || user_value < 1 || user_value > 100) {
        up_or_down.innerText = "❌ Please enter a valid number (1-100)!";
        up_or_down.style.color = "orange";
        return;
    }

    sum++;
    attempt.innerText = `Attempts: ${sum}`;

    if (user_value === random) {
        up_or_down.innerText = `CORRECT! The number was ${random}. 🎉`;
        up_or_down.style.color = "#39FF14";
        endGame();
    } else if (user_value < random) {
        up_or_down.innerText = "UP! 📈 (Try a higher number)";
        up_or_down.style.color = "#00FFFF";
    } else {
        up_or_down.innerText = "DOWN! 📉 (Try a lower number)";
        up_or_down.style.color = "#FF00FF";
    }

    user_guess.value = "";
    user_guess.focus(); // Focus back on input after each guess
});

function endGame() {
    guess_button.disabled = true;
    user_guess.disabled = true;
    again.style.display = "inline-block";
}

again.addEventListener('click', () => {
    random = Math.floor(Math.random() * 100) + 1;
    sum = 0;
    attempt.innerText = "Attempts: 0";
    up_or_down.innerText = "Start guessing...";
    up_or_down.style.color = "white";
    guess_button.disabled = false;
    user_guess.disabled = false;
    again.style.display = "none";
});