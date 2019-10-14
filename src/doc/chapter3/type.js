'use strict';
exports.__esModule = true;
// 数组
exports.list = [1, 2, 3];
exports.arr = [1, 2, 3];
exports.tuple = ['1', 2];
// 2.7之后的版本，对于tuple的定义是有长度限制的数组，所以不能再越界访问了
exports.tuple[1] = 3;
// console.log(tuple[1].toString());
// 枚举
var Color;
(function(Color) {
  Color[(Color['Red'] = 0)] = 'Red';
  Color[(Color['Green'] = 1)] = 'Green';
  Color[(Color['Blue'] = 2)] = 'Blue';
})(Color || (Color = {}));
exports.colorName = Color.Red;
// console.log('colorName :', colorName);
// any
var type = [1, '2', false];
// void
exports.enforce = function() {
  return;
};
exports.force = undefined;
// null
exports.hasNull = null;
// undefined
exports.hasUndefined = undefined;
// never
function err(msg) {
  throw new Error(msg);
}
create({ props: 1 });
create(null);
