interface IPrintLabel {
  label: string;
}

interface Square {
  color: string;
  area: number;
}

export function printLable(labelObj: IPrintLabel) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: '1' };

printLable(myObj);

/* 可选属性 */

interface IConfig {
  color?: string;
  width?: number;
}

interface ISquare {
  color: string;
  area: number;
}

function createSquare(config: IConfig): ISquare {
  let newSquare = { color: 'white', area: 100 };
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

/* 只读属性 */
interface ICustom {
  readonly user: string
}
const custom: ICustom = {
  user: 'yy'
};
let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a
a = ro as number[];
// console.log(a[0] = 10)