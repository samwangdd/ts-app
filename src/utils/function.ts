/*
 * 函数式编程方法
 */

/**
 * 组合函数，相当于pipeline
 * @param params
 */
export function compose(f: any, g: any) {
  return (x: any) => {
    // 执行顺序：先执行g，再执行f，从右到左
    return f(g(x));
  };
}

export const Compose = (...fns: any) => (args: any) =>
  fns.reduce((acc: any, cur: any) => cur(acc), args);
