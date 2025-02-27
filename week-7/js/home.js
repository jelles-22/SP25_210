console.log("Cozy home");

console.log("2 + 7 =", 2 + 7);

console.log("'2' + '2' =", "2" + "2");

console.log("My name is " + "Jon");

console.log("2 + 2", 2 + Number("2"));

if (true) {
    console.log("Always True");
} else {
    console.error("This should never happen");
}

let money = 0.75;

if(money >= .5) {
    console.log("You pay for a bus ticket");
    money -= 0.5
} else if (money >= 0.25) {
    console.log("Catch a ride with a mysterious stranger");
    console.log("Sounds sketch, but it's your life");
    money -= 0.25;
} 
else {
    console.log("You're broke walk home");
    console.log("It's a 5 hour walk :(");
}
