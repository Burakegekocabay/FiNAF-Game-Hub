const gamehub = document.getElementById('gamehub');
const error = document.getElementById('error');

if (gamehub) {
    const text = gamehub.innerText;
    const colors = ['#d72814ff', '#000000ff', '#0eeee7ff', '#fff200ff', '#f40992ff'];

    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if (i < 5) {
            newText += `<span style="color: ${colors[i]}">${text[i]}</span>`;
        } else {
            newText += text[i]; //default black color for other letters
        }
    }
    gamehub.innerHTML = newText;
}

if (error) {
    const originalText = error.innerText; // "TypeError: Fun is not a function"
    const words = originalText.split(' ');
    
    // Colors for F - N - A - F
    const initialColors = ['#ff3e3e', '#0eeee7ff', '#fff200ff', '#f40992ff'];
    let colorPointer = 0;

    const formattedText = words.map((word, index) => {
        // We skip "TypeError:" (index 0) and "is" (index 2) 
        // We target: Fun (1), not (3), a (4), function (5)
        const targetIndices = [1, 3, 4, 5];

        if (targetIndices.includes(index)) {
            const firstLetter = word.charAt(0);
            const restOfWord = word.slice(1);
            const color = initialColors[colorPointer++];

            return `<span class="fnaf-initial" style="color: ${color}">${firstLetter}</span>${restOfWord}`;
        }

        return word; // Return "TypeError:" and "is" as normal text
    }).join(' ');

    error.innerHTML = formattedText;
}