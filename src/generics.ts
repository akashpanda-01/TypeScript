function identity<T>(value: T): T{
    return value;
};
const result1 = identity<string>("Akash");
const result2 = identity<number>(1);
// console.log(result1, result2);
// console.log(identity("Akash"));
// console.log(identity(1));

function wrapInArray<T>(item: T): [T]{
    return [item];
};
// console.log(wrapInArray("A"));
// console.log(wrapInArray(2));
// console.log(wrapInArray({flavor: "Chai"}));

function getArray<T>(items: T[]): T | undefined{
    return items[0];
};
console.log(getArray([1, 2, 3]));

function pair<A, B>(a: A, b: B): [A,B]{
    return [a, b];
};
// console.log(pair("Akash", {flavor: "Chocolate"}));

interface Box<T>{
    content: T
};
const numberBox: Box<number> = {content: 1};
const strBox: Box<string> = {content: "A"};
console.log(numberBox, strBox);


function getLength<T extends {length: number}>(value: T): number {
    return value.length;
};
console.log(getLength("Akash"));


interface ApiPromise<T>{
    status: number,
    data: T
};
const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
};
console.log(res);