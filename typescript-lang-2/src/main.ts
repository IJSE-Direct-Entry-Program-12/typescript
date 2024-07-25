console.log("Hello TypeScript Language 2");

class Customer {
    id: string = '';            // Default Value
    name!: string;              // Not Null Assertion Operator
    address?: string;           // Optional Property
}

class Student {
    #id: string;
    private name: string;
    protected contact: string;

    constructor(id: string, name: string, contact: string) {
        this.#id = id;
        this.name = name;
        this.contact = contact;
    }
}

class BestStudent extends Student {
    print(){
        // console.log(this.#id, this.name, this.contact);
    }
}

let s001 = new Student("S001", "Tharindu",
    "011-1234567");
// console.log(s001.#id, s001.name, s001.contact);

class Employee {
    // id: string;
    // name: string;
    // address: string;
    // contact: string;

    constructor(public id: string, public name: string,
                public address: string, public contact: string) {
        // this.id = id;
        // this.name = name;
        // this.address = address;
        // this.contact = contact;
    }
}

const employee = new Employee("E001", "Kasun Sampath",
    "Galle", "011-1234567");
console.log(employee.id, employee.name, employee.address, employee.contact);

class Teacher {
    readonly institute: string = "IJSE";    // Instance Variable

    constructor(public id: string, public name: string) {
    }

    print(): void {
        const x = 10;       // Local Variable
    }
}

const t001 = new Teacher("T001", "Imantha");
// t001.institute = "ESOFT";
console.log(t001.id, t001.name, t001.institute);

// final class MyFinalClass{}
//
// readonly class MyReadOnlyClass{}

abstract class MyAbstractClass{
    abstract myMethod(): void;
}

class MyConcertClass extends MyAbstractClass{
    myMethod(): void {
    }
}

enum MyEnum{
    CONST1 = "CONSTANT 1",
    CONST2 = "CONSTANT 2",
    CONST3 = "CONSTANT 3",
    CONST4 = "CONSTANT 4"
}

let myVariable: MyEnum = MyEnum.CONST1;
console.log(myVariable);

interface MyInterface {
    /* public abstract */ method1(): void;
    /* public abstract */ method2(num1: number, num2: number): number;
}

class MyClass implements MyInterface {
    method1(): void {
        console.log("method1")
    }
    method2(num1: number, num2: number): number {
        console.log("method2");
        return num1 + num2;
    }
}