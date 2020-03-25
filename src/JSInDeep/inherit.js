/**
 * 继承--圣杯模式
 */
const inherit = (function() {
  const F = function() {}; // 临时构造函数
  return function(Target, Origin) {
    // 原型链桥接
    // 如果 Target.prototype = Origin.prototype，实际为直接引用，修改Target会影响Origin
    // 而 new F()生成一个新对象，Target.prototype 指向这个新对象，与 Origin 隔离
    // 所以修改 Target.prototype 不会影响到 Origin
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target; // constructor归位
    Target.prototype.uber = Origin.prototype; // 记录 Target 真正继承自谁
  };
})();

function Person() {}

Person.prototype.sayHello = function() {
  console.log('hello!');
};

function Student(name) {
  console.log(`I'm ${name}, I'll learn hard!`);
}

inherit(Student, Person);

const StudentA = new Student('sam');
StudentA.sayHello();
