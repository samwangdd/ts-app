// eslint-disable-next-line no-extend-native
Function.prototype.Call = function(context) {
  console.log('this :', this);
  // this 指向调用Call的函数
  // context是绑定的目标对象
  context = context || global;
  context.fn = this;
  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    console.log('object :', args.push(arguments[i]));
    // 如果使用eval，则不能使用 args.push(arguments[i]);
    // eval只能接受字符串
    args.push('arguments[' + i + ']');
    // 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
  }
  console.log('args :', args);
  // 执行方法 context.fn()
  // ES6写法：context.fn(...args);
  const res = eval('context.fn(' + args + ')');
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

console.log('bar:', bar.call(foo, 's', 12));
console.log('netcall :', bar.call.call.call.call(netcall, 's', 12));
// bar.Call(null, 's', 12);
