// 数组
export let list: number[] = [1, 2, 3];
export let arr: Array<number> = [1, 2, 3];

// 元组
export let tuple: [string, number];
tuple = ['1', 2];
// 2.7之后的版本，对于tuple的定义是有长度限制的数组，所以不能再越界访问了
tuple[1] = 3;
// console.log(tuple[1].toString());

// 枚举
enum Color {
  'Red',
  'Green',
  'Blue',
}

export let colorName: Color = Color.Red;
// console.log('colorName :', colorName);

// any
let type: any[] = [1, '2', false];

// void
export let enforce = (): void => {
  return;
};
export let force: void = undefined;

// null
export let hasNull: null = null;

// undefined
export let hasUndefined: undefined = undefined;

// never
function err(msg: string): never {
  throw new Error(msg);
}

// object
declare function create(o: object | null): void;

create({ props: 1 });
create(null);

// 断言，类似于类型转换
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length

let strLen: number = (someValue as string).length
