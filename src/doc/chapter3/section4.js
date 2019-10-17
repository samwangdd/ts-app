"use strict";
/*
 * 声明变量
 */
exports.__esModule = true;
// 矩阵求和
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        // const element = matrix[i];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
exports.sumMatrix = sumMatrix;
var matrix = [[1, 2, 3], [4, 5, 6]];
// console.log('sumMatrix :', sumMatrix(matrix));
// 闭包
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log('j :', j);
        }, 100 * j);
    })(i);
}
