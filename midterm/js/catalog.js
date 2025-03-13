// referencces to DOM
const menuRef = document.querySelector("#menu");

// data
const menuItems = [
    {image: "productOne.webp",
    name: "My First Fire",
    },
    {
        image: "productTwo.webp",
        name: "Handy Hand",
    },
    {
        image: "productThree.webp",
        name: "NapSack",
    },
    {
        image: "productFour.webp",
        name: "Hot Tub Wildlife Feeder",
    },
    {
        image: "productFive.webp",
        name: "Toilet Meadow",
    },
    {
        image: "productSix.webp",
        name: "Pudding Pouch",
    },
];

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];

    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHTML += newP;

    menuRef.appendChild(newArticle);
}


// const menuRef2 = document.querySelector("#menuTwo");

// // data
// const menuItems2 = [
    
//     {
//         image: "productFour.webp",
//         name: "Hot Tub Wildlife Feeder",
//     },
//     {
//         image: "productFive.webp",
//         name: "Toilet Meadow",
//     },
//     {
//         image: "productSix.webp",
//         name: "Pudding Pouch",
//     },
// ];

// menuRef2.innerHTML = "";

// for (let i = 0; i < menuItemsTwo.length; i++) {
//     const item = menuItemsTwo[i];

//     const newArticle = document.createElement("article");
//     const newImg = document.createElement("img");
//     newImg.src = item.image;
//     newArticle.appendChild(newImg);

//     const newP = "<p>" + item.name + "</p>";
//     newArticle.innerHTML += newP;

//     menuRef.appendChild(newArticle);
// }

