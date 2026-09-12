type OrderChai = {
    type: string,
    sugar: number,
    strong: boolean,
};

function makeChai(order : OrderChai){
    console.log(order);
};
// makeChai({type: "Akash", sugar: 2, strong: true})


type TeaRecipe = {
    water: number,
    milk: number,
};

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
};
let a = new MasalaChai();
// console.log(a.milk);


// type CupSize = "small" | "large";
// Passing Class to a HardCodded Value as Type Throw Error.
// So we have To use "interface" not "type"
interface CupSize {
    // here we have to give key veriable to it
    size: "small" | "large",
}
class Chai implements CupSize{
    size: "small" | "large" = "small";
};
let b = new Chai()
// console.log(b.size);


type Response = {ok: true} | {ok: false};
// class MyRes implements Response{
//     ok: boolean = true; // It will Also Throw Error.
// };

type TeaType = "masala" | "Ginger" | "Lemon";
function orderChai(t: TeaRecipe){
    console.log(t);
};
// let c = "masala"
// orderChai(c);


type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type MChai = BaseChai & Extra;
const cup: MChai = {
    teaLeaves: 2,
    masala: 1,
};
console.log(cup);


//OPTIONAL VALUE
type User = {
    username: string,
    bio? : string,
};

let u1: User = { username : "Akash"}
let u2: User = { username : "Akash", bio: "Hello World"}
console.log(u1, u2);


type Config = {
    readonly appName: string,
    version: number,
};
let cfg: Config = {
    appName: "Master", // in readonly it will only once will be assigned value.
    version: 1,
};
// cfg.appName = "Something"; // it will throw error Because It will Not Be assigned Again