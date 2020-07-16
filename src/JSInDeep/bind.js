/* eslint-disable no-extend-native */
// https://github.com/mqyqingfeng/Blog/issues/12
Function.prototype.Bind = function(context) {
  const fToBind = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const fNOP = function() {};

  const fBound = function() {
    const bindArgs = Array.prototype.slice.call(arguments);
    return fToBind.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};

function foo(name) {
  this.name = name;
  console.log('age', this.age);
}

const baz = {
  age: 27,
};

const bebabo = foo.Bind(baz);

bebabo(25);
