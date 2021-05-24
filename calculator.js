const prompt = require("prompt-sync")(); // Please don't touch me :)

//initial task:
// //two integers (used parseInt to convert from string to integer, i googled it)
// const integer1 = parseInt(prompt("Please enter the first number: "));
// const integer2 = parseInt(prompt("Please enter the second number: "));

// //operation
// const op = prompt("Please choose the operation (+, -, /, *): ");

// //check operation and perform 
// if (op === "+"){
//     console.log(`${integer1} + ${integer2} = ${integer1 + integer2}`);
// } else if (op === "-"){
//     console.log(`${integer1} - ${integer2} = ${integer1 - integer2}`);
// } else if (op === "/"){
//     console.log(`${integer1} / ${integer2} = ${integer1 / integer2}`);
// } else if (op === "*"){
//     console.log(`${integer1} * ${integer2} = ${integer1 * integer2}`);
// } else {
//     console.log(`can't you read??`);
// }


//after fix: Everything is hard-coded

//two integers 
const integer1 = 4;
const integer2 = 5;

//operation
const op = "*";

if (op === "+"){
    console.log(`${integer1} + ${integer2} = ${integer1 + integer2}`);
} else if (op === "-"){
    console.log(`${integer1} - ${integer2} = ${integer1 - integer2}`);
} else if (op === "/"){
    console.log(`${integer1} / ${integer2} = ${integer1 / integer2}`);
} else if (op === "*"){
    console.log(`${integer1} * ${integer2} = ${integer1 * integer2}`);
} else {
    console.log(`can't you read??`);
}

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);
