console.log("Hello Typescript!");

try {
    let randomValue = Math.random();
    console.log(randomValue);
    if (Math.random() < 0.5) {
        throw 5;
    } else {
        throw new Error('Something went wrong');
    }
} catch (e) {
    //if (e instanceof Error)
    console.log(e.message);
    // else
    //     console.log("A number");
}

class Customer {
    // id: string;
    // name: string;
    // address: string;
    #myPrivateProperty: string = "IJSE";

    constructor(public id: string,
                public name: string,
                public address: string) {
        // this.id = id;
        // this.name = name;
        // this.address = address;
    }
}

class A {
}

class B {
}

interface MyInterface1 {
}

interface MyInterface2 {
}

class C extends A implements MyInterface1, MyInterface2 {
    readonly MY_CLASS_CONST = 10;
    static readonly X: number = 20;
}

// readonly class D{}
// final class D{}

const MY_CONST = 10;

abstract class MyAbstractClass {
    abstract myAbstractMethod(): void;
}

class MyConcreteClass extends MyAbstractClass {
    myAbstractMethod(): void {
        console.log("Abstract Method Impl");
    }

    print(): void {
        console.log("Print()");
    }
}

//let myObj: MyConcreteClass = new MyConcreteClass();

const enum WeekDays {
    MONDAY = 3,
    TUESDAY,
    WEDNESDAY = 8,
    THURSDAY,
    FRIDAY = 5 + 5
}

// Compile-Time Constants
// Run-time Constants = Computed Constants
enum Gender {
    MALE = "MALE",
    FEMALE = sum(1, 1)     // 2
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

// Interfaces as Type Aliases

interface Employee {
    id: string;
    name: string;
    address: string,
    print: () => void;
}

let employee: Employee = {
    id: "E001",
    name: "Kasun Sampath",
    address: "Galle",
    print() {
    },
    contactList: []
}

interface Employee {
    contactList: string[]
}

// Interface as an Abstraction

interface CustomerService {
    // static y: number;
    // static staticMethod(): void;
    x: number;

    saveCustomer(): void;

    updateCustomer(): void;

    /* public abstract */
    deleteCustomer(customerId: number): void;
}

class CustomerServiceImpl implements CustomerService {
    x: number = 20;

    saveCustomer(): void {
        console.log("Save Customer")
    }

    updateCustomer(): void {
        console.log("Update Customer")
    }

    deleteCustomer(customerId: number): void {
        console.log("Delete Customer")
    }
}

interface MyIn1 {
}

interface MyIn2 {
}

interface MyIn3 extends MyIn1, MyIn2 {
}

interface FnReturnType  { cId: string, cName: string }
interface Param1Type  { id: string, name: string }
type Param2Type = [number, number];
type MyType = string;
// interface MyNewType{
//     string
// }

function getDetail({id, name}: Param1Type, abc: Param2Type): FnReturnType {
    return {
        cId: id,
        cName: name
    };
}

getDetail({id: 'C001', name: "Kasun"}, [10,20]);

// Function/Method Overloading

// Overload Signatures
function print(id: string, name: string, address: string): void;
function print(id: string, name: string): void;
function print(id: number): void;

// Implementation
function print(id: string | number, name: string, address: string):void{
    if (id && name && address) console.log(`id: ${id}, name: ${name}, address:${address}`);
    else if (id && name) console.log(`id: ${id}, name: ${name}`);
    else if (id) console.log(`id: ${id}`);
}

print(1);
print('C001', 'Kasun');
print('C001', 'Kasun', 'Galle');

class System {
    static print(num: number): void;
    static print(str: string): void;
    static print(flag: boolean): void;
    static print(obj: object): void;

    static print(arg: number | string | boolean | object): void {
        console.log(arg);
    }
}

console.log("--------------");
System.print(10);
System.print("IJSE");
System.print(true);
System.print({ id: 'C001', name: 'Kasun'});

type MyType1 = {
    id: string,
    name: string,
    // print: ()=> void
    print(): void
}
// Type Intersection - &
type MyNewType = MyType1 & {address: string}

let obj: MyNewType = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle',
    print() {
        console.log("Print Method");
    }
}

@MyDecorator
class Item {
    myMethod(): void {
        console.log("Item: myMethod");
    }
}

@MyDecorator
class Student {

    @MyMethodDecorator()
    myMethod(): void {
        console.log("Student: myMethod");
    }
}

function MyDecorator(constructor: Function & { new (): Item}){
    new constructor().myMethod();
}

function MyMethodDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("myMethod()");
    };
}

