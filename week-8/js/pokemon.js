console.log("Pokemon");

function showAlert() {
    alert("Annoying Message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

// shows yes or no answer
function showConfirm() {
    const userConfirmed = confirm("You are a robto, right?");

    console.log(userConfirmed);
}
confirmBtnRef.onclick = showConfirm;

// user gets to type answer
function showPrompt() {
    const userInput = prompt("What's your favorite flavor of ice cream?", "vanilla");

    console.log(userInput);
}

//code for pokemon journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
    journeyRef.innerHTML = "<p>You are so excited, today, you get your first pokemon! Sitting in front of you are: Bulbasaur, Squirtle, and Charmander. Choose your pokemon.</p>";

    const starterPokemon = [
        {
            name: "Bulbasaur",
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        },
        {
            name: "Charmander",
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        },
        {
            name: "Squirtle",
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        },

    ];

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i];

        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.onclick = choosePokemon;

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }
}

function choosePokemon(e) {
console.log(e.currentTarget);
const pokemonName = e.currentTarget.dataset.pokemonName;
const pokemonImg = e.currentTarget.dataset.pokemonImage;

const confirmChoice = confirm("You chose" + pokemon.name);

if (confirmChoice) {
    journeyRef.innerHTML += "You chose" + pokemoname + " as your starter pokemon.";

    myPokemon = { name: pokemonName, img: pokemonImg };
}
}