function greet(a: number, b: number): number {
  return a + b;
}
// console.log(greet(4, 6));



//VOID
function printName(name: string): void {
  console.log(name);
}
printName("A");



// NEVER
function throwErr(message: string): never {
  throw new Error(message);
}
// throwErr("hello");



// OPTIONAL PARAMETER
function optionalVal(name: string, age?: number): void {
  console.log(name, age);
}
optionalVal("hello", 4);



// DEFAULT PARAMETER
function defaultParm(name: string = "Akash") {
  console.log(name);
}
defaultParm();



// REST PARAMETER (...)
function restParm(...numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(restParm(1, 2, 3, 4, 5, 6));



// FUNCTION TYPE
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));

let add1: Add = function (a, b) {
  return a * b;
};
console.log(add1(3, 5));



// Function Type as a Parameter
// You can pass functions to other functions.
function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number,
): number {
  return operation(a, b);
}
console.log(calculate(2, 4, (x, y) => x * y));



// Typing an Arrow Function
// we have two approches
// 1 TYPE PARAMETER AND RETURN;
const add2 = (a: number, b: number): number => {
  return a + b;
};
console.log(add2(4,5));

// 2 TYPE PARAMETER AND RETURN;
type Add1 = (
    a: number,
    b: number
) => number;
const add4 : Add = function (a, b) {
    return a*b; 
};
console.log(add4(10, 20));


// FUNCTION TYPE WITH OBJETC PARAMETER
type User = {
    name?: string;
    age?: number;
};
function printUser(user: User): void{
    console.log(user.name);
};
printUser({name: "RadheKrishna"});