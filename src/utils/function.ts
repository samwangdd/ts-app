/*
 * 函数式编程方法
 */

/**
 * 组合函数，相当于pipeline
 * @param params
 */
export function pipeLine(f: any, g: any) {
  return (x: any) => {
    // 执行顺序：先执行g，再执行f，从右到左
    return f(g(x));
  };
}
/**
 * Performs left-to-right function composition
 * @param fns
 */
export const compose = (...fns: any) => (args: any) =>
  fns.reduce((acc: any, cur: any) => cur(acc), args);

/**
 * Performs left-to-right function composition for asynchronous functions.
 * 使用场景：有异步取数据的时候
 * @param fns
 */
export const pipeAsync = (...fns: any) => (args: any) =>
  fns.reduce((acc: any, cur: any) => acc.then(cur), Promise.resolve(args));

/**
 * 合并一个或多个对象到target，可以用于深拷贝
 * @param target(Object) 对象都合并到target里
 * @param source(Array) 合并的对象
 * @param isDeep(Boolean) 是否深合并
 */
export const deepMerge = (
  target: any,
  source: Array<any>,
  isDeep?: boolean
) => {
  for (const key in source) {
    if (isDeep && (isPlainObject(source[key]) || isPlainArray(source[key]))) {
      // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
      if (isPlainObject(source[key]) && !isPlainObject(target[key]))
        target[key] = {};
      // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
      if (isPlainArray(source[key]) && !isPlainArray(target[key]))
        target[key] = [];
      // 执行递归
      deepMerge(target[key], source[key], isDeep);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

/**
 * 深拷贝-A
 * @param target 目标对象
 */
export function clone(target: any, map = new WeakMap()) {
  if (typeof target === 'object') {
    // 兼容数组
    let cloneTarget = new target.constructor();
    // 通过map开辟新储存空间，兼容循环引用
    if (map.get(target)) {
      return map.get(target);
    }
    // key为target，value为cloneTarget
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

/**
 * 深拷贝-B
 * @param obj 目标对象
 * @param hash
 */
export function deepClone(obj: any, hash = new WeakMap()) {
  // 如果是函数也直接返回
  if (typeof obj !== 'object') return obj;
  // 利用WeakMap做储存，防止循环引用
  if (hash.get(obj)) return hash.get(obj);
  // 特殊对象：Date, RegExp
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 初始化属性值，如果是对象为 {}，如果是数组为 []
  const cloneObj = new obj.constructor();

  hash.set(obj, cloneObj);

  for (let key in obj) {
    const value = obj[key];
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(value, hash);
    }
  }

  return cloneObj;
}

const getType = (target: any) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

const isObject = (type: string) => type === 'Object';

const isArray = (type: string) => type === 'Array';

const isPlainObject = compose(getType, isObject);
const isPlainArray = compose(getType, isArray);
