// using types in parameters
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
const doubleNum = (num) => {
    return num * 2;
};
console.log(doubleNum(5)); // 10
console.log(doubleNum(10)); // 20
const isEven = (num) => {
    return num % 2 === 0;
};
console.log(isEven(12));
const isPalindrome = (text) => {
    const lowercase = text.toLowerCase();
    const reversed = lowercase.split('').reverse().join('');
    return lowercase === reversed ? `It's a palindrome!` : `It's not a palindrome :(`;
};
console.log(isPalindrome("Racecar"));
const assortment = ["Hello", 5, true];
const student = {
    firstName: "John",
    lastName: "Smith",
    age: 40,
    getBirthYear() {
        const date = new Date();
        return date.getFullYear() - this.age;
    },
    sayGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}. I was born in ${this.getBirthYear()}.`;
    }
};
console.log(student.sayGreeting());
// enums
const deviceLanguage = "es";
var Langs;
(function (Langs) {
    Langs["en"] = "Hello";
    Langs["es"] = "Hola";
    Langs["zt"] = "Ni hao";
    Langs["jp"] = "Yaho";
    Langs["fl"] = "Kamusta";
})(Langs || (Langs = {}));
const sayHello = (lang) => {
    return `${lang}! Your device is ready.`;
};
console.log(sayHello(Langs[deviceLanguage]));
const combine = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(combine(5, 4)); // 9
console.log(combine("Hello", "World")); // HelloWorld
console.log(combine("Hello", 5)); // Hello5
const fruits = [];
function addFruit(fruit) {
    fruits.push(fruit);
    console.log(`Added ${fruit} to fruit basket.`);
}
addFruit("apple");
addFruit("mango");
function systemCrash() {
    throw new Error("System crashed :(");
}
// literal types
const sayHi = (msg) => {
    return msg;
};
console.log(sayHi("Hi"));
const toggleSwitchboard = (status) => {
    return status === 0 ? 'Switchboard is off' : 'Switchboard is on';
};
console.log(toggleSwitchboard(1)); // Switchboard is on
const student1 = {
    firstName: 'John',
    lastName: 'Smith',
    startDate: 2024,
    campus: 'Calgary'
};
const student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: 2024,
    campus: 'Vancouver'
};
function combine2(a, b) {
    return a + b;
}
console.log(combine2(5, 10));
console.log(combine2("Hey", "There"));
console.log(combine2("Hello", 10));
console.log(combine2(5, "hello"));
// rest parameters
function addNumbers(isCalculate, ...args) {
    if (isCalculate) {
        const sum = args.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return `The total sum is ${sum}.`;
    }
    else {
        return `Pass true to addNumbers fn`;
    }
}
console.log(addNumbers(true, 5, 4, 2, 3)); // 14
const sayIntro = (name, age) => {
    return `My name is ${name} and I am ${age} years old.`;
};
console.log(sayIntro("John", 40));
// typeof
function add(num1, num2) {
    return num1 + num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
};
console.log(multiply(5, 20));
function getFullName(fname, lname) {
    return `${fname} ${lname}`;
}
const animalSound = (animal, sound) => {
    return `${animal} makes a ${sound} sound.`;
};
console.log(animalSound("Cat", "meow meow"));
const users = [
    { name: "John Smith", age: 40 },
    { name: "Joe Doe", age: 35 },
    { name: "Mary", age: 42 }
];
const employee = {
    firstName: "John",
    lastName: "Smith",
    isHired: true,
    dateHired: 2024,
    schedule: ["Mon", "Tue", "Wed"],
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
const intern = {
    firstName: "Jane",
    lastName: "Doe",
    course: "WAD",
    yearGraduated: 2025,
    dateHired: 2024
};
class Car {
    brand;
    make;
    year;
    constructor(b, m, y) {
        this.brand = b;
        this.make = m;
        if (y) {
            this.year = y;
        }
    }
    getBrand() {
        return this.brand;
    }
}
const corolla = new Car('Toyota', 'Corolla');
console.log(corolla.getBrand());
const newStudent = {
    firstName: "Joey",
    lastName: "Wheeler",
    gradeSchool: "CICCC Primary School",
    grade: 100
};
let exampleInput = 5;
// discriminated unions
class FWD {
    drive() {
        console.log(`Drives a maximum of 220 kmh...`);
    }
}
class AWD {
    drive() {
        console.log(`Drives a maximum of 280kmh...`);
    }
    turn() {
        console.log(`Turns 360 degrees...`);
    }
}
const car1 = new FWD();
const car2 = new AWD();
function testCar(car) {
    car.drive();
    if (car instanceof AWD) {
        car.turn();
    }
}
testCar(car1);
testCar(car2);
const displayData = (name, age, address) => {
    if (address) {
        return `${name}, ${age}, ${address}`;
    }
    return `${name}, ${age}`;
};
console.log(displayData("John", 40, "Vancouver"));
// generics
class Staff {
    name;
    position;
    age;
}
const staff1 = new Staff();
staff1.name = "John";
staff1.position = "Mechanic";
staff1.age = 50;
console.log(staff1);
function combine3(a, b) {
    return `${a} ${b}`;
}
console.log(combine3(5, 6));
console.log(combine3("Hello", "World"));
const data1 = { data: "Hello" };
const data2 = { data: 5 };
// function generic types
const getSecondElement = (arr) => {
    return arr[1];
};
console.log(getSecondElement([5, 2, 3]));
console.log(getSecondElement(["Hello", "There"]));
const putIntoArray = (input1, input2) => {
    return [input1, input2];
};
console.log(putIntoArray("Hello", 10));
// constraints
class Volunteer {
    name;
    age;
}
const volunteer1 = new Volunteer();
volunteer1.name = "John"; // valid
volunteer1.age = "40"; // valid
//volunteer1.age = true // invalid
const checkLastName = (person) => {
    return person.lastName;
};
const somePerson = {
    firstName: "John",
    lastName: "Smith"
};
console.log(checkLastName(somePerson));
const countElements = (input) => {
    return input.length;
};
console.log(countElements([3, 2, 5]));
console.log(countElements('Hello'));
console.log(countElements({ name: 'hey', length: 5 }));
const newPet = {
    name: "Georgie",
};
const newPet2 = {
    name: "Mimi",
    breed: "Chihuahua",
    yearAdopted: 2024,
    yearBorn: 2023
};
// keyof
const displayProp = (obj, prop) => {
    return obj[prop];
};
console.log(displayProp({ name: "John", age: 20 }, "name"));
console.log(displayProp({ name: "Jane", age: 50 }, "age"));
// nullish coalescing
let firstname = undefined;
console.log(firstname ?? "No name");
const worker1 = {
    firstName: "John",
    lastName: "Smith",
    address: {
        city: {
            name: "Tokyo"
        }
    }
};
console.log(worker1.address.city?.name ?? 'No city available');
function LogClass(target, context) {
    console.log(target, context);
    console.log('Class is getting loaded...');
}
function AddBuildingDetails(target, context) {
    return class extends target {
        constructor(...args) {
            super(...args);
        }
        yearBuild = 2023;
        floors = 10;
        rooms = 70;
    };
}
function AddLandlord(target, context) {
    return function (args) {
        args.push({ name: "Jane", rent: 0 });
        return args;
    };
}
let Building = (() => {
    let _classDecorators = [LogClass, AddBuildingDetails];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _occupants_decorators;
    let _occupants_initializers = [];
    var Building = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _occupants_decorators = [AddLandlord];
            __esDecorate(null, null, _occupants_decorators, { kind: "field", name: "occupants", static: false, private: false, access: { has: obj => "occupants" in obj, get: obj => obj.occupants, set: (obj, value) => { obj.occupants = value; } }, metadata: _metadata }, _occupants_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Building = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), void 0);
        floors;
        occupants = __runInitializers(this, _occupants_initializers, []);
        constructor(n) {
            this.name = n;
        }
    };
    return Building = _classThis;
})();
const newBuilding = new Building("Cool Building");
console.log(newBuilding.floors);
console.log(newBuilding);
