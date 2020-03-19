/**
 * 删除数组中函数返回为false的元素
 * @param arr 目标数组
 * @param func 判断条件
 * 
 * EXAMPLES
 * remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
 */
export const remove = (arr, func) =>
  arr.filter(func).reduce((acc, cur) => {
    // 需要改变原数组
    arr.splice(arr.indexOf(cur), 1);
    return acc.concat(cur);
  }, []);


