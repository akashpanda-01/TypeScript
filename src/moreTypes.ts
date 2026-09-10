let response: any = "42";
let numericLength = (response as string).length;
console.log(numericLength);


type Book = {
    name: string,
};
let bookString = '{"name": "one thing"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "Chai";
value = [1,2,3];
value = 2.5;
value.toUpperCase(); 
//not throw error and not suggest any methods like toUpperCase when we use any as type.


let newValue: unknown;
newValue = "Chai";
newValue = [1,2,3];
newValue = 2.5;
// here it throw error and when we call we have tell which type it is we have to narrow down.

try {
    
} catch (err) {
    // we have to check type of err, otherwise it will throw error;
    if(err instanceof Error){
        console.log(err.message);
    };
    console.log("Error", err);
};


let data: unknown = "Chai aur Code";
// let strData : string = data // it will throw an error so we have to forcefully tell it
let strData: string = data as string;

type Role = "admin" | "user";
function redirectRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting To Admin");
    };
    if(role === "user"){
        console.log("Redirecting To user");
    };
    role;
    // if we not have any case in our Role, then it will show type as never when hover onn to it.
    // if we have a case in our Role type, then it will show that case when hover on to it.
};

function neverReturn(): never{
    // when we do : never then the function will not reach to end.
    while(true){}
};