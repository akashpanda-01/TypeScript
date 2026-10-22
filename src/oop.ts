// CLASS
class User {
    //PROPERTIES => represent the data/state of an object (name, age).
    name: string;
    age: number;
    // CONSTRUCTOR => Is a Special Method run automatically when we create an object with new keyword.
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    };
    //METHODS => represent the behavior of an object (greet()).
    greet(x: string): void{
        // THIS => referce to the current object (user1 = new User("A", 21)).
        console.log(`Hello ${this.name} and ${x}`);
    };
};
// OBJECT => Object is an instance of the class.
// const user1 = new User("A", 21);
// const user2 = new User("B", 22);
// user.greet("C");


// ACCESS MODIFIERS (public, private, protected);
class User1 {
    // public => Means the property or method can be accessed from anywhere.
    public name: string;
    constructor(name: string){
        this.name = name;
    };
};
const x = new User1("A");
//x.name // accessed


class User2 {
    //private => Means that Property or method can only be accessed inside that class.
    private name: string = "B";
};
const x1 = new User2();
//x1.name


class ParentUser {
    // protected => It Can Only Be inside Accessible In Class Or SubClass, not Directly From OutSide.
    protected name: string = "c";
};
class ChildUser extends ParentUser {
    showName(){
        console.log(this.name);
    };
};
const x2 = new ChildUser();
// x2.showName() //  Accessible


class Teacher {
    private salary: number;

    name: string;
    dept: string;
    subject: string;

    constructor();
    constructor(name: string, dept: string);
    constructor(name: string, dept: string, subject: string);

    constructor(name?: string, dept?: string, subject?: string){
        this.name = name ?? "Unknown";
        this.dept = dept ?? "Unknown";
        this.subject =  subject ?? "Unknown";
    }

    setSalary(s: number): void{
        this.salary = s;
    };
    getSalary(): number{
        return this.salary;
    }

};

// const t1 = new Teacher();
// const t2 = new Teacher("B", "b");
// const t3 = new Teacher("A", "a", "a");

// console.log(t1, t2, t3);

type U1 = {
    name: string;
    address: {
        city: string;
    };
}
const U: U1 = {
    name: "A",
    address: {
        city: "cuttack"
    }
};

const copy: U1 = {...U};
console.log(U.address, U.name);
console.log(copy.address, copy.name);
copy.address.city = "bhubaneswar";
copy.name = "B";
console.log(U.address, U.name);
console.log(copy.address, copy.name);