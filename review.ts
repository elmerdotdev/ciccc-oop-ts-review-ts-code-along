// using types in parameters

const doubleNum = (num: number): number => {
  return num * 2
}

console.log(doubleNum(5)) // 10
console.log(doubleNum(10)) // 20

const isEven = (num: number): boolean => {
  return num % 2 === 0
}

console.log(isEven(12))


const isPalindrome = (text: string): string => {
  const lowercase = text.toLowerCase()
  const reversed = lowercase.split('').reverse().join('')
  return lowercase === reversed ? `It's a palindrome!` : `It's not a palindrome :(`

}

console.log(isPalindrome("Racecar"))

// Tuple

type Assortment = [string, number, boolean]
const assortment: Assortment = ["Hello", 5, true]


// Object

type Student = {
  firstName: string
  lastName: string
  age: number
  getBirthYear: () => number
  sayGreeting: () => string
}

const student: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 40,
  getBirthYear() {
    const date = new Date()
    return date.getFullYear() - this.age
  },
  sayGreeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}. I was born in ${this.getBirthYear()}.`
  }
}

console.log(student.sayGreeting())


// enums

const deviceLanguage = "es"

enum Langs {
  en = "Hello",
  es = "Hola",
  zt = "Ni hao",
  jp = "Yaho",
  fl = "Kamusta"
}

const sayHello = (lang: Langs) => {
  return `${lang}! Your device is ready.`
}

console.log(sayHello(Langs[deviceLanguage]))


// union parameters

type StrNum = string | number

const combine = (a: StrNum, b: StrNum): StrNum => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

console.log(combine(5, 4)) // 9
console.log(combine("Hello", "World")) // HelloWorld
console.log(combine("Hello", 5)) // Hello5


const fruits: string[] = []
function addFruit(fruit: string): void {
  fruits.push(fruit)
  console.log(`Added ${fruit} to fruit basket.`)
}
addFruit("apple")
addFruit("mango")


function systemCrash(): never {
  throw new Error("System crashed :(")
}


// literal types

const sayHi = (msg: "Hello" | "Hi"): string => {
  return msg
}

console.log(sayHi("Hi"))


const toggleSwitchboard = (status: 0 | 1): string => {
  return status === 0 ? 'Switchboard is off' : 'Switchboard is on'
}

console.log(toggleSwitchboard(1)) // Switchboard is on


type CICCCStudent = {
  firstName: string
  lastName: string
  startDate: number
  campus: 'Vancouver' | 'Calgary'
}

const student1: CICCCStudent = {
  firstName: 'John',
  lastName: 'Smith',
  startDate: 2024,
  campus: 'Calgary'
}

const student2: CICCCStudent = {
  firstName: 'Jane',
  lastName: 'Doe',
  startDate: 2024,
  campus: 'Vancouver'
}


// overloading

function combine2(a: string, b: string): string
function combine2(a: number, b: number): number
function combine2(a: string, b: number): string
function combine2(a: number, b: string): string
function combine2(a: any, b: any): any {
  return a + b
}

console.log(combine2(5, 10))
console.log(combine2("Hey", "There"))
console.log(combine2("Hello", 10))
console.log(combine2(5, "hello"))


// rest parameters

function addNumbers(isCalculate: boolean, ...args: number[]): string {
  if (isCalculate) {
    const sum: number = args.reduce((acc: number, curr: number): number => {
      return acc + curr
    }, 0)
    return `The total sum is ${sum}.`
  } else {
    return `Pass true to addNumbers fn`
  }
}

console.log(addNumbers(true, 5, 4, 2, 3)) // 14


type IntroFn = (a: string, b: number) => string
const sayIntro: IntroFn = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old.`
}
console.log(sayIntro("John", 40))


// typeof

function add(num1: number, num2: number): number {
  return num1 + num2
}

const multiply: typeof add = (num1, num2) => {
  return num1 * num2
}

console.log(multiply(5, 20))


function getFullName(fname: string, lname: string): string {
  return `${fname} ${lname}`
}

const animalSound: typeof getFullName = (animal, sound) => {
  return `${animal} makes a ${sound} sound.`
}

console.log(animalSound("Cat", "meow meow"))


type User = {
  name: string
  age: number
}

const users: User[] = [
  { name: "John Smith", age: 40 },
  { name: "Joe Doe", age: 35 },
  { name: "Mary", age: 42 }
]


// interface

interface IEmployee {
  firstName: string
  lastName: string
  isHired: boolean
  dateHired: number
  schedule: string[]
  getFullName: () => string
}

const employee: IEmployee = {
  firstName: "John",
  lastName: "Smith",
  isHired: true,
  dateHired: 2024,
  schedule: ["Mon", "Tue", "Wed"],
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}


interface IName {
  firstName: string
  lastName: string
}

interface IEducationDetails {
  course: string
  yearGraduated: number
}

interface IIntern extends IName, IEducationDetails {
  dateHired: number
}

const intern: IIntern = {
  firstName: "Jane",
  lastName: "Doe",
  course: "WAD",
  yearGraduated: 2025,
  dateHired: 2024
}


interface ICar {
  brand: string
  make: string
  year?: number
  getBrand: () => string
}

class Car implements ICar {
  brand: string
  make: string
  year?: number

  constructor(b: string, m: string, y?: number) {
    this.brand = b
    this.make = m
    if (y) {
      this.year = y
    }
  }

  getBrand() {
    return this.brand
  }
}

const corolla = new Car('Toyota', 'Corolla')
console.log(corolla.getBrand())


// intersection types

type StudentName = {
  firstName: string
  lastName: string
}

type StudentPrimary = {
  gradeSchool: string
  grade: number
}

type StudentDetails = StudentName & StudentPrimary

const newStudent: StudentDetails = {
  firstName: "Joey",
  lastName: "Wheeler",
  gradeSchool: "CICCC Primary School",
  grade: 100
}


type InputA = string | number
type InputB = number | boolean
type InputC = InputA & InputB // this will get the types that are the same between the two types
let exampleInput: InputC = 5


// discriminated unions

class FWD {
  drive() {
    console.log(`Drives a maximum of 220 kmh...`)
  }
}

class AWD {
  drive() {
    console.log(`Drives a maximum of 280kmh...`)
  }

  turn() {
    console.log(`Turns 360 degrees...`)
  }
}

type CarType = FWD | AWD

const car1 = new FWD()
const car2 = new AWD()

function testCar(car: CarType) {
  car.drive()
  if (car instanceof AWD) {
    car.turn()
  }
}

testCar(car1)
testCar(car2)


const displayData = (name: string, age: number, address?: string): string => {
  if (address) {
    return `${name}, ${age}, ${address}`
  }
  return `${name}, ${age}`
}

console.log(displayData("John", 40, "Vancouver"))


// generics

class Staff<T, U> {
  name: T
  position: T
  age: U
}

const staff1 = new Staff<string, number>()
staff1.name = "John"
staff1.position = "Mechanic"
staff1.age = 50
console.log(staff1)


function combine3<T>(a: T, b: T): string {
  return `${a} ${b}`
}

console.log(combine3<number>(5, 6))
console.log(combine3<string>("Hello", "World"))


interface IData<T> {
  data: T
}

const data1: IData<string> = { data: "Hello" }
const data2: IData<number> = { data: 5 }


// function generic types

const getSecondElement = <T>(arr: T[]): T => {
  return arr[1]
}

console.log(getSecondElement([5, 2, 3]))
console.log(getSecondElement(["Hello", "There"]))


const putIntoArray = <T, U>(input1: T, input2: U): [T, U] => {
  return [input1, input2]
}

console.log(putIntoArray("Hello", 10))


// constraints

class Volunteer<T extends string | number, U extends string | number> {
  name: T
  age: U
}

const volunteer1 = new Volunteer()
volunteer1.name = "John" // valid
volunteer1.age = "40" // valid
//volunteer1.age = true // invalid


const checkLastName = <T extends { lastName: string }>(person: T): string => {
  return person.lastName
}

const somePerson = {
  firstName: "John",
  lastName: "Smith"
}

console.log(checkLastName(somePerson))


const countElements = <T extends { length: number }>(input: T): number => {
  return input.length
}

console.log(countElements([3, 2, 5]))
console.log(countElements('Hello'))
console.log(countElements({ name: 'hey', length: 5 }))


// partials

interface IPet {
  name: string
  breed: string
  yearAdopted: number
  yearBorn: number
}

const newPet: Partial<IPet> = { // Partial makes all properties of IPet optional
  name: "Georgie",
}

const newPet2: IPet = {
  name: "Mimi",
  breed: "Chihuahua",
  yearAdopted: 2024,
  yearBorn: 2023
}


// keyof

const displayProp = <T, U extends keyof T>(obj: T, prop: U): T[U] => {
  return obj[prop]
}

console.log(displayProp({ name: "John", age: 20 }, "name"))
console.log(displayProp({ name: "Jane", age: 50 }, "age"))



// nullish coalescing

let firstname = undefined
console.log(firstname ?? "No name")


// optional properties

interface Address {
  city?: {
    name: string
  }
}

interface StaffWorker {
  firstName: string
  lastName: string
  address: Address
}

const worker1: StaffWorker = {
  firstName: "John",
  lastName: "Smith",
  address: {
    city: {
      name: "Tokyo"
    }
  }
}

console.log(worker1.address.city?.name ?? 'No city available')


// class decorator

interface IBuilding {
  name: string
  floors: number
}

type Occupant = {
  name: string,
  rent: number
}

function LogClass(target: Function, context: ClassDecoratorContext) {
  console.log(target, context)
  console.log('Class is getting loaded...')
}

function AddBuildingDetails<T extends { new (...args: any[]) }>(target: T, context: ClassDecoratorContext) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args)
    }

    yearBuild = 2023
    floors = 10
    rooms = 70
  }
}

function AddLandlord<T, U extends Occupant[]>(target: undefined, context: ClassFieldDecoratorContext<T, U>) {
  return function (args: U) {
    args.push({ name: "Jane", rent: 0 })
    return args
  }
}

@LogClass
@AddBuildingDetails
class Building {
  name: string
  floors: number

  @AddLandlord
  occupants: Occupant[] = []

  constructor(n: string) {
    this.name = n
  }
}

const newBuilding: IBuilding = new Building("Cool Building")
console.log(newBuilding.floors)
console.log(newBuilding)
