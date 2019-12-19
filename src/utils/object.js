var obj = {
  age: 12,
  name: 'sam',
};

/**
 * 自定义对象迭代器
 */
Object.defineProperty(obj, Symbol.iterator, {
  enumerable: true, // 不可枚举
  writable: false, // 不可修改
  configurable: true, // 可配置
  value: function() {
    var self = this;
    var idx = 0;
    var ks = Object.keys(self);
    return {
      next: function() {
        return {
          value: self[ks[idx++]], // 细节
          down: idx > ks.length,
        };
      },
    };
  },
});

var it = obj[Symbol.iterator]();
console.log('it.next() :', it.next());
console.log('it.next() :', it.next());
console.log('it.next() :', it.next());

for (const i of obj) {
  console.log('i :', i);
}
