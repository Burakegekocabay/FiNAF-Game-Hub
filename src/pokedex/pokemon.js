const button = document.getElementById('btn-summon');
const img = document.getElementById('poke-img');
const pokeName = document.getElementById('poke-name');
const pokeHp = document.getElementById('poke-hp');
const pokeTypes = document.getElementById('poke-types');
const attStat = document.getElementById('att-stat');
const defStat = document.getElementById('def-stat');
const spdStat = document.getElementById('spd-stat');
const card = document.getElementById('card');

// Poketype colors
const typeColors = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
    normal: '#A8A878'
};

async function getPokemon() {
    // Random Number (between 1/898  - the most popular pokemons)
    const id = Math.floor(Math.random() * 898) + 1;

    // Buton catching...
    button.innerText = "Catching...";
    button.disabled = true;
    img.style.opacity = "0.5";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        pokeName.innerText = data.name;

        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        pokeHp.innerText = `HP ${hp}`;

        attStat.innerText = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
        defStat.innerText = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
        spdStat.innerText = data.stats.find(stat => stat.stat.name === 'speed').base_stat;

        const mainType = data.types[0].type.name;
        const color = typeColors[mainType] || '#A8A878';
        card.style.borderTop = `10px solid ${color}`;
        pokeTypes.innerHTML = `<span class="type-badge" style="background:${color}">${mainType}</span>`;

        //FHD image (Official Artwork)
        const imgSrc = data.sprites.other['official-artwork'].front_default;

        // show image when loaded
        img.src = imgSrc;
        img.onload = () => {
            img.style.opacity = "1";
            button.innerText = "SUMMON NEW!";
            button.disabled = false;
        };

    } catch (error) {
        console.error(error);
        pokeName.innerText = "Missigno (Error)";
        button.disabled = false;
    }
}

button.addEventListener('click', getPokemon);