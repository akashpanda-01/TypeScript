type Tea = {
  name: string;
  price: number;
  ingrediants: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 20,
  ingrediants: ["Ginger", "teaLeaves"],
};
adrakChai.ingrediants[1] = "TeaLeaves";
// console.log(adrakChai.ingrediants);

// DUCK typing
type Cup = {
  size: string;
};
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", meterial: "steel" };
smallCup = bigCup;
// it will not throw any error because the properties in Object type we already provided so
// if we add more it will not Complain.
// console.log(smallCup);

type Brew = { brewTime: number };
let coffee = { brewTime: 5, beans: "Arabica" };
let chaiBrew: Brew = coffee;

// split out data types
type Item = {name: string, quantity: number};
type Address = { street: string; pin: number };

type Order = {id: string, items: Item[], address: Address};


//Partial<Type>
// type Chai = {
//     id: string;
//     name: string;
//     price: number;
//     isHot: boolean;
// };
// const updateChai = (updates: Partial<Chai>) => {
//     return updates;
// };
// console.log(updateChai({price: 30}));
// console.log(updateChai({name: "A"}));

// Required<Type>
type ChaiOrder = {
    name?: string;
    quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
    // console.log(order);
};
placeOrder({name: "B", quantity: 2});


// Pick<T, k(what specific fields we want)>

type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
    ingrediants: string[];
};
// we Pick Data presizlly
type BasciChaiInfo = Pick<Chai1, "name" | "price">;
const chaiInfo : BasciChaiInfo = {
    name: "lemon tea",
    price: 30
};
// console.log(chaiInfo);

// Omit<Type>
type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingrediants: string;
};
type PublicChai = Omit<Chai2, "price">;