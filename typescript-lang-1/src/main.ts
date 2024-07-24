console.log("Hello TypeScript!");

/*
* Type Annotations, Type Inference
* Literal Types
* Union Types
* Type Shape (Object Shape)
* TypeScript Function Type Expressions
* Type Aliases
* 'this' Keyword Inside a Function
* 'any' Data Type
* unknown vs any
* Optional properties, Optional parameters
* index signature
* Type Assertion | Type Guards
* Not Null Assertion Operator
* typeof Operator
* Arrays, Tuples
* */

/* 1. Type Annotations, Type Inferences */

let x = 20;
x = 10;

let y: number = 10;
// y = "IJSE";

/* 2. Type Shape */

const customer = {
    id: "C001",
    name: "Kasun Sampath",
    address: "Galle"
}

// console.log(customer.dob)
console.log(customer.name);
// customer.id = false;
console.log(customer);

let employee: {
    id: number,
    name: string,
    gender: "male" | "female",
    address: string
}
employee = {
    id: 5,
    name: "Tharindu",
    gender: "male",
    address: "Galle",
    // contact: "011-1234567"
};

let a: "dep" | "cmjd" | true | 0o12;
// a = "ijse";
a = "dep";
// a = "tharindu";
a = true;
// a = 20;
a = 10;
a = 0o12;
a = 0xA;

type Customer = {
    id: string,
    name: string,
    print: () => void
}

let myObj: Customer = {
    id: "C001",
    name: "Kasun Sampath",
    print() {
        console.log(this.id, this.name);
    }
}

let myObj2: Customer = {
    id: "C001",
    name: "Kasun Sampath",
    print() {
        console.log(this.id, this.name);
    }
}

const result = myObj.print();
console.log(result);

// let {id, fullName} = {id: 'C001', fullName: "Kasun Sampath"};

//type imantha = boolean;
//let nidimathai: imantha = "ijse";

// Union Types

type MyType = string | number | boolean;

let asiri: MyType = "ijse";
asiri = 10;
asiri = true;
// asiri = 10n;
// asiri = {}

let myVar: number | undefined;

// myVar = null;

function myFunction(param1: string, param2: string): string {
    return param1 + param2;
}

function myFunction2(this: any, num1: number, num2: number) {
    console.log(this);
    return num1 + num2;
}

let result2 = myFunction2(10, 20);

function getRandomValue(): string | number {
    if (Math.random() < 0.5) return "dep";
    else return 10;
}

type Student = {
    id: string,
    name: string,
    print: () => void
}

let myStudent: Student = {
    id: "C001",
    name: "Kasun",
    print: myPrint
}

function myPrint(this: Student) {
    console.log(this.id, this.name);
}

myStudent.print();

console.log(this);  // <- This is okay

type MyCrazyType = {
    code: string,
    description?: string,
    [key: string]: string | number | number[] | undefined  // Index Signature
}

const myCrazyObject: MyCrazyType = {
    code: "I001",
    // description: "Crazy Item"
};
myCrazyObject.code = "I001";
myCrazyObject.description = "I001";
myCrazyObject.myProp = "ijse";
myCrazyObject.myProp2 = "abc";
myCrazyObject.myProp2 = 10;
myCrazyObject.myProp2 = [10, 20, 30];

type Order = {
    id: string,
    date: string,
    customerName?: string
}

let order: Order = {
    id: "OD001",
    date: "2024-05-01"
}

function myCrazyFunction(id: string, name?: string) {
    console.log(id, name);
}

myCrazyFunction("C001");

let myUnknown: unknown;
myUnknown = "ijse";
if (typeof myUnknown === 'string') {         // <- Type Assertion
    console.log(myUnknown.toUpperCase());
}
myUnknown = 10;
if (typeof myUnknown === 'number') {        // <- Type Assertion
    console.log(myUnknown + 20);
}
myUnknown = [10, 20, 30];
if (Array.isArray(myUnknown)) {              // <- Type Assertion
    myUnknown.forEach((item: number) => console.log(item));
}

// let sappa: string | null = "Direct Entry Program";
let sappa: string | null = getValue();
console.log(sappa!.toUpperCase());

function getValue(): string | null {
    // return Math.random() < 0.5 ? "Direct Entry Program" : null;
    return "Direct Entry Program";
}

let xy = 10;
console.log(typeof xy);
let aa = "IJSE";
console.log(typeof aa);

let abc: typeof aa = "DEP";

let array: [number, string, number, string] = [10, "DEP", 30, "IJSE"];
let tharindu: typeof array[1] = "CMJD";

let nums1: (number | boolean)[] = [10, 20, 30, 40, 50, false];
let nums2: Array<number | boolean> = [10, 20, 30, false, true, 40, 50];

// Tuples in TypeScript
let someArray: [number, string, number, number] = [10,"ijse",30,40]

let myVariable = {};
// console.log(myVariable.abc);

console.log("Hello");