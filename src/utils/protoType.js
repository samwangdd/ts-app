const anotherObj = {
  a: 2,
};
// Object.create 会创建一个对象 myObj，并把 myObj 的原型链接到anotherObj
const myObj = Object.create(anotherObj);

console.log('myObje.a :', myObj.a);

// console.log('anotherObj.hasOwnProperty(a) :', anotherObj.hasOwnProperty('a'));
// console.log('anotherObj.hasOwnProperty(a) :', myObj.hasOwnProperty('a'));

/**
 * 5.2.2 构造函数
 */
function Foo() {
  console.log('today is sunny day!');
}
// Foo.prototype指向另一个对象：Foo的原型
// Foo.prototype默认有一个公有并且不可枚举的属性.constructor 
console.log('object :', Foo.prototype.constructor === Foo);

// 1. a是由new创建的，同时会进行原型链的桥接，关联到 Foo.prototype
const a = new Foo();
console.log('Object.getPrototypeOf(a) === Foo.prototype :', Object.getPrototypeOf(a) === Foo.prototype);
console.log('a.constructor === Foo :', a.constructor === Foo);

/**
 * 5.2.3 技术
 */
