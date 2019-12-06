import * as React from 'react';
import { compose, Compose } from '../utils/function';

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
  onDecrement = () => {
    if (this.state.currentEnthusiasm < 1) {
      return;
    }
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm - 1);
  };

  updateEnthusiasmLevel = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm });
  };

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    const setMark = Compose('1');
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
        <button onClick={this.onIncrement}>+</button>
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
}