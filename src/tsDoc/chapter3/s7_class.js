"use strict";
// export class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return 'Hello, ' + this.greeting;
//   }
// }
exports.__esModule = true;
// let greeter = new Greeter("world");
// greeter.greet();
// /* -------- animal -------- */
// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters: number = 5) {
//     console.log('Slithering...');
//     super.move(distanceInMeters);
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters: number = 45) {
//     console.log('Galloping...');
//     super.move(distanceInMeters);
//   }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(45);
// /* -------- simple -------- */
// class Dog extends Animal {
//   bark() {
//     console.log('Woof! Woof!');
//   }
// }
// const coco = new Dog('coco');
// coco.bark();
// coco.move(23);
// /* ------ private ------ */
// class Rhino extends Animal {
//   constructor() {
//     super('Rhino');
//   }
// }
// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal === rhino;
// // rhino === employee;
var User = /** @class */ (function () {
    // private name: string;
    function User(_name, _email) {
        this._name = _name;
        this._email = _email;
        User.assertValidName(_name);
        //  this.name = name;
    }
    User.assertValidName = function (name) {
        var nameIsValid = User.minNameLen > 3;
        if (!nameIsValid) {
            throw Error('the given name is not valid!');
        }
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            User.assertValidName(newName);
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.speak = function () {
        console.log("I'm " + this.name);
    };
    User.minNameLen = 4;
    return User;
}());
exports.User = User;
var vip = new User('Groot', 'gmail');
vip.speak();
vip.name = 'Rocket';
vip.speak();
// vip.assertValidName('G');
console.log('vip.name :>> ', vip.name);
console.log('vip.email :>> ', vip.email);
vip.name = 'G';
vip.speak();
