/**
 * new的手动实现
 * https://github.com/mqyqingfeng/Blog/issues/13
 */
function objectFactory1() {
  // 1、生成新的对象
  // eslint-disable-next-line no-new-object
  const obj = new Object();
  // const obj = Object.create(null); 不能实现原型链接？？
  // 按照设计，调用时第一个参数是构造函数；shift会改变原数组
  const Constructor = Array.prototype.shift.call(arguments);
  // 2、原型链链接
  obj.__proto__ = Constructor.prototype;
  // 3、this绑定，同时consReturn接收构造函数的返回值
  const consReturn = Constructor.apply(obj, arguments);
  // 4、判断类型并返回对象，
  return typeof consReturn === 'object' ? consReturn || obj : obj;
}

function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';

  // return null;
  return {
    name: name,
    habit: 'Games',
    
  };
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
  console.log('I am ' + this.name);
};

const person = objectFactory1(Otaku, 'sam', 27);
console.log('person :', person);
console.log('person.name :', person.name);
console.log('person.age :', person.age);
console.log('person.habit :', person.habit);
console.log('person.strength :', person.strength);
person.sayYourName();
