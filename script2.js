

//Arrays of strings
const beginning = ["Today, you will...", "In the near future, expect to...", "Be prepared to..."];
const middle = ["...find a mysterious item...", "...encounter a talking cat...", "...hear a strange noise..."];
const ending = ["...that changes your life forever.", "...and question your reality.", "...that leads to unexpected joy."];

// Get a random item from an array

let randomBeginning = beginning[Math.floor(Math.random() * beginning.length)];
let randomMiddle = middle[Math.floor(Math.random() * middle.length)];
let randomEnding = ending[Math.floor(Math.random() * ending.length)];

//let message = randomBeginning.concat(" ",randomMiddle, randomEnding);
let message = `${randomBeginning} ${randomMiddle} ${randomEnding}`;

console.log(message);

