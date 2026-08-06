// ANNOTATION
// MEANS - WE Have To Explicitly Tells TypeScript What Type it(variable, function) is.

const userName: string = "A";
function greet(val: string): string{
    return `Greeting ${val}`
};
console.log(greet(userName));


// INFERENCE
//MENS => TypeScript automatically figure out what type of is the variable or function.
let userName1 = "b";

// userName1 = 1 // Shows Error that Type 'number' is not assignable to type 'string'.

let cups = Math.random() > 0.5 ? 10 : "5";
console.log(cups); // in cups it showes that cup can be number or can be string;