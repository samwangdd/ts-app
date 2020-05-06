export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter("world");

greeter.greet();
/* -------- animal -------- */
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(45);
/* -------- simple -------- */
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const coco = new Dog('coco');
coco.bark();
coco.move(23);

/* ------ private ------ */
class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal === rhino;
// rhino === employee;

/**
 * 1、使用private定义类的私有属性
 * 2、使用static定义类的私有方法
 * 3、Parameter properties避免模板代码
 * 4、TS api: Getter & Setter
 * 5、readonly
 * 
 * https://medium.com/iqoqo-engineering/write-beautiful-oo-classes-with-typescript-d708cc9fd9c3
 */
export class User {
  static readonly minNameLen: number = 4;
  // private name: string;

  constructor(private _name: string, private readonly _email: string) {
    User.assertValidName(_name);
    //  this.name = name;
  }

  static assertValidName(name: string) {
    const nameIsValid = User.minNameLen > 3;
    if (!nameIsValid) {
      throw Error('the given name is not valid!');
    }
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  set name(newName: string) {
    User.assertValidName(newName);
    this._name = newName;
  }

  speak() {
    console.log(`I'm ${this.name}`);
  }
}

const vip = new User('Groot', 'gmail');
vip.speak();
vip.name = 'Rocket';
vip.speak();
// vip.assertValidName('G');
console.log('vip.name :>> ', vip.name);
console.log('vip.email :>> ', vip.email);

vip.name = 'G';
vip.speak();
