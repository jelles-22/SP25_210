// Reference Variables (referencing the DOM / HTML page)
const petsUlRef = document.querySelector("#pets");

// Data Variables
const pets = ["Cat","Dog","Fox","Mouse","Snake","Fish","Bird"];
// 
const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260",
];

console.table(pets);

// Loop through our list --> for (for loop)
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);
// below is for list of
    const image = images[i];
    console.log(image);

    const imageHTML = "<img src='" + image + "' alt='' />"
    
    petsUlRef.innerHTML += "<li>" + pet + imageHTML + "</li>"
}