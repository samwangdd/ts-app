/*
 * 声明变量
 */

// 矩阵求和
export function sumMatrix(matrix: Array<Array<number>>) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    // const element = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

let matrix = [[1, 2, 3], [4, 5, 6]];

// console.log('sumMatrix :', sumMatrix(matrix));

// 闭包
for (var i = 0; i < 10; i++) {
  (function(j: number) {
    setTimeout(() => {
      console.log('j :', j);
    }, 100 * j);
  })(i);
}
