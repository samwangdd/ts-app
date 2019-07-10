/**
 * 泛型
 */

export function creatArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

creatArray(3, 'x');

/**
 * 多个类型参数
 *
 * @template T
 * @template U
 * @param {[T, U]} tuple
 * @returns {[U, T]}
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, '2']);

/**
 * 泛型约束: 传入的参数可能没有length属性，因此使用extends对参数约束
 *
 * @template T
 * @param {T} arg
 * @returns {T}
 */
function logging<T extends Lengthwise>(arg: T): T {
  console.log('arg.length :', arg.length);
  return arg;
}

interface Lengthwise {
  length: number;
}

interface ILength extends Lengthwise {
  hide: 12;
}

// logging('7')

interface ISearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: ISearchFunc;

mySearch = function(source: string) {
  return false;
};
