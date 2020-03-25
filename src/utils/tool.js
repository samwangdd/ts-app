/**
 * 防抖
 * @param {function} fn
 */
export function deBounce(fn, delay) {
  let timeOut = null;
  console.log('deBounce :', this);
  return function() {
    clearTimeout(timeOut);
    console.log('return :', this);
    timeOut = setTimeout(() => {
      console.log('setTimeout :', this);
      console.log('arguments :', arguments);
      fn.apply(this, arguments);
    }, delay);
  };
}

function sayHi() {
  console.log('sayHi :', this);
  console.log('防抖成功！');
}

// window.addEventListener('scroll', deBounce(sayHi, 2000));

export function DeepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object') return obj;
  if (hash.get(obj)) {
    return hash.get(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  const cloneCon = new obj.constructor();
  hash.set(obj, cloneCon);
  for (let key in obj) {
    const val = obj[key];
    if (obj.hasOwnProperty(key)) {
      cloneCon[key] = DeepClone(val, hash);
    }
  }
  return cloneCon;
}

/**
 * 判断传入对象的数据类型
 * @param {*} params
 */
function type(obj) {
  if (obj === null) return String(obj);
  const exception = ['Array', 'Regxp', 'Date', 'Object', 'Error'];
  const class2type = {};
  exception.forEach(i => (class2type[`[object ${i}]`] = i.toLowerCase()));
  return typeof obj === 'object'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj;
}

// console.log('object :', type('yy&sam'));
// console.log('object :', type(null));
// console.log('object :', type(1123));
// console.log('object :', type(new Date()));
// console.log('object :', type(/\3*?$/));
// console.log('object :', type([]));
// console.log('object :', type({}));
