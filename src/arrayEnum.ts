let number: number[] = [1, 2, 3];
let string: string[] = ["A", "B", "C"];
// console.log(number, string);

// GENERIC SYNTAX
let num1: Array<number> = [1, 2, 3];
let str1: Array<string> = ["A", "B"];
// console.log(num1, str1);

// Array Of Objects
type Obj = {
  name: string;
  age: number;
};
let arr2: Obj[] = [
  { name: "A", age: 1 },
  { name: "B", age: 2 },
];
// console.log(arr2);

// UNION WITH ARRAY;
let uni: (string | number)[] = ["A", 1, 1, "b"];
let uni1: Array<string | number> = ["b", 2, 3, "c"];
// console.log(uni);
// console.log(uni1);

// ARRAY OF UNION
// means the array can be only numbers or the array can be only string.
// not the array contain both number and string.
let uni2: string[] | number[] = [1, 2, 3];
let uni3: string[] | number[] = ["A", "b", "c"];
// console.log(uni2);
// console.log(uni3);

// MULTIDIMENSIONAL ARRAY
let multiNum: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let multiStr: string[][] = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
// console.log(multiNum);
// console.log(multiStr);

// WITH GENERIC SYNTAX
let multiGenSyntax: Array<Array<number>> = [
  [1, 1],
  [2, 2],
  [3, 3],
];
// console.log(multiGenSyntax);

//THREE DIMENTIONAL
let threeDimensional: number[][][] = [
  [
    [1, 2],
    [2, 1],
  ],
  [
    [4, 4],
    [5, 5],
  ],
];
// console.log(threeDimensional);

let threeDimensionalGeneric: Array<Array<Array<number>>> = [
  [
    [0, 0],
    [9, 9],
  ],
  [
    [8, 8],
    [7, 7],
  ],
];
// console.log(threeDimensionalGeneric);


// READONLY ARRAY;
let readArr: readonly number[] = [1, 2, 3];
// readArr.push(4); // Not Valid
// console.log(readArr);
// Generic
let readArrGeneric: ReadonlyArray<number> = [1, 1, 1];
// console.log(readArrGeneric);


// TUPELS
// A tupel is an array where typescript knows the number of elements
// and the types of each position.

let tupleArr: [string, number] = ["a", 2];
// console.log(tupleArr);




// ================== ENUM =========================
enum Status {
  Pending,
  Shipped,
  Delivered
};
// console.log(Status.Delivered); //2
let status = Status.Delivered;
// console.log(status); //2

enum Status1 {
  Pending = 101,
  Served, // 102
  Canceled // 103
};
// console.log(Status1.Served);

// Enum With Functions
enum ChaiType {
  Masala = "masala",
  Ginger = "ginger"
};
function makeChai(type: ChaiType){
  console.log(`making: ${type}`);
};
makeChai(ChaiType.Ginger);


// Enum With Object
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered"
};
type Order {
  id: string,
  status: OrderStatus
};
const order: Order = {
  id: "ORD101",
  status: OrderStatus.Pending,
};
// later we ccan change it's status according our enum[shipped, Delivered];
order.status = OrderStatus.Delivered;
// order.status = "Random"; // not valid;


