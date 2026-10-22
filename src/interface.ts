// INTERFACE
//============

// An interface defines structure of an object. It describes which properties, methods an Object
// should have, and Along with it's types.

interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
    greet(): void;
    add(a: number, b: number): number;
};
const user: User = {
    name: "A",
    age: 22,
    email: "akash@gmail.com",
    id: 1,
    greet(){
        console.log("Hello World");
    },
    add: (a, b) => {
        return a+b;
    },
};
console.log(user,
    user.add(4,5));
user.greet();