// 1-额外的属性检查
interface SquareConfig {
    color?: string;
    width?: number;
    [name: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'yellow', area: 100}
  return newSquare;
}

let mySquare = createSquare({ colour: 'red', width: 100 });

// 2-函数类型接口
interface SearchFunc {
  ( source: string, subSource: string ): boolean
}

export let mySearch: SearchFunc;
mySearch = function(src, sub) {
  return src.search(sub) > -1;
}

// 3-可索引类型
// 以 number 为索引查找 IStringArr，将得到一个 string
interface IStringArr {
  readonly [index: number]: string;
}

class Animal {
  name: string | undefined
}

class Dog extends Animal {
  breed: string | undefined;
}

// 数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
// 因为当使用 number 来索引时，JavaScript会将它转换成string然后再去索引对象
interface AnimalProps {
  [x: number]: Dog;
  [x: string]: Animal;
}

let myArr:IStringArr = ['Bob', 'Sam', 'Linda'];

/* ---------类实现接口--------- */
// 类的实例接口
interface ClockProps {
  tick(): void;
}
// 类的构造器接口
interface ClockConstructor {
  new(h: number, m:number): ClockProps;
}

function createClock(ctor:ClockConstructor, hour: number, minute: number): ClockProps {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockProps {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockProps {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tik tok');
  }
}

const digitalClock = createClock(DigitalClock, 12, 12)
digitalClock.tick();

/* -----------继承接口----------- */
interface IShape {
  color: string;
}

interface ISquare extends IShape {
  sideLength: number;
}

let square = <ISquare>{};
square.color = 'blue';
// square.width = 22;