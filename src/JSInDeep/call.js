/** 
 * 改变this指向
 * 执行函数
 * 接收参数
 * 返回值
*/
// eslint-disable-next-line no-extend-native
Function.prototype.Call = function(context) {
  console.log('this :', this);
  // Call是一个函数，它是内置对象Function的一个属性，bar通过链式调用Call时，应用了隐式绑定
  // 所以 this 指向调用Call的函数bar
  // context是绑定的目标对象, 如果为null则指向全局对象，node环境中为global，浏览器中为window
  context = context || global;
  // 1. 把this（bar）变成context的属性
  context.fn = this;
  let args = [];
  // arguments是一个类数组，也可以使用ES6的解构
  for (let i = 1, len = arguments.length; i < len; i++) {
    console.log('object :', args.push(arguments[i]));
    // 注意：如果使用eval，则不能使用 args.push(arguments[i]);
    // 因为 eval 只能接受字符串
    args.push('arguments[' + i + ']');
    // 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
  }
  console.log('args :', args);
  // 2. 执行方法 context.fn()，应用了隐式绑定
  // ES6写法：context.fn(...args);
  // 接收this函数的返回值
  const res = eval('context.fn(' + args + ')');
  // 3. 删除属性
  delete context.fn;
  return res;
};

const foo = {
  value: 1,
};

function netcall(params) {
  console.log('this.address :', this.address);
  return 123;
}

function bar(name, age) {
  console.log('name :', name);
  console.log('age :', age);
  console.log('this.value :', this.value);
  return this.value;
}

console.log('bar:', bar.Call(foo, 's', 12));
console.log('netcall :', bar.call.call.call.call(netcall, 's', 12));
// bar.Call(null, 's', 12);
