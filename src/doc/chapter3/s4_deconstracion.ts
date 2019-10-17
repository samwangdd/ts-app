let input: [number, number] = [1, 2]; // 如果不声明input类型，会推断成 number[]

function f([first, second]: [number, number]) {
  console.log('first :', first);
  console.log('second :', second);
}

f(input);

function deconstract({ a, b = 0 } = { a: '' }): void {}

deconstract({a: 'yes'})
// deconstract({})

export { input };
