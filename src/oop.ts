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
x2.showName() //  Accessible