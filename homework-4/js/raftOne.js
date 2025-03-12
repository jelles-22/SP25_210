const journeyRef = document.querySelector("#journey");

function startJourney () {
    journeyRef.innerHTML = "<p>You are extremely thristy!! Around you is nothing but water. You are uneducated. Do you drink?.</p>"

    const optionOne = [
        {
            name: "NEVER!",
            img: "https://media.istockphoto.com/id/1193410235/vector/happy-cute-kid-boy-feels-so-thirsty.jpg?s=612x612&w=0&k=20&c=Vd94FxbQIO1irXce08btVBtKCYBXX68bqnTRar_XIl0=",
            CC: 1
        },
        {
            name: "Water is water. Bottoms Up!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJbTenOg0_BFDIewIBigwrV-dn9RheF_UxA&s",
            CC: -1
        },
        
    ];

    for (let i = 0; i < optionOne.length; i++) {
        const pokemon = optionOne[i];

        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.onclick = choiceOneContinue;

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }
}
function choiceOneContinue(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;
    const pokemonCC = e.currentTarget.dataset.pokemonCC;
    
    const confirmChoice = confirm("You chose: " + pokemonName);
    
    if (confirmChoice) {
        if(pokemonCC==-1){
            journeyRef.innerHTML += "<h2>You died</h2> <button onclick='startJourney()'>Reset?</button> ";
    
        }else{
            // journeyRef.innerHTML += "You chose: " + pokemonName + " as your final choice.";
            journeyRef.innerHTML += "<h2>You survived!</h2><button onclick='choiceTwo()'>Continue</button>";
            // myPokemon = { name: pokemonName, img: pokemonImg };
        }
    
    }
    }

function choiceTwo () {
    journeyRef.innerHTML = "<p>You avoided the urge for water! Congratulations! Your patience has paid off and you wash onto shore. What do you do next?.</p>"

    const optionOne = [
        {
            name: "Seek shelter in a nearby cave.",
            img: "https://www.worldhistory.org/uploads/images/2770.jpg",
            CC: 1
        },
        {
            name: "Scavenge a bunch of sticks and quickly build a flimsy shack.",
            img: "https://www.shutterstock.com/image-photo/mudhut-tanzania-600nw-925148.jpg",
            CC: -1
        },
        
    ];

    for (let i = 0; i < optionOne.length; i++) {
        const pokemon = optionOne[i];

        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.dataset.pokemonCC = pokemon.CC;
        newSection.onclick = choiceTwoContinue;

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }
}
function choiceTwoContinue(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;
    const pokemonCC = e.currentTarget.dataset.pokemonCC;
    
    const confirmChoice = confirm("You chose: " + pokemonName);
    
    if (confirmChoice) {
        if(pokemonCC==-1){
            journeyRef.innerHTML += "<h2>You died</h2> <button onclick='startJourney()'>Reset?</button> ";
    
        }else{
            // journeyRef.innerHTML += "You chose: " + pokemonName + " as your final choice.";
            journeyRef.innerHTML += "<h2>You survived!</h2><button onclick='choiceThree()'>Continue</button>";
            // myPokemon = { name: pokemonName, img: pokemonImg };
        }
    
    }
    }

    
function choiceThree () {
    journeyRef.innerHTML = "<p>You stumble inside, finding rements of an old shipwreck, complete with clothing and oddly well perserved food! What do you do next?</p>"

    const optionOne = [
        {
            name: "Build a SOS signal out of rocks.",
            img: "https://cdn.jns.org/uploads/2018/05/sos-israel-police-1320x880.png",
            CC: -1
        },
        {
            name: "You explore the island.",
            img: "https://i.dailymail.co.uk/i/pix/2011/05/28/article-0-0C4DD6D900000578-503_468x431.jpg",
            CC: 1
        },
        
    ];

    for (let i = 0; i < optionOne.length; i++) {
        const pokemon = optionOne[i];

        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.dataset.pokemonCC = pokemon.CC;
        newSection.onclick = choiceThreeContinue;

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }
}
function choiceThreeContinue(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;
    const pokemonCC = e.currentTarget.dataset.pokemonCC;
    
    const confirmChoice = confirm("You chose: " + pokemonName);
    
    if (confirmChoice) {
        if(pokemonCC==-1){
            journeyRef.innerHTML += "<h2>You died</h2> <button onclick='startJourney()'>Reset?</button> ";
    
        }else{
            // journeyRef.innerHTML += "You chose: " + pokemonName + " as your final choice.";
            journeyRef.innerHTML += "<h2>You survived!</h2><button onclick='choiceFour()'>Continue</button>";
            // myPokemon = { name: pokemonName, img: pokemonImg };
        }
    
    }
    }


function choiceFour () {
    journeyRef.innerHTML = "<p>You venture off into the thick jungle. Suddenly, you hear people speaking. It's a drug cartel! You've watched enough Narcos to know they'll probably let you live.....probably.</p>"

    const optionOne = [
        {
            name: "Communicate with the strangers.",
            img: "https://static01.nyt.com/images/2007/10/30/arts/30pabl600.jpg?quality=75&auto=webp&disable=upscale",
            CC: -1
        },
        {
            name: "Attempt to steal the nearby boat.",
            img: "https://i.ytimg.com/vi/5vFPZYkbt-Q/maxresdefault.jpg",
            CC: 1
        },
        
    ];

    for (let i = 0; i < optionOne.length; i++) {
        const pokemon = optionOne[i];

        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.dataset.pokemonCC = pokemon.CC;
        newSection.onclick = choiceFourContinue;

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }
}
function choiceFourContinue(e) {
console.log(e.currentTarget);
const pokemonName = e.currentTarget.dataset.pokemonName;
const pokemonImg = e.currentTarget.dataset.pokemonImage;
const pokemonCC = e.currentTarget.dataset.pokemonCC;

const confirmChoice = confirm("You chose: " + pokemonName);

if (confirmChoice) {
    if(pokemonCC==-1){
        journeyRef.innerHTML += "<h2>You died</h2> <button onclick='startJourney()'>Reset?</button> ";

    }else{
        // journeyRef.innerHTML += "You chose: " + pokemonName + " as your final choice.";
        journeyRef.innerHTML += "<h2>You survived!</h2><button onclick='result()'>Continue</button>";
        // myPokemon = { name: pokemonName, img: pokemonImg };
    }

}
}

function result () {
    journeyRef.innerHTML = "<p>You successfully stole the boat! You shift it into drive and zip off into the sunset. YOU'RE FREE!</p><footer>You die 3 days later. You got lost. You were the janitor on the previous boat, not the captain.</footer>";
}
