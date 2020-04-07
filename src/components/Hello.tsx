import * as React from 'react';

import { compose, pipeAsync } from '../utils/function';
import style from './hello.css';

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
    const { enthusiasmLevel = 1 } = this.props;
    const setMark = compose(getLength, getMark, toUpperCase);

    console.log('setMark :', setMark('1'));
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic. :D');
    }
    return (
      <div>
        <div className={style.header}>Header</div>
        <div className={style.footer}>Footer</div>
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
