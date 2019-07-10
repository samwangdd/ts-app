import React from 'react';

export interface Person {
  readonly name: string;
  age?: string;
  [propsName: string]: any;
}

interface NumArray {
  [index: number]: number;
}

let tom: Person = {
  name: 'abc',
  // age: [1, 2],
  height: '22',
};

// tom.name = 'yy'
enum Color {
  Red,
  Gre,
  Blue = 'red'.length,
}

class Animal {
  /* constructor(name: string) {
    this.name = name;
  } */
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
// a.name = 'Tom';

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
}

let C = new Cat('Tom');
console.log('C.sayHi() :', C.name);

export class Hello extends React.Component<Person, {}> {
  render() {
    return (
      <h1>
        Hello form {this.props.name} and {this.props.age}!
      </h1>
    );
  }
}
