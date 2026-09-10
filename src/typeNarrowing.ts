function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} chai...`;
    };
    return `Chai Order: ${kind}`;
};
// console.log(getChai(2));


function serveMsg(msg?: string) : string{
    if(msg){
        return `Serving ${msg}`;
    };
    return `Serving default Chai`;
};
// console.log(serve());


function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small Cutting Chai..`;
    };
    if(size === "medium" || "large"){
        return `Make Extra Chai`;
    };
    return `Chai Order ${size}`;
};
// console.log(orderChai(2));


class kulhadChai {
    serve(){
        return `Serving kulhad Chai`
    };
};

class cutting { 
    serve(){
        return `Serving Cutting Chai`;
    };
};

function serve(chai : kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    };
};
// let kulhad = new kulhadChai();
// console.log(serve(kulhad));


type ChaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
};

function serveOrder(item: ChaiOrder){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`;
    };
    return `Serving custom chai: ${item}`;
};


type MasalaChai = {type: "masala"; spiceLevel: number};
type GingerChai = {type: "Ginger"; amount: number};
type ElichiChai = {type: "Elichi"; aroma: number};

type chai = MasalaChai | GingerChai | ElichiChai;

function MakingChai(Order: chai){
    switch (Order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "Ginger":
            return `Ginger Chai`;
            break;
        case "Elichi":
            return `Elichi Chai`;
            break;
    }
};


function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        return `MasalaChai Spice Level`;
    };
};
