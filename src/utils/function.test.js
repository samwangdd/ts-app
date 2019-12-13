import { clone } from './function';

const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2',
    },
  },
  field5: [1, 2],
};

// target.target = target;

const obj1 = {
  name: 'zhangsan',
  age: '18',
  address: x => x + 134,
  language: [1, 2, 3, 4],
  child: {
    name: 'bar',
  },
};

test('clone', () => {
  console.log('clone(target) :', clone(target));
  expect(clone(target)).toMatchObject(target);
  expect(clone(obj1)).toMatchObject(obj1);
});
