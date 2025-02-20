console.log("Umm...where are we");

const birthYear = 1207;

let myName = "Ty the Noodle Arm Guy";

console.log(myName, "was born", birthYear);

myName = "Ty the Fly Guy";
// birthYear = 1208;
// ^ constant variable can't change their values

console.warn(myName, "MAY have devoured 10 souls.");

console.log("myName is", myName.length, "character long.");

console.log("myName includes ty", myName.toLowerCase().includes("ty"));

myName = "ty";

console.log("myName has uppercase", myName !== myName.toLowerCase());

const PI = 3.1415;

console.log("$",PI.toFixed(2));

// random number 0-100
const randomNumber = Math.floor(Math.random() * 100)
+ 1;

console.log("random number:", randomNumber);

console.log(Math.PI - PI, PI.toString().length);

console.log(PI, PI.toString());
console.log("loose check", PI == PI.toString());
console.log("strict check", PI === Number(PI.toString()));

console.log("myName type:", typeof myName);