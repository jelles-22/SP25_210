const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log(titleRef);

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class='item' >" + melon + "</li>"; 
}

titleRef.style.backgroundColor = "red";
titleRef.style.color = "#00f00";
titleRef.style.fontSize = "20px";

document.querySelector("body > ul li").style.display = "none";

document.querySelector("body > ul li").style.display = "block";

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);
firstARef.href = "dom.html";
firstARef.setAttribute("target", "_blank");