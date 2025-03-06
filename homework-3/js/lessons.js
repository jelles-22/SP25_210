const instrumentsUlRef = document.querySelector("#instruments");

const instruments = ["Piano","Guitar","Violin","Drums","Saxophone","Flute"];

console.table(instruments);

for (let i = 0; i < instruments.length; i++) {
    const instruments = instruments[i];
    console.log(instruments);

};

instrumentsUlRef.innerHTML += "<li>" + instruments + "</li>"