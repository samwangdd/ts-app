import * as React from 'react';
import { compose, pipeAsync, deepMerge } from '../utils/function';

const sum = pipeAsync(
  (x: number) => x + 1,
  (x: number) => new Promise(resolve => setTimeout(() => resolve(x + 2), 2000)),
  (x: number) => x + 3,
  (x: number) => x + 4
);

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => {
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm + 1);
  };
  onDecrement = async () => {
    if (this.state.currentEnthusiasm < 1) {
      return;
    }
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm - 1);
    console.log('sum :', await sum(5));
  };

  updateEnthusiasmLevel = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm });
  };
  render() {
    const obj1 = {
      name: 'zhangsan',
      age: '18',
      address: (x: number) => x + 134,
      language: [1, 2, 3, 4],
      child: {
        name: 'bar',
      },
    };
    const obj2 = {
      name: 'lisi',
      age: '23',
      address: undefined,
      language: [1, [2, 3], 4],
      child: {
        age: 1,
      },
    };
    // const obj3 = deepMerge({}, [obj1, obj2], true);
    const obj4 = Object.assign({}, obj2);
    obj2.language = [111];
    obj4.child.age = 10;
    console.log('obj1 :', obj1);
    console.log('obj2 :', obj2);
    // console.log('obj3 :', obj3);
    console.log('obj4 :', obj4);
    const { name, enthusiasmLevel = 1 } = this.props;
    const setMark = compose(getLength, getMark, toUpperCase);
    const foo = {
      value: 1,
    };

    console.log('setMark :', setMark('1'));
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + setMark(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement} id="increment">+</button>
      </div>
    );
  }
}

export default Hello;

const getLength = (params: number) => {
  console.log('setMark :', 2);
  return new Array(params + 1);
};

const getMark = (params: Array<string>) => {
  console.log('setMark :', 3);
  return params.join('!');
};

const toUpperCase = (params: string) => {
  console.log('setMark :', 1);
  return params.toUpperCase();
};
